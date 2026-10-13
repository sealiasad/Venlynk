import { MARK_PATH, MARK_VIEWBOX } from "@/components/brand/mark-path";

type BrandMarkProps = {
  className?: string;
  variant?: "color" | "white" | "dark";
};

const FILL = { color: "#4546F9", white: "#FCFCFC", dark: "#020202" } as const;

/** Venlynk logomark. */
export function BrandMark({ className = "", variant = "color" }: BrandMarkProps) {
  return (
    <svg viewBox={MARK_VIEWBOX} aria-hidden="true" className={className}>
      <path d={MARK_PATH} fill={FILL[variant]} fillRule="evenodd" />
    </svg>
  );
}
