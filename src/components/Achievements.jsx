import { loadLessons } from '../lib/course/index.js';
import { loadKnown } from '../lib/flashcards.js';
import { loadBest } from '../lib/scores.js';
import { loadPassed } from '../lib/progress.js';
import { loadPath, loadDays, today, streak } from '../lib/path.js';
import { achievements, currentLevel, POINTS } from '../lib/achievements.js';
import { DivisionIcon } from './Home.jsx';

/** Everything the achievements are worked out from, read from the browser. */
export const loadState = () => ({
  lessons: loadLessons(), path: loadPath(), known: loadKnown(), best: loadBest(),
  passed: loadPassed(), days: loadDays(), today: today(),
});

const Progress = ({ have, target }) => (
  <>
    <span className="bar"><span style={{ width: `${(have / target) * 100}%` }} /></span>
    <span className="muted small">{have} / {target}</span>
  </>
);

function Badge({ b, icon }) {
  return (
    <article className={`card award${b.earned ? ' earned' : ''}`} aria-label={`${b.name}: ${b.earned ? 'earned' : `${b.have} of ${b.target}`}`}>
      <span className="award-icon" aria-hidden="true">{icon}</span>
      <h3>{b.title ? <>{b.name} <small>{b.title}</small></> : b.name}</h3>
      <p className="muted small">{b.desc}</p>
      {b.earned ? <span className="earned-tag">Earned</span> : <Progress have={b.have} target={b.target} />}
    </article>
  );
}

/** A small card for the home screen: your level, points and streak. */
export function LevelCard() {
  const state = loadState();
  const a = achievements(state);
  const level = currentLevel(state);
  const days = streak(state.days, state.today);
  return (
    <a className="card level-card" href="#achievements">
      <span className="level-icon" aria-hidden="true">{level ? level.icon : '🎯'}</span>
      <span className="level-body">
        <b>{level ? level.name : 'Just starting'}</b>
        <small>{a.points.toLocaleString()} points · {a.earned} of {a.total} badges{days ? ` · 🔥 ${days}-day streak` : ''}</small>
      </span>
      <span className="chev" aria-hidden="true">›</span>
    </a>
  );
}

/** #achievements: levels, points, a badge for each division and milestone badges. */
export default function Achievements() {
  const state = loadState();
  const a = achievements(state);
  const days = streak(state.days, state.today);
  return (
    <>
      <section className="card">
        <h2>Achievements</h2>
        <p className="muted">{a.earned} of {a.total} earned. Locked ones show how far along you are.</p>
        <div className="stat-row">
          <span><b>{a.points.toLocaleString()}</b> points</span>
          <span><b>{days}</b> day streak</span>
          <span><b>{a.earned}</b> badges</span>
        </div>
        <p className="muted small">{POINTS.lesson} points for every lesson you finish, {POINTS.quiz} for every division quiz you pass, {POINTS.exam} for every practice exam you pass and {POINTS.card} for every flashcard you know. A day counts toward your streak when you finish a lesson check, a quiz, an exam, a practice set or a flashcard.</p>
      </section>

      <h2 className="group">Level</h2>
      <div className="award-grid">{a.levels.map(l => <Badge key={l.id} b={l} icon={l.icon} />)}</div>

      <h2 className="group">Division badges</h2>
      <p className="muted">One for each ARE® division. Earn it by finishing every lesson, passing the division quiz and passing the practice exam.</p>
      <div className="award-grid">{a.divisions.map(b => <Badge key={b.id} b={b} icon={<DivisionIcon id={b.division} size={30} />} />)}</div>

      <h2 className="group">Milestones</h2>
      <div className="award-grid">{a.milestones.map(b => <Badge key={b.id} b={b} icon={b.icon} />)}</div>
    </>
  );
}
