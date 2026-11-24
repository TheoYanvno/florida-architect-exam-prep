import { useEffect, useMemo, useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { loadLessons, lessonsFor } from '../lib/course/index.js';
import { isCorrect, score, dealChoices } from '../lib/questions.js';
import { loadMissed, saveMissed, updateMissed } from '../lib/missed.js';
import { loadBest, recordBest, saveBest } from '../lib/scores.js';
import { quizSet, examSet, examSeconds, loadPath, savePath, recordQuiz, recordExam, lessonsDone, quizPassed, recordDay, QUIZ_PASS, QUIZ_SIZE, EXAM_PASS } from '../lib/path.js';
import { Review } from './Practice.jsx';
import { DivisionIcon } from './Home.jsx';

const division = id => DIVISIONS.find(d => d.id === id) || DIVISIONS[0];

// Saved after a quiz or exam: wrong answers join the Missed list, the day counts toward your streak, and an
// exam score also counts as a practice score for the division's readiness.
function saveCommon(questions, answers) {
  const missed = updateMissed(loadMissed(), questions, answers);
  saveMissed(missed);
  recordDay();
}

function Locked({ d, children }) {
  return (
    <section className="card locked-step">
      <h2 className="div-h"><DivisionIcon id={d.id} size={30} /> {d.code} · locked</h2>
      <p>{children}</p>
      <div className="row">
        <a className="button primary" href={`#learn/${d.id}`}>Back to the {d.code} path</a>
        <a className="button" href={`#practice/${d.id}`}>Free practice instead</a>
      </div>
    </section>
  );
}

const Choices = ({ q, picked, onPick, reveal }) => (
  <div role={q.type === 'single' ? 'radiogroup' : 'group'} className="choices">
    {q.choices.map((c, k) => {
      const state = reveal ? (q.answer.includes(k) ? 'right' : picked.includes(k) ? 'wrong' : '') : '';
      return (
        <button key={k} role={q.type === 'single' ? 'radio' : 'checkbox'} aria-checked={picked.includes(k)}
          className={`choice ${picked.includes(k) ? 'picked' : ''} ${state}`} onClick={() => onPick(k)}>
          {String.fromCharCode(65 + k)}. {c}
        </button>
      );
    })}
  </div>
);

const toggled = (q, picked, k) => (q.type === 'single' ? [k] : picked.includes(k) ? picked.filter(x => x !== k) : [...picked, k].sort());

/** #quiz/pa: ten questions from the division's lessons, one at a time with the answer shown after each. */
export function DivisionQuiz({ id }) {
  const d = division(id);
  const lessons = loadLessons();
  const [seed, setSeed] = useState(Date.now);
  const questions = useMemo(() => dealChoices(quizSet(d.id, seed), seed), [d.id, seed]);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);

  if (!lessonsDone(d.id, lessons)) {
    return <Locked d={d}>Finish all {lessonsFor(d.id).length} {d.code} lessons first. The quiz covers what they teach, so it unlocks when every lesson check is passed.</Locked>;
  }

  const finish = () => {
    const r = score(questions, answers);
    const before = loadPath();
    savePath(recordQuiz(before, d.id, r.percent));
    saveCommon(questions, answers);
    setResult({ ...r, firstPass: r.percent >= QUIZ_PASS && !quizPassed(d.id, before) });
  };
  const again = () => { setSeed(Date.now()); setI(0); setAnswers({}); setChecked(false); setResult(null); };

  if (result) {
    const pass = result.percent >= QUIZ_PASS;
    return (
      <section className="card" aria-live="polite">
        <p className="kicker-sm"><a href={`#learn/${d.id}`}>{d.code}</a> · Step 2 of 3 · Division quiz</p>
        <h2>{result.correct} of {result.total} right ({result.percent}%)</h2>
        <p className={pass ? 'ok' : 'error'}>{pass ? `Quiz passed! ${result.firstPass ? 'The practice exam is unlocked. 🔓' : ''}` : `You need ${QUIZ_PASS}% to pass. Review the lessons for the questions you missed, then try a new set.`}</p>
        <Review questions={questions} answers={answers} />
        <div className="row">
          <button onClick={again}>New quiz</button>
          {pass ? <a className="button primary" href={`#exam/${d.id}`}>Take the {d.code} practice exam</a>
            : <a className="button primary" href={`#learn/${d.id}`}>Back to the lessons</a>}
        </div>
      </section>
    );
  }

  const q = questions[i];
  const picked = answers[q.id] || [];
  const ok = isCorrect(q, picked);
  return (
    <section className="card question">
      <p className="kicker-sm"><a href={`#learn/${d.id}`}>{d.code}</a> · Step 2 of 3 · Division quiz · pass with {QUIZ_PASS}%</p>
      <div className="quiz-dots" aria-hidden="true">{questions.map((x, k) => <span key={x.id} className={k < i ? (isCorrect(x, answers[x.id] || []) ? 'right' : 'wrong') : k === i ? 'now' : ''} />)}</div>
      <p className="muted">Question {i + 1} of {questions.length} · {q.section}</p>
      <h3>{q.prompt}</h3>
      {q.type === 'multi' && !/select all/i.test(q.prompt) && <p className="muted">Select all that apply.</p>}
      <Choices q={q} picked={picked} reveal={checked} onPick={k => !checked && setAnswers(a => ({ ...a, [q.id]: toggled(q, picked, k) }))} />
      {checked ? (
        <div className={`feedback ${ok ? 'ok' : 'bad'}`} aria-live="polite">
          <strong>{ok ? 'Correct.' : 'Not quite.'}</strong> {q.explain}
          <div><button className="primary" onClick={() => { if (i + 1 < questions.length) { setChecked(false); setI(i + 1); } else finish(); }}>{i + 1 < questions.length ? 'Next question' : 'See my score'}</button></div>
        </div>
      ) : (
        <button className="primary" disabled={!picked.length} onClick={() => setChecked(true)}>Check answer</button>
      )}
    </section>
  );
}

