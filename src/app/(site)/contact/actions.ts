"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

import { clientKey, rateLimit } from "@/lib/rate-limit";

export type InquiryState = {
  status: "idle" | "sent" | "error" | "unconfigured";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  /** Echoed back so the form keeps what the visitor typed after an error. */
  values?: Record<string, string>;
};

const EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
// C0/C1 control characters, except tab and newline (newline is kept only in the message body).
const CONTROL = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g;
const NEWLINES = /[\r\n\t]+/g;

/** Reads one text field: trimmed, length-capped, control characters removed. */
function str(fd: FormData, key: string, max: number, multiline = false) {
  const v = fd.get(key);
  if (typeof v !== "string") return "";
  let s = v.replace(CONTROL, "");
  if (!multiline) s = s.replace(NEWLINES, " ");
  return s.trim().slice(0, max);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/** 5 inquiries per visitor per 10 minutes. */
const LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const DELIVERY_TIMEOUT_MS = 10_000;

/**
 * Sends a project inquiry.
 * Delivery (configure at least one in the environment):
 *  - SMTP_HOST + SMTP_USER + SMTP_PASS + CONTACT_TO_EMAIL (+ optional SMTP_PORT, default 465) → email over SMTP,
 *    e.g. the hello@venlynk.com Hostinger mailbox. Used instead of Resend when set.
 *  - RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL) → email via Resend
 *  - CONTACT_WEBHOOK_URL → JSON POST (Zapier, Make, Slack workflow, Google Apps Script…)
 * The webhook URL comes only from the server environment, never from the request.
 */
export async function sendInquiry(_prev: InquiryState, fd: FormData): Promise<InquiryState> {
  const values = {
    name: str(fd, "name", 120),
    email: str(fd, "email", 200),
    company: str(fd, "company", 160),
    services: fd
      .getAll("services")
      .filter((v): v is string => typeof v === "string")
      .slice(0, 8)
      .map((v) => v.replace(CONTROL, "").replace(NEWLINES, " ").trim().slice(0, 60))
      .join(", "),
    budget: str(fd, "budget", 40),
    message: str(fd, "message", 5000, true),
  };

  // Honeypot: bots fill hidden fields; pretend success.
  if (str(fd, "website", 200)) return { status: "sent" };

  const fieldErrors: InquiryState["fieldErrors"] = {};
  if (values.name.length < 2) fieldErrors.name = "Enter your name.";
  if (!EMAIL.test(values.email)) fieldErrors.email = "Enter a valid email address, like name@company.com.";
  if (values.message.length < 10) fieldErrors.message = "Tell us a little about the project. A sentence or two is enough.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors, values };
  }

  // Throttle only well-formed submissions, so a visitor fixing typos isn't locked out.
  const { ok } = rateLimit(`inquiry:${clientKey(await headers())}`, LIMIT);
  if (!ok) {
    return {
      status: "error",
      message: "Too many messages in a short time. Wait a few minutes, or email us directly.",
      values,
    };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Venlynk website <onboarding@resend.dev>";
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const useSmtp = !!(smtpHost && smtpUser && smtpPass && to);

  if (!useSmtp && !(resendKey && to) && !webhook) {
    return { status: "unconfigured", values };
  }

  const lines = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company || "—"],
    ["Interested in", values.services || "—"],
    ["Budget", values.budget || "—"],
  ];

  const subject = `New project inquiry: ${values.name}${values.company ? `, ${values.company}` : ""}`;
  const html = `<h2>New project inquiry</h2><table>${lines
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p>${escapeHtml(values.message).replace(/\r?\n/g, "<br>")}</p>`;
  const text = `${lines.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${values.message}`;
  const ensureOk = (r: Response) => {
    if (!r.ok) throw new Error(`Delivery failed: ${r.status}`);
  };

  try {
    const jobs: Promise<void>[] = [];
    if (useSmtp) {
      const port = Number(process.env.SMTP_PORT) || 465;
      const transport = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure: port === 465,
        auth: { user: smtpUser, pass: smtpPass },
        connectionTimeout: DELIVERY_TIMEOUT_MS,
        greetingTimeout: DELIVERY_TIMEOUT_MS,
        socketTimeout: DELIVERY_TIMEOUT_MS,
      });
      jobs.push(
        transport
          .sendMail({
            from: process.env.CONTACT_FROM_EMAIL || `Venlynk website <${smtpUser}>`,
            to: to!.split(",").map((s) => s.trim()),
            // Name and email are already stripped of line breaks and checked above.
            replyTo: { name: values.name, address: values.email },
            subject,
            text,
            html,
          })
          .then(() => undefined),
      );
    } else if (resendKey && to) {
      jobs.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
          signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
          body: JSON.stringify({
            from,
            to: to.split(",").map((s) => s.trim()),
            reply_to: values.email,
            subject,
            html,
          }),
        }).then(ensureOk),
      );
    }
    if (webhook) {
      jobs.push(
        fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          redirect: "error",
          signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
          body: JSON.stringify({ ...values, source: "venlynk.com", receivedAt: new Date().toISOString() }),
        }).then(ensureOk),
      );
    }
    await Promise.all(jobs);
    return { status: "sent" };
  } catch (err) {
    // Log the reason only: never the request, the visitor's details or any key.
    console.error("[contact] inquiry delivery failed:", err instanceof Error ? err.name + ": " + err.message : "unknown");
    return {
      status: "error",
      message: "Your message didn't send. Try again, or email us directly.",
      values,
    };
  }
}
