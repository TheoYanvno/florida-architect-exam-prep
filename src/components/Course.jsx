import { useMemo, useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { lessonsFor, lessonById, unitsFor, loadLessons, saveLessons, recordLesson, finished, PASS_MARK } from '../lib/course/index.js';
import { isCorrect, dealChoices, lessonCheck } from '../lib/questions.js';
import { DivisionIcon } from './Home.jsx';
import { loadPath, stage, steps, recordDay, quizPassed, examPassed, lessonsDone, currentUnit, unitPassed, QUIZ_PASS, QUIZ_SIZE, EXAM_PASS } from '../lib/path.js';

/** #learn: the six divisions and how far through each course you are. */
export function CourseHome() {
  const done = loadLessons();
  const path = loadPath();
  return (
    <>
      <section className="card">
        <h2>The course</h2>
        <p>Each division is a course of four units. <b>Each unit</b> has three lessons, and each lesson teaches part of NCARB’s content and ends with a short check ({PASS_MARK}% to finish it). <b>A unit quiz</b> of {QUIZ_SIZE} questions closes each unit ({QUIZ_PASS}% to pass). <b>The practice exam</b> unlocks when all four unit quizzes are passed: full length, timed at the real exam’s pace, with no answers until you submit ({EXAM_PASS}% to pass). Every question on the exam is taught in one of the lessons. Pass it all to earn the division’s badge.</p>
        <p className="muted small">Suggested order: PA, PPD, PDD, CE, PjM, PcM. Written for this app; not NCARB material.</p>
      </section>
      <div className="course-grid">
        {DIVISIONS.map(d => {
          const s = steps(d.id, done, path);
          const at = stage(d.id, done, path);
          return (
            <a key={d.id} className="card course-div" href={`#learn/${d.id}`}>
              <span className="div-top"><DivisionIcon id={d.id} /><span><b>{d.code}</b><small>{d.name}</small></span></span>
              <span className="muted small">{at === 'done' ? '🏅 Badge earned' : at === 'lessons' ? `Lessons · ${s.done} of ${s.total} steps` : at === 'quiz' ? 'Next: a unit quiz' : 'Next: practice exam'}</span>
              <span className="bar"><span style={{ width: `${(s.done / s.total) * 100}%` }} /></span>
            </a>
          );
        })}
      </div>
    </>
  );
}

/** #learn/pa: one division's course: four units of three lessons, each ending with a quiz, then the practice exam. */
export function DivisionCourse({ id }) {
  const d = DIVISIONS.find(x => x.id === id) || DIVISIONS[0];
  const done = loadLessons();
  const path = loadPath();
  const units = unitsFor(d.id);
  const lessons = units.flatMap(u => u.lessons);
  const at = stage(d.id, done, path);
  const u = currentUnit(d.id, done, path);
  const next = u !== null ? units[u].lessons.find(l => !finished(done, l.id)) : lessons.find(l => !finished(done, l.id));
  const unlocked = quizPassed(d.id, path);
  return (
    <>
      <section className="card">
        <h2 className="div-h"><DivisionIcon id={d.id} size={30} /> {d.code} · {d.name}</h2>
        <p className="muted">{d.items} exam items · {units.length} units · {lessons.length} lessons · {lessons.reduce((n, l) => n + l.minutes, 0)} minutes of reading</p>
        {at === 'lessons' && next ? <a className="button primary" href={`#lesson/${next.id}`}>{lessons.some(l => finished(done, l.id)) ? 'Continue' : 'Start'}: {next.title}</a>
          : at === 'quiz' ? <a className="button primary" href={`#quiz/${d.id}/${u + 1}`}>Take the unit {u + 1} quiz</a>
          : at === 'exam' ? <a className="button primary" href={`#exam/${d.id}`}>Every unit quiz passed. Take the {d.code} practice exam</a>
          : <a className="button primary" href="#achievements">🏅 {d.code} badge earned. See your achievements</a>}
      </section>
      {units.map((unit, k) => {
        const lessonsDone = unit.lessons.every(l => finished(done, l.id));
        const passed = unitPassed(d.id, k, path);
        const best = path.units?.[d.id]?.[k];
        return (
          <section key={k} className="unit">
            <h3 className="step-h"><span className={`step-num${lessonsDone && passed ? ' done' : ''}`}>{lessonsDone && passed ? '✓' : k + 1}</span> Unit {k + 1}: {unit.title}</h3>
            <ol className="lesson-list">
              {unit.lessons.map((l, i) => (
                <li key={l.id}>
                  <a className={`card lesson-row${finished(done, l.id) ? ' done' : ''}`} href={`#lesson/${l.id}`}>
                    <span className="lesson-num" aria-hidden="true">{finished(done, l.id) ? '✓' : k * 3 + i + 1}</span>
                    <span><b>{l.title}</b><small>{l.section} · {l.minutes} min{done[l.id] !== undefined ? ` · check ${done[l.id]}%` : ''}</small></span>
                    <span className="chev" aria-hidden="true">›</span>
                  </a>
                </li>
              ))}
            </ol>
            <a className={`card lesson-row quiz-row${passed ? ' done' : ''}${lessonsDone ? '' : ' locked'}`} href={`#quiz/${d.id}/${k + 1}`}>
              <span className="lesson-num" aria-hidden="true">{passed ? '✓' : lessonsDone ? '📝' : '🔒'}</span>
              <span><b>Unit {k + 1} quiz</b><small>{QUIZ_SIZE} questions · pass with {QUIZ_PASS}%{best != null ? ` · best ${best}%` : lessonsDone ? '' : ' · unlocks after these three lessons'}</small></span>
              <span className="chev" aria-hidden="true">›</span>
            </a>
          </section>
        );
      })}
      <h3 className="step-h"><span className={`step-num${examPassed(d.id, path) ? ' done' : ''}`}>{examPassed(d.id, path) ? '✓' : '★'}</span> Practice exam</h3>
      <a className={`card lesson-row${examPassed(d.id, path) ? ' done' : ''}${unlocked ? '' : ' locked'}`} href={`#exam/${d.id}`}>
        <span className="lesson-num" aria-hidden="true">{unlocked ? '🎓' : '🔒'}</span>
        <span><b>{d.code} practice exam</b><small>Full length, timed at the real pace · pass with {EXAM_PASS}%{path.exam[d.id] ? ` · best ${path.exam[d.id].percent}%` : unlocked ? '' : ` · unlocks after all ${units.length} unit quizzes`}</small></span>
        <span className="chev" aria-hidden="true">›</span>
      </a>
      <p className="muted small">Want extra practice at any time? <a href={`#practice/${d.id}`}>Free practice questions for {d.code} ›</a> &nbsp; <a href="#cards">Flashcards ›</a></p>
    </>
  );
}

const Para = ({ text }) => <p>{text}</p>;

/** #lesson/pa-l1: read the lesson, then take its check. */
export function Lesson({ id }) {
  const lesson = lessonById(id);
  if (!lesson) return <section className="card"><p>That lesson wasn’t found. <a href="#learn">Back to the course</a></p></section>;
  const d = DIVISIONS.find(x => x.id === lesson.division);
  const all = lessonsFor(lesson.division);
  const i = all.findIndex(l => l.id === id);
  const units = unitsFor(lesson.division);
  const unit = units.findIndex(u => u.lessons.some(l => l.id === id));
  const lastInUnit = units[unit]?.lessons.at(-1)?.id === id;
  const next = lastInUnit ? null : all[i + 1];
  return (
    <>
      <article className="card lesson">
        <p className="kicker-sm"><a href={`#learn/${d.id}`}>{d.code}</a> · Unit {unit + 1} · Lesson {i + 1} of {all.length} · {lesson.section}</p>
        <h2>{lesson.title}</h2>
        <p className="lead">{lesson.intro}</p>
        {lesson.parts.map(part => (
          <section key={part.h}>
            <h3>{part.h}</h3>
            {(part.p || []).map((t, k) => <Para key={k} text={t} />)}
            {part.list && <ul>{part.list.map((t, k) => <li key={k}>{t}</li>)}</ul>}
          </section>
        ))}
        {lesson.example && (
          <aside className="example">
            <h3>Worked example: {lesson.example.title}</h3>
            <ol>{lesson.example.steps.map((t, k) => <li key={k}>{t}</li>)}</ol>
          </aside>
        )}
        <aside className="takeaways">
          <h3>Remember</h3>
          <ul>{lesson.takeaways.map((t, k) => <li key={k}>{t}</li>)}</ul>
        </aside>
      </article>
      <Check lesson={lesson} next={next} unit={unit} />
    </>
  );
}

function Check({ lesson, next, unit }) {
  const questions = useMemo(() => dealChoices(lessonCheck(lesson)), [lesson.id]);
  const [picked, setPicked] = useState({});
  const [result, setResult] = useState(null);
  const pick = (q, k) => {
    if (result) return;
    setPicked(p => {
      const cur = p[q.id] || [];
      if (q.type === 'single') return { ...p, [q.id]: [k] };
      return { ...p, [q.id]: cur.includes(k) ? cur.filter(x => x !== k) : [...cur, k].sort() };
    });
  };
  const check = () => {
    const right = questions.filter(q => isCorrect(q, picked[q.id] || [])).length;
    const percent = Math.round((right / questions.length) * 100);
    const next = recordLesson(loadLessons(), lesson.id, percent);
    saveLessons(next);
    recordDay();
    setResult({ right, percent });
  };
  const again = () => { setPicked({}); setResult(null); };
  return (
    <section className="card check" aria-labelledby="check-h">
      <h2 id="check-h">Check your understanding</h2>
      <p className="muted">{questions.length} questions. Score {PASS_MARK}% or better to finish this lesson.</p>
      {questions.map((q, n) => {
        const mine = picked[q.id] || [];
        const ok = result && isCorrect(q, mine);
        return (
          <div key={q.id} className="check-q">
            <p><b>{n + 1}.</b> {q.prompt}{q.type === 'multi' && !/select all/i.test(q.prompt) && <span className="muted"> (Select all that apply.)</span>}</p>
            <div className="choices">
              {q.choices.map((c, k) => {
                const cls = ['choice', mine.includes(k) && 'picked', result && q.answer.includes(k) && 'right', result && mine.includes(k) && !q.answer.includes(k) && 'wrong'].filter(Boolean).join(' ');
                return <button key={k} className={cls} aria-pressed={mine.includes(k)} onClick={() => pick(q, k)}>{c}</button>;
              })}
            </div>
            {result && <p className={ok ? 'ok' : 'error'}>{ok ? 'Right.' : 'Not quite.'} <span className="explain">{q.explain}</span></p>}
          </div>
        );
      })}
      {!result ? (
        <button className="primary" onClick={check} disabled={questions.some(q => !(picked[q.id] || []).length)}>Check my answers</button>
      ) : (
        <div className="check-result" aria-live="polite">
          <p className={result.percent >= PASS_MARK ? 'ok' : 'error'}>{result.right} of {questions.length} right ({result.percent}%). {result.percent >= PASS_MARK ? 'Lesson finished!' : 'Read the lesson again and try once more.'}</p>
          <div className="row">
            <button onClick={again}>Try again</button>
            {next ? <a className="button primary" href={`#lesson/${next.id}`}>Next lesson: {next.title}</a>
              : <a className="button primary" href={`#quiz/${lesson.division}/${unit + 1}`}>Unit {unit + 1} done. Take the unit quiz</a>}
          </div>
        </div>
      )}
    </section>
  );
}
