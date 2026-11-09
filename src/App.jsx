import { useState } from 'react';
import { DIVISIONS, AXP_TOTAL_HOURS, SOURCES, formatMinutes, expectedItems } from './lib/are.js';
import { FLORIDA_STEPS, UF } from './lib/florida.js';
import { buildPlan, SUGGESTED_ORDER } from './lib/plan.js';

export default function App() {
  const [tab, setTab] = useState('divisions');
  return (
    <>
      <header>
        <h1>📐 Florida Architect Exam Prep</h1>
        <nav aria-label="Sections">
          <button aria-pressed={tab === 'divisions'} onClick={() => setTab('divisions')}>ARE divisions</button>
          <button aria-pressed={tab === 'plan'} onClick={() => setTab('plan')}>Study plan</button>
          <button aria-pressed={tab === 'florida'} onClick={() => setTab('florida')}>Florida license</button>
        </nav>
      </header>
      <main>{tab === 'divisions' ? <Divisions /> : tab === 'plan' ? <Plan /> : <Florida />}</main>
    </>
  );
}

function Divisions() {
  return (
    <section>
      <h2>The six ARE 5.0 divisions</h2>
      <p className="muted">From NCARB's division pages. Weights are NCARB's typical ranges, as a share of exam items.</p>
      <div className="grid">
        {DIVISIONS.map(d => (
          <article key={d.id} className="panel">
            <h3>{d.code} · {d.name}</h3>
            <p className="muted">{d.items} items · {formatMinutes(d.testMinutes)} test · {formatMinutes(d.appointmentMinutes)} appointment · {d.axpHours.toLocaleString()} AXP hours</p>
            <ul>
              {d.sections.map(s => (
                <li key={s.name}>{s.name}: {s.min}–{s.max}% <span className="muted">(about {expectedItems(d, s)} items)</span></li>
              ))}
            </ul>
            <a href={SOURCES[d.source]} target="_blank" rel="noreferrer">NCARB source</a>
          </article>
        ))}
      </div>
      <p className="muted">AXP total: {AXP_TOTAL_HOURS.toLocaleString()} hours (<a href={SOURCES.ncarbAXP} target="_blank" rel="noreferrer">NCARB</a>).</p>
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

function Plan() {
  const today = new Date().toISOString().slice(0, 10);
  const [start, setStart] = useState(today);
  const [goal, setGoal] = useState(new Date(Date.now() + 30 * 7 * 86400000).toISOString().slice(0, 10));
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
          <thead><tr><th>Division</th><th>Weeks</th><th>Study from</th><th>Review week</th><th>Take the exam by</th></tr></thead>
          <tbody>{plan.map(b => (
            <tr key={b.id}><td>{b.code} · {b.name}</td><td>{b.weeks}</td><td>{b.studyFrom}</td><td>{b.reviewFrom}</td><td>{b.examBy}</td></tr>
          ))}</tbody>
        </table>
      )}
    </section>
  );
}
