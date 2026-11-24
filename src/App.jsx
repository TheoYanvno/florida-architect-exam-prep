import { useEffect, useState } from 'react';
import { DIVISIONS, AXP_TOTAL_HOURS, SOURCES, formatMinutes, expectedItems } from './lib/are.js';
import { FLORIDA_STEPS, UF } from './lib/florida.js';
import { UF_RESOURCES, UF_GROUPS } from './lib/uf.js';
import { buildPlan, SUGGESTED_ORDER } from './lib/plan.js';
import Practice from './components/Practice.jsx';
import Flashcards from './components/Flashcards.jsx';
import Home, { DivisionIcon } from './components/Home.jsx';
import { Progress, Profile } from './components/Progress.jsx';
import { CourseHome, DivisionCourse, Lesson } from './components/Course.jsx';
import { DivisionQuiz, PracticeExam } from './components/Path.jsx';
import Achievements from './components/Achievements.jsx';
import { loadBest } from './lib/scores.js';
import { loadDates, saveDates } from './lib/dates.js';

// Pages are hash links (#home, #plan, #practice/pa ...) so the phone's back button and home-screen app work.
const PAGES = {
  home: { title: 'Home' },
  learn: { title: 'Course' },
  lesson: { title: 'Lesson' },
  quiz: { title: 'Division quiz' },
  exam: { title: 'Practice exam' },
  achievements: { title: 'Achievements' },
  plan: { title: 'Study plan' },
  divisions: { title: 'Exam divisions' },
  progress: { title: 'Progress' },
  profile: { title: 'Profile' },
  practice: { title: 'Practice questions' },
  cards: { title: 'Flashcards' },
  florida: { title: 'Florida license' },
  campus: { title: 'Campus & career' },
};
const NAV = [['home', 'Home', 'home'], ['learn', 'Study', 'book'], ['achievements', 'Awards', 'trophy'], ['progress', 'Progress', 'bars'], ['profile', 'Profile', 'user']];
const ICONS = {
  home: <path d="M4 11.5 12 5l8 6.5V20h-5.5v-5h-5v5H4z" />,
  book: <path d="M3 6.5c3-1.4 6-1.4 9 .5 3-1.9 6-1.9 9-.5V19c-3-1.4-6-1.4-9 .5-3-1.9-6-1.9-9-.5zM12 7v12.5" />,
  layers: <path d="m12 4 9 4.5-9 4.5-9-4.5zM3 12.5l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" />,
  trophy: <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M9.5 17h5v3h-5z" />,
  bars: <path d="M5 20V12M10 20V8M15 20V11M20 20V5M3 20h18" />,
  user: <><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  bell: <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15zM10 20.5h4" />,
};
export const Icon = ({ name, size = 26 }) => <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className="icon">{ICONS[name]}</svg>;

const readHash = () => {
  const [page = 'home', ...rest] = (globalThis.location?.hash || '').replace(/^#/, '').split('/');
  return { page: PAGES[page] ? page : 'home', arg: rest.length ? rest.join('/') : null };
};

export default function App() {
  const [{ page, arg }, setRoute] = useState(readHash);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const on = () => { setRoute(readHash()); setMenu(false); scrollTo?.(0, 0); };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  const go = (to) => { location.hash = to; };
  const practice = id => go(`practice/${id}`);
  const home = page === 'home';
  const active = ['lesson', 'quiz', 'exam'].includes(page) ? 'learn' : ['practice', 'cards', 'florida', 'campus', 'plan', 'divisions'].includes(page) ? 'home' : page;

  return (
    <div className={`app${home ? ' is-home' : ''}`}>
      <header className="topbar">
        <button className="round" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(m => !m)}><Icon name="menu" /></button>
        {!home && <h1 className="page-title">{PAGES[page].title}</h1>}
        <a className="round" href="#plan" aria-label="Your study plan"><Icon name="bell" /></a>
      </header>
      {menu && (
        <div className="drawer-back" onClick={() => setMenu(false)}>
          <nav className="drawer" aria-label="All pages" onClick={e => e.stopPropagation()}>
            <p className="drawer-brand"><img src="icon.svg" alt="" width="36" height="36" /> Architecture License Study</p>
            {Object.entries(PAGES).filter(([id]) => !['lesson', 'quiz', 'exam'].includes(id)).map(([id, p]) => <a key={id} href={`#${id}`} aria-current={id === page ? 'page' : undefined}>{p.title}</a>)}
          </nav>
        </div>
      )}
      <main>
        {page === 'home' ? <Home /> : page === 'learn' ? (arg ? <DivisionCourse id={arg} /> : <CourseHome />) : page === 'lesson' ? <Lesson key={arg} id={arg} /> : page === 'quiz' ? <DivisionQuiz key={arg} id={arg} /> : page === 'exam' ? <PracticeExam key={arg} id={arg} /> : page === 'achievements' ? <Achievements /> : page === 'plan' ? <Plan onPractice={practice} /> : page === 'divisions' ? <Divisions onPractice={practice} />
          : page === 'practice' ? <Practice key={arg || 'none'} initialDivision={arg} /> : page === 'cards' ? <Flashcards />
          : page === 'progress' ? <Progress /> : page === 'profile' ? <Profile /> : page === 'campus' ? <Campus /> : <Florida />}
        <footer>
          <p>An independent study tool for architecture students working toward a Florida license. Not affiliated with, sponsored or endorsed by NCARB, the University of Florida, the Florida DBPR or the AIA. ARE®, AXP® and NCARB® are registered trademarks of the National Council of Architectural Registration Boards; AIA® is a registered trademark of the American Institute of Architects. Practice questions and flashcards are original to this app.</p>
        </footer>
      </main>
      <nav className="bottom-nav" aria-label="Main">
        {NAV.map(([id, label, icon]) => <a key={id} href={`#${id}`} aria-current={id === active ? 'page' : undefined}><Icon name={icon} /><span>{label}</span></a>)}
      </nav>
    </div>
  );
}