/** #exam/pa: every question for the division, exam style: no answers until you submit, flags, and a timer. */
export function PracticeExam({ id }) {
  const d = division(id);
  const path = loadPath();
  const [run, setRun] = useState(null);       // { questions, timed }
  const [timed, setTimed] = useState(true);
  if (!quizPassed(d.id, path)) {
    return <Locked d={d}>Pass the {d.code} division quiz first ({QUIZ_PASS}% or better). The practice exam unlocks after it.</Locked>;
  }
  if (run) return <ExamRun d={d} {...run} onExit={() => setRun(null)} />;

  const n = examSet(d.id, 1).length;
  const seconds = examSeconds(d.id, n);
  const best = path.exam[d.id];
  return (
    <section className="card">
      <p className="kicker-sm"><a href={`#learn/${d.id}`}>{d.code}</a> · Step 3 of 3 · Practice exam</p>
      <h2 className="div-h"><DivisionIcon id={d.id} size={30} /> {d.code} practice exam</h2>
      <ul>
        <li>{n} questions from every {d.code} section, including 10 you haven’t seen in the lessons or the quiz.</li>
        <li>Like the real exam, you don’t see answers until you submit. Flag questions to come back to them.</li>
        <li>Pass with {EXAM_PASS}% or better. (The real ARE uses a scaled score; this is a practice target.)</li>
        <li>The real {d.code} has {d.items} items in {d.testMinutes} minutes. This one is shorter but keeps the same pace.</li>
      </ul>
      <label className="check"><input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} /> Timed: {Math.floor(seconds / 60)} min {seconds % 60 ? `${seconds % 60} s` : ''}</label>
      {best && <p className="muted">Your best: {best.percent}%{best.timed ? ' · passed with the timer on' : ''}</p>}
      <button className="primary" onClick={() => { const seed = Date.now(); setRun({ questions: dealChoices(examSet(d.id, seed), seed), timed }); }}>Start the exam</button>
    </section>
  );
}

