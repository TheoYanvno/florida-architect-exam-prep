import { useEffect, useMemo, useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { questionsFor, isCorrect, score, shuffled, mixedSet, dealChoices } from '../lib/questions.js';
import { loadMissed, saveMissed, updateMissed, missedSet } from '../lib/missed.js';
import { loadBest, recordBest, saveBest } from '../lib/scores.js';

// Practice: pick a division, answer its questions one at a time (with an optional timer at the ARE's
// pace), check each answer with its explanation, then see the score by NCARB section.
// A mixed test runs at the average pace of all six divisions.
const MIXED = {
  id: 'mixed', code: 'Mixed', name: 'All divisions',
  items: DIVISIONS.reduce((n, d) => n + d.items, 0),
  testMinutes: DIVISIONS.reduce((n, d) => n + d.testMinutes, 0),
};
const MISSED = { ...MIXED, id: 'missed', code: 'Missed', name: 'Questions you missed' };

export default function Practice({ initialDivision }) {
  const available = DIVISIONS.filter(d => questionsFor(d.id).length > 0);
  const [division, setDivision] = useState(initialDivision && available.some(d => d.id === initialDivision) ? initialDivision : available[0]?.id || '');
  const [timed, setTimed] = useState(false);
  const [session, setSession] = useState(null);
  const [best, setBest] = useState(loadBest);
  const [missed, setMissed] = useState(loadMissed);

  function finish(division, result, questions, answers) {
    const ids = updateMissed(missed, questions, answers);
    setMissed(ids); saveMissed(ids);
    if (division.id === 'missed') return false;          // reviewing misses doesn't set a best score
    const next = recordBest(best, division.id, result);
    if (next.isNew) { setBest(next.best); saveBest(next.best); }
    return next.isNew;
  }

  if (session) return <Session {...session} onFinish={finish} onDone={() => setSession(null)} />;

  const d = division === 'mixed' ? MIXED : division === 'missed' ? (missed.length ? MISSED : null) : DIVISIONS.find(x => x.id === division);
  return (
    <section>
      <h2>Practice questions</h2>
      <p className="muted">Original questions written for this app, tied to NCARB's sections. Select-all items count only when every right choice (and nothing else) is picked, like the real exam.</p>
      <div className="row">
        <label>Division
          <select value={division} onChange={e => setDivision(e.target.value)}>
            <option value="missed" disabled={!missed.length}>Missed · {missed.length ? `${missed.length} question${missed.length === 1 ? '' : 's'} to try again` : 'none yet'}</option>
            <option value="mixed">Mixed · 20 questions from every division{best.mixed ? ` · best ${best.mixed.percent}%` : ''}</option>
            {DIVISIONS.map(x => <option key={x.id} value={x.id} disabled={!questionsFor(x.id).length}>{x.code} · {x.name} ({questionsFor(x.id).length}){best[x.id] ? ` · best ${best[x.id].percent}%` : ''}</option>)}
          </select>
        </label>
        <label className="check"><input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} /> Timed at the exam's pace</label>
      </div>
      {d && timed && <p className="muted">{d.id === 'mixed' || d.id === 'missed' ? 'At the average pace of all six divisions' : `At ${d.items} items in ${d.testMinutes} minutes`}, that's about {Math.round((d.testMinutes * 60) / d.items)} seconds a question.</p>}
      <button className="primary" disabled={!d} onClick={() => setSession({ division: d, questions: dealChoices(d.id === 'mixed' ? mixedSet(20) : d.id === 'missed' ? missedSet(missed) : shuffled(questionsFor(d.id))), timed })}>Start</button>
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
  useEffect(() => { if (result && isNewBest === null) setIsNewBest(onFinish(division, result, questions, answers)); }, [result]);
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
        <Review questions={questions} answers={answers} />
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

// After a session: every question you missed, what you picked, the right answer and why. These are saved
// to the Missed list so you can practice them again.
function Review({ questions, answers }) {
  const wrong = questions.filter(q => !isCorrect(q, answers[q.id] || []));
  if (!wrong.length) return <p className="ok">You got every question right.</p>;
  const letters = idx => idx.map(n => String.fromCharCode(65 + n)).join(', ');
  return (
    <div className="review">
      <h3>Review what you missed ({wrong.length})</h3>
      <p className="muted">These are saved to the Missed list in the division menu, so you can practice them again.</p>
      <ol>
        {wrong.map(q => {
          const picked = answers[q.id] || [];
          return (
            <li key={q.id}>
              <p><strong>{q.prompt}</strong> <span className="muted">({q.section})</span></p>
              <p>Right answer: {letters(q.answer)}. {q.answer.map(n => q.choices[n]).join('; ')}</p>
              <p className="muted">{picked.length ? `You picked ${letters([...picked].sort())}.` : 'Not answered.'} {q.explain}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