function Best({ id }) {
  const best = loadBest()[id];
  return best ? <span className="best">Best practice score: {best.percent}%</span> : <span className="muted">Not practiced yet</span>;
}

function Divisions({ onPractice }) {
  return (
    <section>
      <h2>The six ARE® 5.0 divisions</h2>
      <p className="muted">From NCARB's division pages. Weights are NCARB's typical ranges, as a share of exam items.</p>
      <div className="grid">
        {DIVISIONS.map(d => (
          <article key={d.id} className="panel">
            <h3 className="div-h"><DivisionIcon id={d.id} size={30} /> {d.code} · {d.name}</h3>
            <p className="muted">{d.items} items · {formatMinutes(d.testMinutes)} test · {formatMinutes(d.appointmentMinutes)} appointment · {d.axpHours.toLocaleString()} AXP hours</p>
            <ul>
              {d.sections.map(s => (
                <li key={s.name}>{s.name}: {s.min}–{s.max}% <span className="muted">(about {expectedItems(d, s)} items)</span></li>
              ))}
            </ul>
            <div className="row">
              <Best id={d.id} />
              <button onClick={() => onPractice(d.id)}>Practice {d.code}</button>
              <a href={SOURCES[d.source]} target="_blank" rel="noreferrer">NCARB source</a>
            </div>
          </article>
        ))}
      </div>
      <p className="muted">AXP total: {AXP_TOTAL_HOURS.toLocaleString()} hours (<a href={SOURCES.ncarbAXP} target="_blank" rel="noreferrer">NCARB</a>).</p>
    </section>
  );
}

function Campus() {
  return (
    <section>
      <h2>Campus &amp; career resources</h2>
      <p className="muted">Help on and near the University of Florida campus in Gainesville for getting through the ARE® and AXP®. Each one links to its own page; this app is not affiliated with the University of Florida.</p>
      {UF_GROUPS.map(g => (
        <div key={g}>
          <h3 className="group">{g}</h3>
          <div className="grid uf-grid">
            {UF_RESOURCES.filter(r => r.group === g).map(r => (
              <article key={r.id} className="panel uf">
                <h3>{r.title}</h3>
                <p>{r.detail}</p>
                <p className="muted small">{r.where}</p>
                <a href={r.url} target="_blank" rel="noreferrer">Visit their page ↗</a>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Florida() {
  return (
    <section>
      <h2>Getting licensed in Florida</h2>
      <p className="muted">From the Florida Board of Architecture and Interior Design FAQ (<a href={SOURCES.flFaq} target="_blank" rel="noreferrer">DBPR</a>).</p>
      <ol className="steps">
        {FLORIDA_STEPS.map(s => (
          <li key={s.id}><strong>{s.title}</strong><p>{s.detail}</p></li>
        ))}
      </ol>
      <h3>University of Florida graduates</h3>
      <p className="muted">{UF.note} (<a href={UF.source} target="_blank" rel="noreferrer">UF School of Architecture</a>)</p>
    </section>
  );
}

function Plan({ onPractice }) {
  const saved = loadDates();
  const [start, setStart] = useState(saved.start);
  const [goal, setGoal] = useState(saved.goal);
  useEffect(() => { saveDates({ start, goal }); }, [start, goal]);
  const best = loadBest();
  let plan = null, error = '';
  try { plan = buildPlan(start, goal, SUGGESTED_ORDER); } catch (e) { error = e.message; }
  return (
    <section>
      <h2>Your study plan</h2>
      <p className="muted">Pick when you start and when you want to be done. Bigger divisions get more weeks, and each one ends with a review week before its exam. The order pairs divisions that share material; it's a suggestion, not an NCARB rule.</p>
      <div className="row">
        <label>Start <input type="date" value={start} onChange={e => setStart(e.target.value)} /></label>
        <label>Done by <input type="date" value={goal} onChange={e => setGoal(e.target.value)} /></label>
      </div>
      {error ? <p role="alert">{error}</p> : (
        <table>
          <thead><tr><th>Division</th><th>Weeks</th><th>Study from</th><th>Review week</th><th>Take the exam by</th><th>Practice</th></tr></thead>
          <tbody>{plan.map(b => (
            <tr key={b.id}><td>{b.code} · {b.name}</td><td>{b.weeks}</td><td>{b.studyFrom}</td><td>{b.reviewFrom}</td><td>{b.examBy}</td><td>{best[b.id] ? `${best[b.id].percent}% best` : ''} <button onClick={() => onPractice(b.id)}>Practice</button></td></tr>
          ))}</tbody>
        </table>
      )}
      <p className="muted small">Your dates are saved in this browser.</p>
    </section>
  );
}
