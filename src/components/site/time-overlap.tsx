"use client";

import { useEffect, useState } from "react";

/** Offset of a time zone from UTC in minutes, at a given moment. */
function offsetMinutes(tz: string, at: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(at);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"));
  return Math.round((asUtc - at.getTime()) / 60000);
}

const fmt = (tz: string, at: Date) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(at);

const OPEN = 9;
const CLOSE = 18;
const PKT = "Asia/Karachi";

/**
 * Two working days on one 24-hour axis in Karachi time, with the shared hours
 * highlighted. Uses the visitor's clock, so daylight saving is always right.
 */
export function TimeOverlap({ tz, city }: { tz: string; city: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const at = now ?? new Date(Date.UTC(2026, 0, 15, 8, 0));
  const diffH = (offsetMinutes(tz, at) - offsetMinutes(PKT, at)) / 60;
  // Their 09:00-18:00 expressed in Karachi hours.
  const theirStart = OPEN - diffH;
  const theirEnd = CLOSE - diffH;
  const seg = (s: number, e: number) => {
    const out: [number, number][] = [];
    const norm = (x: number) => ((x % 24) + 24) % 24;
    const a = norm(s);
    const b = a + (e - s);
    if (b <= 24) out.push([a, b]);
    else out.push([a, 24], [0, b - 24]);
    return out;
  };
  const theirs = seg(theirStart, theirEnd);
  const overlap = theirs.reduce((sum, [a, b]) => sum + Math.max(0, Math.min(b, CLOSE) - Math.max(a, OPEN)), 0);
  const same = diffH === 0;
  const ahead = diffH < 0 ? "behind" : "ahead of";
  const pct = (h: number) => `${(h / 24) * 100}%`;

  return (
    <div className="tov">
      <div className="tov__clocks">
        <div className="tov__clock">
          <span className="tov__city">Karachi</span>
          <b suppressHydrationWarning>{now ? fmt(PKT, now) : "--:--"}</b>
        </div>
        {!same ? (
          <div className="tov__clock tov__clock--to">
            <span className="tov__city">{city}</span>
            <b suppressHydrationWarning>{now ? fmt(tz, now) : "--:--"}</b>
          </div>
        ) : null}
        <p className="tov__summary">
          {same
            ? "Same time zone: our working day is yours."
            : `${city} is ${Math.abs(diffH)} hour${Math.abs(diffH) === 1 ? "" : "s"} ${ahead} Karachi today. ${
                overlap > 0
                  ? `${overlap} shared working hour${overlap === 1 ? "" : "s"} every weekday.`
                  : "We hand over at the end of each day, so work moves while you sleep."
              }`}
        </p>
      </div>
      {!same ? (
        <div className="tov__bars" aria-hidden="true">
          <div className="tov__row">
            <span>Karachi</span>
            <div className="tov__track">
              <i className="tov__work" style={{ left: pct(OPEN), width: pct(CLOSE - OPEN) }} />
            </div>
          </div>
          <div className="tov__row">
            <span>{city}</span>
            <div className="tov__track">
              {theirs.map(([a, b]) => (
                <i key={a} className="tov__work tov__work--to" style={{ left: pct(a), width: pct(b - a) }} />
              ))}
              {theirs.map(([a, b]) => {
                const s = Math.max(a, OPEN);
                const e = Math.min(b, CLOSE);
                return e > s ? <i key={`o${a}`} className="tov__shared" style={{ left: pct(s), width: pct(e - s) }} /> : null;
              })}
            </div>
          </div>
          <div className="tov__axis">
            {[0, 6, 12, 18, 24].map((h) => (
              <span key={h} style={{ left: pct(h) }}>
                {String(h % 24).padStart(2, "0")}:00
              </span>
            ))}
          </div>
          <p className="tov__note">Working hours 09:00 to 18:00 in each city, shown in Karachi time.</p>
        </div>
      ) : null}
    </div>
  );
}
