"use client";

import { useState } from "react";

import { SITE } from "@/content/site";
import { track } from "@/lib/analytics";

export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      track("contact_click", { method: "email_copy" });
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <button type="button" className={`copy-email ${className}`} onClick={copy}>
      <span>{SITE.email}</span>
      <span className="copy-email__state" aria-live="polite">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
