import { buildRouteMap, type LatLng } from "@/lib/route-map";

/** Borderless land map with a route from Pakistan to the client's country or city. */
export function RouteMapVisual({ to, label, id }: { to: LatLng | null; label: string; id: string }) {
  const m = buildRouteMap(to);
  const k = m.k;
  // Labels sit on the outer side of each pin so they never cross the route.
  const toLeft = m.to ? m.to[0] < m.from[0] : false;
  const fromSide = m.to ? (toLeft ? "start" : "end") : m.from[0] > m.right ? "end" : "start";
  const toSide = toLeft || (m.to && m.to[0] > m.right) ? "end" : "start";
  const dx = (side: string) => (side === "end" ? -16 * k : 16 * k);
  const dot = 6 * k;

  return (
    <svg
      className="rmap"
      viewBox={m.viewBox}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={m.to ? `Route from Pakistan to ${label}, about ${m.km.toLocaleString("en-GB")} km` : "Pakistan"}
    >
      <defs>
        <pattern id={`${id}-dots`} width={dot} height={dot} patternUnits="userSpaceOnUse">
          <circle cx={dot / 2} cy={dot / 2} r={dot * 0.18} fill="#a5a6ff" fillOpacity="0.55" />
        </pattern>
        <linearGradient id={`${id}-route`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#a5a6ff" />
          <stop offset="1" stopColor="#4546f8" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor="#4546f8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4546f8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={m.graticule} fill="none" stroke="#a5a6ff" strokeOpacity="0.07" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
      <path d={m.land} fill="#a5a6ff" fillOpacity="0.035" stroke="#a5a6ff" strokeOpacity="0.28" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      <path d={m.land} fill={`url(#${id}-dots)`} />
      {m.route ? (
        <>
          <path d={m.route} fill="none" stroke="#4546f8" strokeOpacity="0.25" strokeWidth="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path
            className="rmap__route"
            d={m.route}
            fill="none"
            stroke={`url(#${id}-route)`}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="6 7"
            vectorEffect="non-scaling-stroke"
          />
        </>
      ) : null}
      <g>
        <circle cx={m.from[0]} cy={m.from[1]} r={34 * k} fill={`url(#${id}-glow)`} />
        <circle className="rmap__pulse" cx={m.from[0]} cy={m.from[1]} r={6 * k} fill="none" stroke="#a5a6ff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <circle cx={m.from[0]} cy={m.from[1]} r={5 * k} fill="#f6f6f3" />
        <text x={m.from[0] + dx(fromSide)} y={m.from[1] + 5 * k} textAnchor={fromSide} className="rmap__label" style={{ fontSize: 16 * k, strokeWidth: 4 * k }}>
          Pakistan
        </text>
      </g>
      {m.to ? (
        <g>
          <circle cx={m.to[0]} cy={m.to[1]} r={40 * k} fill={`url(#${id}-glow)`} />
          <circle className="rmap__pulse rmap__pulse--late" cx={m.to[0]} cy={m.to[1]} r={7 * k} fill="none" stroke="#a5a6ff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <circle cx={m.to[0]} cy={m.to[1]} r={6 * k} fill="#4546f8" stroke="#f6f6f3" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <text x={m.to[0] + dx(toSide)} y={m.to[1] + 5 * k} textAnchor={toSide} className="rmap__label rmap__label--to" style={{ fontSize: 16 * k, strokeWidth: 4 * k }}>
            {label}
          </text>
        </g>
      ) : null}
    </svg>
  );
}
