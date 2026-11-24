import { loadBest } from '../lib/scores.js';
import { loadDates } from '../lib/dates.js';
import { loadPassed, loadName, summary, greeting } from '../lib/progress.js';

// Line icons for the six divisions, drawn for this app.
const DIV_ICONS = {
  pcm: <><rect x="3.5" y="7.5" width="17" height="12" rx="2" /><path d="M9 7.5V5.5h6v2M3.5 12.5h17" /></>,
  pjm: <><rect x="5" y="4.5" width="14" height="16" rx="2" /><path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 13.5h7M8.5 17h4" /></>,
  pa: <><circle cx="12" cy="12" r="8.5" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z" /></>,
  ppd: <path d="M3.5 20.5h17M5.5 20.5V10l6.5-5 6.5 5v10.5M9.5 20.5v-6h5v6" />,
  pdd: <><path d="M4 20 4 4 20 20Z" /><path d="M7.5 16.5V12l4.5 4.5zM4 8h2M4 12h2" /></>,
  ce: <path d="M3.5 16.5h17M5 16.5a7 7 0 0 1 14 0M10 9.8V6.5h4v3.3M4 19.5h16" />,
};
export const DivisionIcon = ({ id, size = 34 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className="icon div-icon">{DIV_ICONS[id]}</svg>
);

const TOOLS = [
  ['#practice', 'Practice Questions', 'Exam-style questions with explanations',
    <><rect x="5" y="4.5" width="14" height="16" rx="2" /><path d="M9 4.5V3h6v1.5M8 10l1.2 1.2L11.5 9M13 10.5h3M8 15l1.2 1.2L11.5 14M13 15.5h3" /></>],
  ['#cards', 'Flashcards', 'Key terms, codes and concepts',
    <><rect x="3.5" y="7" width="14" height="11" rx="1.5" /><path d="M6.5 7V5h14v11h-3M7 11h7M7 14h5" /></>],
  ['#plan', 'Study Plans', 'A schedule that fits your dates',
    <><rect x="4" y="5.5" width="16" height="14.5" rx="2" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M8 13.5h2M14 13.5h2M8 16.5h2M14 16.5h2" /></>],
  ['#florida', 'Resources', 'Florida licensing steps, codes and references',
    <path d="M3 6.5c3-1.4 6-1.4 9 .5 3-1.9 6-1.9 9-.5V19c-3-1.4-6-1.4-9 .5-3-1.9-6-1.9-9-.5zM12 7v12.5" />],
];

function Ring({ percent }) {
  const r = 52, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 128 128" className="ring" role="img" aria-label={`${percent}% overall progress`}>
      <circle cx="64" cy="64" r={r} className="ring-bg" />
      <circle cx="64" cy="64" r={r} className="ring-fg" strokeDasharray={`${(percent / 100) * c} ${c}`} transform="rotate(-90 64 64)" />
      <text x="64" y="62" textAnchor="middle" className="ring-num">{percent}%</text>
      <text x="64" y="80" textAnchor="middle" className="ring-label">Overall</text>
      <text x="64" y="94" textAnchor="middle" className="ring-label">Progress</text>
    </svg>
  );
}

export default function Home() {
  const best = loadBest();
  const passed = loadPassed();
  const name = loadName();
  const { goal } = loadDates();
  const today = new Date().toISOString().slice(0, 10);
  const s = summary(best, passed, goal, today);
  const started = s.passed + s.inProgress;
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-title"><span className="mark" aria-hidden="true">△</span><span>Architecture<br />License Study</span></p>
          <p className="kicker">Exam prep · Practice · Review · Pass</p>
        </div>
        <svg className="swoosh" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34 Q200 -8 400 22" /></svg>
        <div className="hello">
          <h1>{greeting(new Date().getHours())}{name ? `, ${name}` : ''}</h1>
          <p>Continue your architecture license study</p>
        </div>
      </section>

      <a className="card plan-card" href="#plan">
        <Ring percent={s.overall} />
        <div className="plan-body">
          <h2>ARE® Study Plan <span className="chev" aria-hidden="true">›</span></h2>
          <p>{started} of {s.total} divisions {s.passed ? 'started or passed' : 'in progress'}</p>
          <div className="bar"><span style={{ width: `${(started / s.total) * 100}%` }} /></div>
        </div>
        <div className="mini-stats">
          <span><svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14.5" rx="2" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" /></svg><b>{s.daysToGoal}</b> Days to goal</span>
          <span><svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg><b>{s.left}</b> Divisions left</span>
          <span><svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d="M5 20V12M10 20V8M15 20V11M20 20V5M3 20h18" /></svg><b>{s.average === null ? '–' : `${s.average}%`}</b> Practice avg.</span>
          </div>
      </a>

      <div className="section-head"><h2>Exam Divisions</h2><a href="#divisions">View all →</a></div>
      <div className="div-grid">
        {s.each.map(d => (
          <a key={d.id} className="card div-card" href={`#practice/${d.id}`}>
            <span className="div-top"><DivisionIcon id={d.id} /><span><b>{d.code}</b><small>{d.name}</small></span></span>
            <span className="div-bar"><span className="bar"><span style={{ width: `${d.percent}%` }} /></span><span>{d.passed ? 'Passed' : `${d.percent}%`}</span></span>
          </a>
        ))}
      </div>

      <div className="section-head"><h2>Study Tools</h2></div>
      <div className="tool-grid">
        {TOOLS.map(([href, title, text, icon]) => (
          <a key={href} className="card tool" href={href}>
            <svg viewBox="0 0 24 24" className="icon tool-icon" aria-hidden="true">{icon}</svg>
            <span><b>{title}</b><small>{text}</small></span>
            <span className="chev" aria-hidden="true">›</span>
          </a>
        ))}
      </div>

      <a className="hub" href="#campus">
        <img src="img/hub.svg" alt="" />
        <span><b>Campus &amp; Career Hub</b><small>Gainesville study spaces, licensing advisors, student groups and career help.</small></span>
        <span className="chev" aria-hidden="true">›</span>
      </a>
    </div>
  );
}

