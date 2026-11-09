import { useState } from 'react';
import { DIVISIONS, AXP_TOTAL_HOURS, SOURCES, formatMinutes, expectedItems } from './lib/are.js';
import { FLORIDA_STEPS } from './lib/florida.js';

export default function App() {
  const [tab, setTab] = useState('divisions');
  return (
    <>
      <header>
        <h1>📐 Florida Architect Exam Prep</h1>
        <nav aria-label="Sections">
          <button aria-pressed={tab === 'divisions'} onClick={() => setTab('divisions')}>ARE divisions</button>
          <button aria-pressed={tab === 'florida'} onClick={() => setTab('florida')}>Florida license</button>
        </nav>
      </header>
      <main>{tab === 'divisions' ? <Divisions /> : <Florida />}</main>
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
    </section>
  );
}
