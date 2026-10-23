"use client";

import { useEffect } from "react";

/**
 * Sets <html lang> on translated pages (the shared root layout renders lang="en"),
 * and puts it back when the visitor navigates to an English page.
 */
export function HtmlLangClient({ lang }: { lang: string }) {
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    return () => {
      el.lang = "en";
    };
  }, [lang]);
  return null;
}
