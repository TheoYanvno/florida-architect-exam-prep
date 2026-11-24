import { useMemo, useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { lessonsFor, lessonById, loadLessons, saveLessons, recordLesson, finished, PASS_MARK } from '../lib/course/index.js';
import { isCorrect, dealChoices } from '../lib/questions.js';
import { DivisionIcon } from './Home.jsx';
import { loadPath, stage, steps, recordDay, quizPassed, examPassed, lessonsDone, QUIZ_PASS, QUIZ_SIZE, EXAM_PASS } from '../lib/path.js';

/** #learn: the six divisions and how far through each course you are. */
export function CourseHome() {
  const done = loadLessons();
  const path = loadPath();
  return (
    <>
      <section className="card">
        <h2>The course</h2>
        <p>Each division is a path in three steps. <b>1. Lessons:</b> each one teaches one of NCARB’s content sections and ends with a short check ({PASS_MARK}% to finish it). <b>2. Division quiz:</b> {QUIZ_SIZE} questions on everything the lessons taught ({QUIZ_PASS}% to pass). <b>3. Practice exam:</b> every question for the division, timed at the real exam’s pace, with no answers until you submit ({EXAM_PASS}% to pass). Pass all three to earn the division’s badge.</p>
        <p className="muted small">Suggested order: PA, PPD, PDD, CE, PjM, PcM. Written for this app; not NCARB material.</p>
      </section>
      <div className="course-grid">
        {DIVISIONS.map(d => {
          const s = steps(d.id, done, path);
          const at = stage(d.id, done, path);
          return (
            <a key={d.id} className="card course-div" href={`#learn/${d.id}`}>
              <span className="div-top"><DivisionIcon id={d.id} /><span><b>{d.code}</b><small>{d.name}</small></span></span>
              <span className="muted small">{at === 'done' ? '🏅 Badge earned' : at === 'lessons' ? `Step 1: lessons · ${s.done} of ${s.total} steps` : at === 'quiz' ? 'Step 2: division quiz' : 'Step 3: practice exam'}</span>
              <span className="bar"><span style={{ width: `${(s.done / s.total) * 100}%` }} /></span>
            </a>
          );
        })}
      </div>
    </>
  );
}

/** #learn/pa: one division's lessons in order. */
export function DivisionCourse({ id }) {
  const d = DIVISIONS.find(x => x.id === id) || DIVISIONS[0];
  const done = loadLessons();
  const lessons = lessonsFor(d.id);
  const next = lessons.find(l => !finished(done, l.id));
  const path = loadPath();
  const at = stage(d.id, done, path);
  return (
    <>
      <section className="card">
        <h2 className="div-h"><DivisionIcon id={d.id} size={30} /> {d.code} · {d.name}</h2>
        <p className="muted">{d.items} exam items · {lessons.length} lessons · {lessons.reduce((n, l) => n + l.minutes, 0)} minutes of reading</p>
        {!lessons.length ? <p>Lessons for {d.code} are on the way. Until then, use the practice questions and flashcards.</p>
          : next ? <a className="button primary" href={`#lesson/${next.id}`}>{lessons.some(l => finished(done, l.id)) ? 'Continue' : 'Start'}: {next.title}</a>
          : at === 'quiz' ? <a className="button primary" href={`#quiz/${d.id}`}>Every lesson finished. Take the {d.code} quiz</a>
          : at === 'exam' ? <a className="button primary" href={`#exam/${d.id}`}>Quiz passed. Take the {d.code} practice exam</a>
          : <a className="button primary" href="#achievements">🏅 {d.code} badge earned. See your achievements</a>}
      </section>
      <h3 className="step-h"><span className={`step-num${lessonsDone(d.id, done) ? ' done' : ''}`}>{lessonsDone(d.id, done) ? '✓' : 1}</span> Lessons</h3>
      <ol className="lesson-list">
        {lessons.map((l, i) => (
          <li key={l.id}>
            <a className={`card lesson-row${finished(done, l.id) ? ' done' : ''}`} href={`#lesson/${l.id}`}>
              <span className="lesson-num" aria-hidden="true">{finished(done, l.id) ? '✓' : i + 1}</span>
              <span><b>{l.title}</b><small>{l.section} · {l.minutes} min{done[l.id] !== undefined ? ` · check ${done[l.id]}%` : ''}</small></span>
              <span className="chev" aria-hidden="true">›</span>
            </a>
          </li>
        ))}
      </ol>
      <h3 className="step-h"><span className={`step-num${quizPassed(d.id, path) ? ' done' : ''}`}>{quizPassed(d.id, path) ? '✓' : 2}</span> Division quiz</h3>
      <a className={`card lesson-row${quizPassed(d.id, path) ? ' done' : ''}${lessonsDone(d.id, done) ? '' : ' locked'}`} href={`#quiz/${d.id}`}>
        <span className="lesson-num" aria-hidden="true">{lessonsDone(d.id, done) ? '📝' : '🔒'}</span>
        <span><b>{d.code} quiz</b><small>{QUIZ_SIZE} questions · pass with {QUIZ_PASS}%{path.quiz[d.id] !== undefined ? ` · best ${path.quiz[d.id]}%` : lessonsDone(d.id, done) ? '' : ' · unlocks after the lessons'}</small></span>
        <span className="chev" aria-hidden="true">›</span>
      </a>
      <h3 className="step-h"><span className={`step-num${examPassed(d.id, path) ? ' done' : ''}`}>{examPassed(d.id, path) ? '✓' : 3}</span> Practice exam</h3>
      <a className={`card lesson-row${examPassed(d.id, path) ? ' done' : ''}${quizPassed(d.id, path) ? '' : ' locked'}`} href={`#exam/${d.id}`}>
        <span className="lesson-num" aria-hidden="true">{quizPassed(d.id, path) ? '🎓' : '🔒'}</span>
        <span><b>{d.code} practice exam</b><small>Timed at the real pace · pass with {EXAM_PASS}%{path.exam[d.id] ? ` · best ${path.exam[d.id].percent}%` : quizPassed(d.id, path) ? '' : ' · unlocks after the quiz'}</small></span>
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
  const next = all[i + 1];
  return (
    <>
      <article className="card lesson">
        <p className="kicker-sm"><a href={`#learn/${d.id}`}>{d.code}</a> · Lesson {i + 1} of {all.length} · {lesson.section}</p>
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
      <Check lesson={lesson} next={next} />
    </>
  );
}

function Check({ lesson, next }) {
  const questions = useMemo(() => dealChoices(lesson.quiz), [lesson.id]);
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
              : <a className="button primary" href={`#quiz/${lesson.division}`}>Last lesson done. On to the division quiz</a>}
          </div>
        </div>
      )}
    </section>
  );
}
