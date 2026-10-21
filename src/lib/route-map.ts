import "server-only";

import { geoDistance, geoGraticule10, geoNaturalEarth1, geoPath } from "d3-geo";
import type { Feature, MultiPolygon, Polygon } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import land110 from "world-atlas/land-110m.json";

/**
 * Borderless world map for location pages: land only, no country borders,
 * with a route from Karachi to the client's city. The world is projected once
 * and each page zooms in with the SVG viewBox, which keeps the land shapes exact.
 */

export type LatLng = { lat: number; lng: number };
export const KARACHI: LatLng = { lat: 24.86, lng: 67.01 };

const topo = land110 as unknown as Topology<{ land: GeometryCollection }>;
const LAND = feature(topo, topo.objects.land) as unknown as Feature<Polygon | MultiPolygon>;

const W = 2000;
const H = 1040;
const projection = geoNaturalEarth1().fitSize([W, H], { type: "Sphere" });
const path = geoPath(projection);
const LAND_D = path(LAND) ?? "";
const GRAT_D = path(geoGraticule10()) ?? "";

export type RouteMap = {
  viewBox: string;
  /** Units per screen pixel at the 640px design width, for sizing marks. */
  k: number;
  land: string;
  graticule: string;
  route: string | null;
  from: [number, number];
  to: [number, number] | null;
  km: number;
  right: number;
};

export function buildRouteMap(to: LatLng | null, aspect = 640 / 420): RouteMap {
  const a: [number, number] = [KARACHI.lng, KARACHI.lat];
  const b: [number, number] | null = to ? [to.lng, to.lat] : null;
  const same = !b || geoDistance(a, b) < 0.02;
  const km = b ? Math.round(geoDistance(a, b) * 6371) : 0;
  const pa = projection(a) as [number, number];
  const pb = same ? null : (projection(b!) as [number, number]);

  let x0: number, x1: number, y0: number, y1: number;
  if (km > 7000) {
    [x0, x1, y0, y1] = [0, W, H * 0.06, H * 0.82];
  } else {
    const xs = pb ? [pa[0], pb[0]] : [pa[0]];
    const ys = pb ? [pa[1], pb[1]] : [pa[1]];
    const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys), 260);
    const padX = span * 0.75;
    x0 = Math.min(...xs) - padX;
    x1 = Math.max(...xs) + padX;
    y0 = Math.min(...ys) - padX * 0.7;
    y1 = Math.max(...ys) + padX * 0.7;
  }
  // Match the card's aspect ratio around the centre.
  let w = x1 - x0;
  let h = y1 - y0;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  if (w / h > aspect) h = w / aspect;
  else w = h * aspect;

  return {
    viewBox: `${(cx - w / 2).toFixed(1)} ${(cy - h / 2).toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`,
    k: w / 640,
    land: LAND_D,
    graticule: GRAT_D,
    route: same ? null : path({ type: "LineString", coordinates: [a, b!] }),
    from: pa,
    to: pb,
    km,
    right: cx + w * 0.22,
  };
}
