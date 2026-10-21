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
const FALLBACK = new Date(Date.UTC(2026, 0, 15, 8, 0));

function useNow() {
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
  return now;
}

/** Hours Pakistan is ahead of the client (negative when behind), and the shared working hours. */
function compare(tz: string, at: Date) {
  const diff = (offsetMinutes(PKT, at) - offsetMinutes(tz, at)) / 60;
  // Pakistan's 09:00-18:00 in the client's hours.
  const ours = segments(OPEN - diff, CLOSE - diff);
  const shared = ours.reduce((sum, [a, b]) => sum + Math.max(0, Math.min(b, CLOSE) - Math.max(a, OPEN)), 0);
  return { diff, ours, shared };
}

function segments(s: number, e: number): [number, number][] {
  const norm = (x: number) => ((x % 24) + 24) % 24;
  const a = norm(s);
  const b = a + (e - s);
  return b <= 24 ? [[a, b]] : [[a, 24], [0, b - 24]];
}

const hours = (n: number) => `${n} hour${n === 1 ? "" : "s"}`;

/** Gap in words: "1 hour apart" or "same time zone". */
export function gapLabel(diff: number) {
  return diff === 0 ? "Same time zone" : `${hours(Math.abs(diff))} apart`;
}

/** Three live readouts for the hero map card: their time, Pakistan time, shared hours. */
export function HeroClocks({ tz, label }: { tz: string; label: string }) {
  const now = useNow();
  const { diff, shared } = compare(tz, now ?? FALLBACK);
  const home = tz === PKT;
  return (
    <div className="vt-clocks">
      {home ? null : (
        <div>
          <span>{label}</span>
          <b suppressHydrationWarning>{now ? fmt(tz, now) : "--:--"}</b>
        </div>
      )}
      <div>
        <span>Pakistan</span>
        <b suppressHydrationWarning>{now ? fmt(PKT, now) : "--:--"}</b>
      </div>
      <div>
        <span>{home ? "Working hours" : shared > 0 || diff === 0 ? "Shared hours" : "Your morning"}</span>
        <b className="vt-clocks__hl">{home ? "9:00 to 18:00" : diff === 0 ? "All day" : shared > 0 ? `${shared} a day` : "Work ready"}</b>
      </div>
    </div>
  );
}

/** Both working days on one 24-hour axis in the client's time, shared hours highlighted. */
export function TimeOverlap({ tz, label, place }: { tz: string; label: string; place?: string }) {
  const now = useNow();
  const { diff, ours, shared } = compare(tz, now ?? FALLBACK);
  const pct = (h: number) => `${(h / 24) * 100}%`;
  const range = ([a, b]: [number, number]) => {
    const f = (h: number) => `${String(Math.floor(h % 24)).padStart(2, "0")}:${h % 1 ? "30" : "00"}`;
    return `${f(a)} to ${f(b)}`;
  };

  const title =
    diff === 0
      ? "The same working day, every day"
      : shared > 0
        ? `${hours(shared)} of shared working time, every weekday`
        : "Work moves forward while you sleep";
  const sentence =
    diff === 0
      ? "We work in your time zone, so calls and quick questions fit your normal day."
      : `Pakistan is ${hours(Math.abs(diff))} ${diff > 0 ? "ahead of" : "behind"} ${place ?? label} today. ${
          shared > 0
            ? "Calls and reviews fit inside the hours we share."
            : "We agree a short daily overlap for calls and hand over at the end of each day."
        }`;

  return (
    <div className="vt-tov">
      <h3>{title}</h3>
      <p className="vt-tov__lead">{sentence}</p>
      {diff === 0 ? null : (
        <div className="vt-tov__bars" aria-hidden="true">
          <div className="vt-tov__row">
            <span>{label}</span>
            <div className="vt-tov__track">
              <i className="vt-tov__work" style={{ left: pct(OPEN), width: pct(CLOSE - OPEN) }}>
                09:00 to 18:00
              </i>
            </div>
          </div>
          <div className="vt-tov__row">
            <span>Pakistan</span>
            <div className="vt-tov__track">
              {ours.map((s) => (
                <i key={s[0]} className="vt-tov__work vt-tov__work--us" style={{ left: pct(s[0]), width: pct(s[1] - s[0]) }}>
                  {ours.length === 1 ? range(s) : null}
                </i>
              ))}
            </div>
          </div>
          <div className="vt-tov__axis">
            <span />
            <div>
              {["00:00", "06:00", "12:00", "18:00", "24:00"].map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      {diff === 0 ? null : <p className="vt-tov__note">9:00 to 18:00 in each country, shown in {label} time.</p>}
    </div>
  );
}