function ExamRun({ d, questions, timed, onExit }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flags, setFlags] = useState([]);
  const [left, setLeft] = useState(timed ? examSeconds(d.id, questions.length) : null);
  const [confirm, setConfirm] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!timed || result) return;
    const t = setInterval(() => setLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [timed, result]);

  const submit = (timeUp = false) => {
    const r = score(questions, answers);
    const before = loadPath();
    const passedBefore = (before.exam[d.id]?.percent ?? 0) >= EXAM_PASS;
    savePath(recordExam(before, d.id, r.percent, timed && !timeUp));
    const b = recordBest(loadBest(), d.id, r);
    if (b.isNew) saveBest(b.best);
    saveCommon(questions, answers);
    setResult({ ...r, timeUp, firstPass: r.percent >= EXAM_PASS && !passedBefore });
  };
  useEffect(() => { if (left === 0 && !result) submit(true); }, [left]);

  if (result) {
    const pass = result.percent >= EXAM_PASS;
    return (
      <section className="card" aria-live="polite">
        <p className="kicker-sm"><a href={`#learn/${d.id}`}>{d.code}</a> · Practice exam results</p>
        <h2>{result.correct} of {result.total} ({result.percent}%): {pass ? 'pass' : 'not yet'}</h2>
        {result.timeUp && <p className="muted">Time ran out; unanswered questions count as wrong.</p>}
        <p className={pass ? 'ok' : 'error'}>{pass ? `You passed the ${d.code} practice exam!${result.firstPass ? ` The ${d.code} badge is yours. 🏅` : ''}` : `You need ${EXAM_PASS}%. Look at the sections below to see where to study, then try again.`}</p>
        <table>
          <thead><tr><th>Section</th><th>Correct</th></tr></thead>
          <tbody>{Object.entries(result.bySection).sort(([a], [b]) => a.localeCompare(b)).map(([name, s]) => <tr key={name}><td>{name}</td><td>{s.correct} / {s.total}</td></tr>)}</tbody>
        </table>
        <Review questions={questions} answers={answers} />
        <div className="row">
          <button onClick={onExit}>Take it again</button>
          <a className="button primary" href={pass ? '#achievements' : `#learn/${d.id}`}>{pass ? 'See your badges' : `Back to the ${d.code} lessons`}</a>
        </div>
      </section>
    );
  }

  const q = questions[i];
  const picked = answers[q.id] || [];
  const answered = questions.filter(x => (answers[x.id] || []).length).length;
  const flagged = flags.includes(q.id);
  return (
    <section className="card question exam">
      <div className="row spread">
        <span className="muted">{d.code} practice exam · {answered} of {questions.length} answered</span>
        {left !== null && <span className={left < 60 ? 'error' : 'muted'} aria-live="off">⏱ {Math.floor(left / 60)}:{String(left % 60).padStart(2, '0')}</span>}
      </div>
      <nav className="palette" aria-label="Questions">
        {questions.map((x, k) => (
          <button key={x.id} aria-label={`Question ${k + 1}${(answers[x.id] || []).length ? ', answered' : ''}${flags.includes(x.id) ? ', flagged' : ''}`} aria-current={k === i ? 'step' : undefined}
            className={[(answers[x.id] || []).length && 'answered', flags.includes(x.id) && 'flagged'].filter(Boolean).join(' ')} onClick={() => setI(k)}>{k + 1}</button>
        ))}
      </nav>
      <p className="muted">Question {i + 1} of {questions.length} · {q.section}</p>
      <h3>{q.prompt}</h3>
      {q.type === 'multi' && !/select all/i.test(q.prompt) && <p className="muted">Select all that apply.</p>}
      <Choices q={q} picked={picked} reveal={false} onPick={k => setAnswers(a => ({ ...a, [q.id]: toggled(q, picked, k) }))} />
      <div className="row">
        <button disabled={i === 0} onClick={() => setI(i - 1)}>‹ Back</button>
        <button aria-pressed={flagged} onClick={() => setFlags(f => (flagged ? f.filter(x => x !== q.id) : [...f, q.id]))}>{flagged ? '⚑ Flagged' : '⚐ Flag'}</button>
        {i + 1 < questions.length ? <button className="primary" onClick={() => setI(i + 1)}>Next ›</button>
          : <button className="primary" onClick={() => setConfirm(true)}>Review &amp; submit</button>}
      </div>
      {i + 1 < questions.length && <p><button className="link" onClick={() => setConfirm(true)}>Submit the exam</button></p>}
      {confirm && (
        <div className="confirm" role="alertdialog" aria-labelledby="confirm-h">
          <p id="confirm-h"><b>Submit now?</b> {questions.length - answered ? `${questions.length - answered} unanswered (they count as wrong). ` : 'Every question is answered. '}{flags.length ? `${flags.length} flagged.` : ''}</p>
          <div className="row">
            <button onClick={() => setConfirm(false)}>Keep working</button>
            <button className="primary" onClick={() => submit()}>Submit</button>
          </div>
        </div>
      )}
    </section>
  );
}
