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

  // --- PcM ---
  'pcm-cash': () => {
    const v = [['Jan', 40], ['Feb', 25], ['Mar', 10], ['Apr', -5], ['May', -15], ['Jun', 5]];
    return (
      <>
        <T x="200" y="22">Cash balance at month end ($ thousands)</T>
        <path d="M20 170H385" className="fig-line" />
        <T x="16" y="174" size="10" anchor="end">0</T>
        {v.map(([m, k], i) => {
          const x = 30 + i * 60, h = Math.abs(k) * 2.5;
          return (
            <g key={m}>
              <rect x={x} y={k >= 0 ? 170 - h : 170} width="40" height={h} className={k >= 0 ? 'fig-fill' : 'fig-hatch'} />
              <T x={x + 20} y={k >= 0 ? 164 - h : 186 + h} size="11">{k}</T>
              <T x={x + 20} y="262" size="12">{m}</T>
            </g>
          );
        })}
      </>
    );
  },
  'pcm-util': () => {
    const rows = [['Ana', '2,080', '1,664'], ['Ben', '2,080', '1,248'], ['Cara', '2,000', '1,500'], ['Dev', '1,900', '1,045'], ['Eli', '2,080', '1,872']];
    return (
      <>
        <rect x="20" y="16" width="360" height="34" className="fig-fill" />
        {['Employee', 'Total hours', 'Project hours'].map((h, k) => <T key={h} x={80 + k * 120} y="38">{h}</T>)}
        {rows.map((r, i) => (
          <g key={r[0]}>
            <rect x="20" y={50 + i * 34} width="360" height="34" className="fig-thin" />
            {r.map((c, k) => <T key={k} x={80 + k * 120} y={72 + i * 34} className="fig-label fig-plain">{c}</T>)}
          </g>
        ))}
        <T x="200" y="245" size="11">Last year</T>
      </>
    );
  },
  'pcm-ar': () => {
    const v = [['Current', 180], ['31–60 days', 90], ['61–90 days', 40], ['Over 90 days', 35]];
    return (
      <>
        <T x="200" y="20">Unpaid invoices by age ($ thousands)</T>
        <path d="M20 230H385" className="fig-line" />
        {v.map(([m, k], i) => (
          <g key={m}>
            <rect x={40 + i * 90} y={230 - k} width="60" height={k} className="fig-fill" />
            <T x={70 + i * 90} y={224 - k} size="11">{k}</T>
            <T x={70 + i * 90} y="250" size="11">{m}</T>
          </g>
        ))}
      </>
    );
  },

  // --- PjM ---
  'pjm-gantt': () => {
    const rows = [['Survey', 0, 2], ['Schematic design', 2, 6], ['Geotechnical report', 2, 5], ['Design development', 6, 12], ['Construction docs', 12, 20], ['Permit review', 20, 24]];
    const x = (w) => 140 + w * 11;
    return (
      <>
        {[0, 4, 8, 12, 16, 20, 24].map((w) => (
          <g key={w}><path d={`M${x(w)} 32V236`} className="fig-thin fig-grid" /><T x={x(w)} y="24" size="10">{w}</T></g>
        ))}
        <T x="12" y="24" size="10" anchor="start">Week</T>
        {rows.map(([name, a, b], i) => (
          <g key={name}>
            <T x="12" y={56 + i * 32} size="11" anchor="start" className="fig-label fig-plain">{name}</T>
            <rect x={x(a)} y={42 + i * 32} width={x(b) - x(a)} height="18" rx="3" className={i === 2 ? 'fig-hatch' : 'fig-fill'} />
          </g>
        ))}
        <path d={`M${x(5)} 61 Q${x(5.6)} 90 ${x(6)} 146`} className="fig-arrow" />
        <path d={`M${x(6)} 93V142`} className="fig-arrow" />
      </>
    );
  },
  'pjm-ev': () => {
    const pv = [0, 8, 18, 30, 42, 55, 68];
    const ev = [0, 8, 18, 30, 38, 48, 58];
    const pt = (v, m) => `${40 + m * 40},${260 - v * 2.2}`;
    return (
      <>
        <path d="M40 30V260H370" className="fig-line" />
        {[0, 25, 50, 75, 100].map((v) => <T key={v} x="34" y={264 - v * 2.2} size="10" anchor="end">{v}%</T>)}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => <T key={m} x={40 + m * 40} y="278" size="10">{m}</T>)}
        <T x="205" y="294" size="11">Month</T>
        <polyline points={pv.map(pt).join(' ')} className="fig-pv" />
        <polyline points={ev.map(pt).join(' ')} className="fig-ev" />
        <path d="M280 30V260" className="fig-dash" />
        <T x="282" y="44" size="10" anchor="start">Today</T>
        <path d="M60 50h24" className="fig-pv" /><T x="90" y="54" size="11" anchor="start">Planned value</T>
        <path d="M60 70h24" className="fig-ev" /><T x="90" y="74" size="11" anchor="start">Earned value</T>
      </>
    );
  },
  'pjm-rfi': () => {
    const rows = [['14', 'Door hardware', 'Mar 2', 'Mar 6'], ['15', 'Roof drain size', 'Mar 9', 'Mar 12'], ['16', 'Stair finish', 'Mar 10', '—'], ['17', 'Paint color', 'Mar 16', '—'], ['18', 'Ceiling height', 'Mar 18', 'Mar 19']];
    const cols = [40, 150, 280, 365];
    return (
      <>
        <rect x="10" y="18" width="400" height="32" className="fig-fill" />
        {['RFI', 'Subject', 'Sent', 'Answered'].map((h, k) => <T key={h} x={cols[k]} y="39">{h}</T>)}
        {rows.map((r, i) => (
          <g key={r[0]}>
            <rect x="10" y={50 + i * 32} width="400" height="32" className="fig-thin" />
            {r.map((c, k) => <T key={k} x={cols[k]} y={71 + i * 32} className="fig-label fig-plain">{c}</T>)}
          </g>
        ))}
        <T x="210" y="222" size="11">Today: March 20 · answers due in 7 days</T>
      </>
    );
  },
  'pjm-clash': () => (
    <>
      <rect x="20" y="40" width="360" height="16" className="fig-fill" />
      <rect x="170" y="56" width="60" height="64" className="fig-fill" />
      <rect x="30" y="105" width="340" height="45" rx="4" className="fig-duct" />
      <path d="M20 175H380" className="fig-line" />
      <T x="100" y="34" size="11">Concrete slab</T>
      <T x="200" y="76" size="10">Beam</T>
      <T x="320" y="132" size="11">Supply duct</T>
      <T x="320" y="192" size="11">Ceiling</T>
      <path d="M230 120h20" className="fig-dash" /><T x="254" y="96" size="10" anchor="start">Beam bottom 10'-0"</T>
      <path d="M40 105h-12" className="fig-dash" /><T x="26" y="98" size="10" anchor="start">Duct top 10'-6"</T>
      <T x="80" y="192" size="10">Ceiling 9'-0"</T>
      <T x="200" y="245" size="11">Section · heights above finished floor</T>
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
