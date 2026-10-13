"use server";

export type InquiryState = {
  status: "idle" | "sent" | "error" | "unconfigured";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  /** Echoed back so the form keeps what the visitor typed after an error. */
  values?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(fd: FormData, key: string, max: number) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/**
 * Sends a project inquiry.
 * Delivery (configure at least one in the environment):
 *  - RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL) → email via Resend
 *  - CONTACT_WEBHOOK_URL → JSON POST (Zapier, Make, Slack workflow, Google Apps Script…)
 */
export async function sendInquiry(_prev: InquiryState, fd: FormData): Promise<InquiryState> {
  const values = {
    name: str(fd, "name", 120),
    email: str(fd, "email", 200),
    company: str(fd, "company", 160),
    services: fd.getAll("services").filter((v): v is string => typeof v === "string").slice(0, 8).join(", "),
    budget: str(fd, "budget", 40),
    message: str(fd, "message", 5000),
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

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Venlynk website <onboarding@resend.dev>";
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!(resendKey && to) && !webhook) {
    return { status: "unconfigured", values };
  }

  const lines = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company || "—"],
    ["Interested in", values.services || "—"],
    ["Budget", values.budget || "—"],
  ];

  try {
    const jobs: Promise<Response>[] = [];
    if (resendKey && to) {
      jobs.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from,
            to: to.split(",").map((s) => s.trim()),
            reply_to: values.email,
            subject: `New project inquiry: ${values.name}${values.company ? `, ${values.company}` : ""}`,
            html: `<h2>New project inquiry</h2><table>${lines
              .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
              .join("")}</table><p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>`,
          }),
        }),
      );
    }
    if (webhook) {
      jobs.push(
        fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, source: "venlynk.digital", receivedAt: new Date().toISOString() }),
        }),
      );
    }
    const results = await Promise.all(jobs);
    if (results.some((r) => !r.ok)) throw new Error(`Delivery failed: ${results.map((r) => r.status).join(",")}`);
    return { status: "sent" };
  } catch (err) {
    console.error("[contact] inquiry delivery failed", err);
    return {
      status: "error",
      message: "Your message didn't send. Try again, or email us directly.",
      values,
    };
  }
}
