import { useEffect, useMemo, useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { questionsFor, isCorrect, score, shuffled, mixedSet } from '../lib/questions.js';
import { loadBest, recordBest, saveBest } from '../lib/scores.js';

// Practice: pick a division, answer its questions one at a time (with an optional timer at the ARE's
// pace), check each answer with its explanation, then see the score by NCARB section.
// A mixed test runs at the average pace of all six divisions.
const MIXED = {
  id: 'mixed', code: 'Mixed', name: 'All divisions',
  items: DIVISIONS.reduce((n, d) => n + d.items, 0),
  testMinutes: DIVISIONS.reduce((n, d) => n + d.testMinutes, 0),
};

export default function Practice() {
  const available = DIVISIONS.filter(d => questionsFor(d.id).length > 0);
  const [division, setDivision] = useState(available[0]?.id || '');
  const [timed, setTimed] = useState(false);
  const [session, setSession] = useState(null);
  const [best, setBest] = useState(loadBest);

  function finish(division, result) {
    const next = recordBest(best, division.id, result);
    if (next.isNew) { setBest(next.best); saveBest(next.best); }
    return next.isNew;
  }

  if (session) return <Session {...session} onFinish={finish} onDone={() => setSession(null)} />;

  const d = division === 'mixed' ? MIXED : DIVISIONS.find(x => x.id === division);
  return (
    <section>
      <h2>Practice questions</h2>
      <p className="muted">Original questions written for this app, tied to NCARB's sections. Select-all items count only when every right choice (and nothing else) is picked, like the real exam.</p>
      <div className="row">
        <label>Division
          <select value={division} onChange={e => setDivision(e.target.value)}>
            <option value="mixed">Mixed · 20 questions from every division{best.mixed ? ` · best ${best.mixed.percent}%` : ''}</option>
            {DIVISIONS.map(x => <option key={x.id} value={x.id} disabled={!questionsFor(x.id).length}>{x.code} · {x.name} ({questionsFor(x.id).length}){best[x.id] ? ` · best ${best[x.id].percent}%` : ''}</option>)}
          </select>
        </label>
        <label className="check"><input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} /> Timed at the exam's pace</label>
      </div>
      {d && timed && <p className="muted">{d.id === 'mixed' ? 'At the average pace of all six divisions' : `At ${d.items} items in ${d.testMinutes} minutes`}, that's about {Math.round((d.testMinutes * 60) / d.items)} seconds a question.</p>}
      <button className="primary" disabled={!d} onClick={() => setSession({ division: d, questions: d.id === 'mixed' ? mixedSet(20) : shuffled(questionsFor(d.id)), timed })}>Start</button>
    </section>
  );
}

function Session({ division, questions, timed, onDone, onFinish }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const secondsEach = Math.round((division.testMinutes * 60) / division.items);
  const [left, setLeft] = useState(timed ? secondsEach * questions.length : null);
  const finished = i >= questions.length || left === 0;

  useEffect(() => {
    if (!timed || finished) return;
    const t = setInterval(() => setLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [timed, finished]);

  const result = useMemo(() => (finished ? score(questions, answers) : null), [finished, questions, answers]);
  const [isNewBest, setIsNewBest] = useState(null);
  useEffect(() => { if (result && isNewBest === null) setIsNewBest(onFinish(division, result)); }, [result]);
  if (result) {
    return (
      <section aria-live="polite">
        <h2>{division.code} practice: {result.correct} of {result.total} ({result.percent}%)</h2>
        {isNewBest && <p className="ok">New best score for {division.code}! 🎉</p>}
        {left === 0 && <p className="muted">Time ran out; unanswered questions count as wrong.</p>}
        <table>
          <thead><tr><th>Section</th><th>Correct</th></tr></thead>
          <tbody>{Object.entries(result.bySection).sort(([a], [b]) => a.localeCompare(b)).map(([name, s]) => <tr key={name}><td>{name}</td><td>{s.correct} / {s.total}</td></tr>)}</tbody>
        </table>
        <button className="primary" onClick={onDone}>Done</button>
      </section>
    );
  }

  const q = questions[i];
  const picked = answers[q.id] || [];
  const toggle = idx => {
    if (checked) return;
    setAnswers(a => ({ ...a, [q.id]: q.type === 'single' ? [idx] : picked.includes(idx) ? picked.filter(x => x !== idx) : [...picked, idx] }));
  };
  const ok = isCorrect(q, picked);
  return (
    <section className="question">
      <div className="row spread">
        <span className="muted">Question {i + 1} of {questions.length} · {q.section}</span>
        {left !== null && <span className={left < 30 ? 'error' : 'muted'} aria-live="off">⏱ {Math.floor(left / 60)}:{String(left % 60).padStart(2, '0')}</span>}
      </div>
      <h3>{q.prompt}</h3>
      {q.type === 'multi' && <p className="muted">Select all that apply.</p>}
      <div role={q.type === 'single' ? 'radiogroup' : 'group'} className="choices">
        {q.choices.map((c, idx) => {
          const state = checked ? (q.answer.includes(idx) ? 'right' : picked.includes(idx) ? 'wrong' : '') : '';
          return (
            <button key={idx} role={q.type === 'single' ? 'radio' : 'checkbox'} aria-checked={picked.includes(idx)}
              className={`choice ${picked.includes(idx) ? 'picked' : ''} ${state}`} onClick={() => toggle(idx)}>
              {String.fromCharCode(65 + idx)}. {c}
            </button>
          );
        })}
      </div>
      {checked ? (
        <div className={`feedback ${ok ? 'ok' : 'bad'}`} aria-live="polite">
          <strong>{ok ? 'Correct.' : 'Not quite.'}</strong> {q.explain}
          <div><button className="primary" onClick={() => { setChecked(false); setI(n => n + 1); }}>{i + 1 < questions.length ? 'Next question' : 'See results'}</button></div>
        </div>
      ) : (
        <button className="primary" disabled={!picked.length} onClick={() => setChecked(true)}>Check answer</button>
      )}
    </section>
  );
}
