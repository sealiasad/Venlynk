import type { Testimonial } from "@/content/types";

/**
 * Client quotes. A quote is only shown on the site when `approved: true`
 * and the client has agreed to the exact words and attribution.
 * The homepage section stays hidden until at least one is approved.
 */
export const TESTIMONIALS: Testimonial[] = [
  // {
  //   id: "frontline",
  //   quote: "…",
  //   name: "Full name",
  //   role: "Role",
  //   company: "Frontline Ticketing",
  //   projectSlug: "frontline-ticketing",
  //   approved: true,
  // },
];

export function getApprovedTestimonials() {
  return TESTIMONIALS.filter((t) => t.approved);
}
