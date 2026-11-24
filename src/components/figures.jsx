// Drawings for hot-spot items and case studies, drawn for this app. Each one matches the size listed for it in
// the division's bank file (src/lib/bank/*.js), and the hot-spot targets there are in these coordinates.
// Colors come from the stylesheet (classes fig-*), so the drawings work in light and dark mode.

const North = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`} className="fig-ink">
    <path d="M0 -16 7 8 0 3 -7 8z" className="fig-solid" />
    <text y="22" textAnchor="middle" className="fig-label">N</text>
  </g>
);

const T = ({ x, y, children, size, anchor = 'middle', className = 'fig-label' }) =>
  <text x={x} y={y} textAnchor={anchor} className={className} style={size ? { fontSize: size } : undefined}>{children}</text>;

// A wavy line through the given points (for contours and creeks).
const wave = (pts) => pts.map(([x, y], i) => (i ? `L${x} ${y}` : `M${x} ${y}`)).join(' ');

const ART = {
  // --- PA ---
  'pa-contours': () => (
    <>
      <rect x="20" y="20" width="360" height="260" className="fig-site" />
      {[[360, 108], [340, 107], [320, 106], [300, 105], [250, 104], [200, 103], [155, 102], [112, 101]].map(([x, e]) => (
        <g key={e}>
          <path d={wave([[x + 6, 20], [x - 4, 90], [x + 5, 160], [x - 5, 230], [x + 3, 280]])} className="fig-contour" />
          <T x={x + 1} y={e % 2 ? 14 : 34} size="10">{e}</T>
        </g>
      ))}
      <ellipse cx="62" cy="230" rx="26" ry="17" className="fig-contour" />
      <T x="62" y="234" size="11">100</T>
      <T x="200" y="296" size="11">Contour interval 1 ft · elevations in feet</T>
      <North x={44} y={60} />
    </>
  ),
  'pa-sun': () => (
    <>
      <rect x="120" y="100" width="160" height="100" className="fig-building" />
      <T x="200" y="155">Building</T>
      <North x={340} y={60} />
      <T x="200" y="270" size="12">Gainesville, Florida</T>
    </>
  ),
  'pa-lot': () => (
    <>
      <rect x="40" y="20" width="320" height="260" className="fig-site" />
      <rect x="312" y="20" width="48" height="260" className="fig-hatch" />
      <path d="M72 20V280M328 20V280M40 60H360M40 230H360" className="fig-dash" />
      <rect x="10" y="282" width="380" height="16" className="fig-road" />
      <T x="200" y="294" size="11">Street</T>
      <T x="200" y="44" size="10">20 ft rear setback</T>
      <T x="200" y="256" size="10">25 ft front setback</T>
      <T x="56" y="150" size="10" className="fig-label fig-vert">10 ft side setback</T>
      <T x="337" y="150" size="10" className="fig-label fig-vert">15 ft utility easement</T>
      <T x="200" y="150" size="11">Lot 100 ft × 130 ft</T>
      <North x={380} y={44} />
    </>
  ),
  'pa-flood': () => (
    <>
      <rect x="20" y="20" width="360" height="260" className="fig-site" />
      <rect x="20" y="190" width="360" height="90" className="fig-flood" />
      <rect x="290" y="150" width="90" height="130" className="fig-hatch" />
      <path d={wave([[20, 262], [80, 256], [150, 268], [220, 258], [300, 266], [380, 259]])} className="fig-water" />
      {[[50, 50], [95, 45], [140, 60], [60, 100], [110, 95], [150, 120], [45, 150], [95, 150], [145, 168]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="16" className="fig-tree" />)}
      <T x="98" y="200" size="10">Protected trees</T>
      <T x="150" y="232" size="11">Flood zone AE</T>
      <T x="335" y="215" size="10">Wetland</T>
      <T x="335" y="228" size="10">buffer</T>
      <T x="270" y="90" size="11">Flood zone X</T>
      <T x="150" y="276" size="10">Creek</T>
      <North x={360} y={50} />
    </>
  ),
};

export const hasArt = (id) => id in ART;

/** A drawing at its natural size, scaled to fit. children are drawn on top (hot-spot markers). */
export function Figure({ meta, children, onPointer, onKeyDown, label, focusable }) {
  const Art = ART[meta.id];
  return (
    <svg viewBox={`0 0 ${meta.w} ${meta.h}`} className="figure" role="img" aria-label={label || meta.alt}
      onPointerDown={onPointer} onKeyDown={onKeyDown} tabIndex={focusable ? 0 : undefined}>
      {Art ? <Art /> : null}
      {children}
    </svg>
  );
}
