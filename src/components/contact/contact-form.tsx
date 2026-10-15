"use client";

import { useActionState, useEffect } from "react";

import { sendInquiry, type InquiryState } from "@/app/(site)/contact/actions";
import { SITE } from "@/content/site";
import { track } from "@/lib/analytics";

const INTERESTS = ["Website", "Web app", "Mobile app", "Product and UX design", "Online store", "Etsy store", "Odoo", "AI and automation", "SEO and AEO", "Ongoing support"];
const BUDGETS = ["Under $5k", "$5k to $15k", "$15k to $40k", "$40k+", "Not sure yet"];

export function ContactForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { status: "idle" });
  const v = state.values ?? {};
  const err = state.fieldErrors ?? {};

  // Count a lead once the message is actually delivered (never the visitor's details).
  useEffect(() => {
    if (state.status === "sent") track("generate_lead", { form: "contact", budget: state.values?.budget || undefined });
  }, [state]);

  if (state.status === "sent") {
    return (
      <div className="form-done" role="status">
        <p className="pa-done__t">
          Thanks, <span className="ha-accent">message received.</span>
        </p>
        <p className="pa-done__s">We&apos;ll reply within one working day with next steps.</p>
      </div>
    );
  }

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Project inquiry: ${v.name ?? ""}`,
  )}&body=${encodeURIComponent(v.message ?? "")}`;

  return (
    <form action={action} className="form" noValidate>
      {state.status === "unconfigured" ? (
        <div className="form-alert" role="alert">
          The form isn&apos;t connected to an inbox yet.{" "}
          <a className="link" href={mailto}>
            Send this by email instead
          </a>
          .
        </div>
      ) : null}
      {state.status === "error" && state.message ? (
        <div className="form-alert" role="alert">
          {state.message}{" "}
          {!state.fieldErrors ? (
            <a className="link" href={mailto}>
              Email {SITE.email}
            </a>
          ) : null}
        </div>
      ) : null}

      <fieldset className="form__chips">
        <legend>What can we help with?</legend>
        <div className="tags">
          {INTERESTS.map((i) => (
            <label key={i} className="chip">
              <input type="checkbox" name="services" value={i} defaultChecked={v.services?.includes(i)} />
              <span>{i}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form__row">
        <label className={`field${err.name ? " has-error" : ""}`}>
          <span>Your name</span>
          <input name="name" autoComplete="name" required defaultValue={v.name} aria-invalid={Boolean(err.name)} aria-describedby={err.name ? "err-name" : undefined} />
          {err.name ? <em id="err-name">{err.name}</em> : null}
        </label>
        <label className={`field${err.email ? " has-error" : ""}`}>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required defaultValue={v.email} aria-invalid={Boolean(err.email)} aria-describedby={err.email ? "err-email" : undefined} />
          {err.email ? <em id="err-email">{err.email}</em> : null}
        </label>
      </div>
      <label className="field">
        <span>Company (optional)</span>
        <input name="company" autoComplete="organization" defaultValue={v.company} />
      </label>

      <fieldset className="form__chips">
        <legend>Budget</legend>
        <div className="tags">
          {BUDGETS.map((b) => (
            <label key={b} className="chip">
              <input type="radio" name="budget" value={b} defaultChecked={v.budget === b} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={`field${err.message ? " has-error" : ""}`}>
        <span>About the project</span>
        <textarea
          name="message"
          rows={5}
          required
          defaultValue={v.message}
          placeholder="What are you building or improving, and by when?"
          aria-invalid={Boolean(err.message)}
          aria-describedby={err.message ? "err-message" : undefined}
        />
        {err.message ? <em id="err-message">{err.message}</em> : null}
      </label>

      <label className="hp" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button type="submit" className="ha-btn form__submit" disabled={pending} data-magnetic="">
        <span>{pending ? "Sending…" : "Send inquiry"}</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
