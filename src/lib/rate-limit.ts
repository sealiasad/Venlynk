/**
 * Small fixed-window rate limiter kept in process memory.
 * On a single Node process (Hostinger) it is exact; on serverless (Vercel) each
 * instance keeps its own window, so it slows abuse rather than guaranteeing a cap.
 */
type Bucket = { count: number; reset: number };

const buckets = new Map<string, Bucket>();
const MAX_KEYS = 10_000;

export function rateLimit(key: string, { max, windowMs }: { max: number; windowMs: number }, now = Date.now()) {
  let b = buckets.get(key);
  if (!b || b.reset <= now) {
    if (buckets.size >= MAX_KEYS) {
      for (const [k, v] of buckets) if (v.reset <= now) buckets.delete(k);
      if (buckets.size >= MAX_KEYS) buckets.clear();
    }
    b = { count: 0, reset: now + windowMs };
    buckets.set(key, b);
  }
  b.count += 1;
  return { ok: b.count <= max, remaining: Math.max(0, max - b.count), reset: b.reset };
}

/** Best-effort client identifier from proxy headers (first hop of X-Forwarded-For). */
export function clientKey(h: Headers) {
  const fwd = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = fwd || h.get("x-real-ip")?.trim() || "unknown";
  return ip.slice(0, 64);
}

/** Test helper. */
export function __resetRateLimit() {
  buckets.clear();
}
