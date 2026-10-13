/** Kinetic backdrop: slow drifting brand light and a fine grid, fixed behind every page. */
export function Ambient() {
  return (
    <div className="k-ambient" aria-hidden="true">
      <span className="k-ambient__blob k-ambient__blob--a" />
      <span className="k-ambient__blob k-ambient__blob--b" />
      <span className="k-ambient__grid" />
      <span className="k-ambient__grain" />
    </div>
  );
}
