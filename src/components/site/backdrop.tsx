/**
 * The ambient background: a faint grid that fades out from the top and two
 * slow glows. Pure CSS (see .backdrop in globals.css), fixed behind the page.
 */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="backdrop">
      <div className="backdrop-glow backdrop-glow-a" />
      <div className="backdrop-glow backdrop-glow-b" />
    </div>
  );
}
