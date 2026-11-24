import { useMemo, useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { cardsFor, loadKnown, saveKnown, markCard, deck, cardQuiz, loadCardQuiz, saveCardQuiz, recordCardQuiz } from '../lib/flashcards.js';
import { recordDay } from '../lib/path.js';

// Flashcards: key terms for a division. Tap the card to see the definition, then mark it Got it (it leaves
// the pile) or Again (it comes back). Known cards are saved in the browser.
export default function Flashcards() {
  const [division, setDivision] = useState(DIVISIONS[0].id);
  const [mode, setMode] = useState('study');
  const [known, setKnown] = useState(loadKnown);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [pile, setPile] = useState(() => deck(DIVISIONS[0].id, loadKnown()));
  const card = pile[i % pile.length];
  const total = cardsFor(division).length;
  const knownHere = cardsFor(division).filter((c) => known.includes(c.id)).length;

  function choose(id) {
    setDivision(id); setPile(deck(id, known)); setI(0); setFlipped(false);
  }
  function answer(gotIt) {
    const next = markCard(known, card.id, gotIt);
    setKnown(next); saveKnown(next); recordDay(); setFlipped(false);
    if (i + 1 < pile.length) setI(i + 1);
    else { setPile(deck(division, next)); setI(0); }
  }

  return (
    <section>
      <h2>Flashcards</h2>
      <p className="muted">Key terms for each division, in plain words. Study the cards, then quiz yourself: see a definition and pick the term that matches.</p>
      <div className="tabs" role="tablist" aria-label="Flashcard mode">
        <button role="tab" aria-selected={mode === 'study'} className={mode === 'study' ? 'on' : ''} onClick={() => setMode('study')}>Study cards</button>
        <button role="tab" aria-selected={mode === 'quiz'} className={mode === 'quiz' ? 'on' : ''} onClick={() => setMode('quiz')}>Quiz me</button>
      </div>
      <div className="row">
        <label>Division
          <select value={division} onChange={(e) => choose(e.target.value)}>
            {DIVISIONS.map((d) => {
              const n = cardsFor(d.id).filter((c) => known.includes(c.id)).length;
              return <option key={d.id} value={d.id}>{d.code} · {d.name} ({n} of {cardsFor(d.id).length} known)</option>;
            })}
          </select>
        </label>
        {mode === 'study' && <span className="muted">{knownHere === total ? `All ${total} known. Going through them again.` : `${knownHere} of ${total} known · card ${i + 1} of ${pile.length}`}</span>}
      </div>
      {mode === 'quiz' ? <CardQuiz key={division} division={division} /> : <>
      <button className={`flashcard ${flipped ? 'flipped' : ''}`} aria-live="polite" onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); setFlipped((f) => !f); } }}>
        {flipped ? <span className="definition">{card.definition}</span> : <span className="term">{card.term}</span>}
        <span className="muted small">{flipped ? card.term : 'Tap to turn over'}</span>
      </button>
      {flipped && (
        <div className="row">
          <button onClick={() => answer(false)}>Again</button>
          <button className="primary" onClick={() => answer(true)}>Got it</button>
        </div>
      )}
      </>}
    </section>
  );
}

// Quiz mode: ten definitions from the division, four terms to choose from, the answer shown after each.
function CardQuiz({ division }) {
  const [seed, setSeed] = useState(Date.now);
  const questions = useMemo(() => cardQuiz(division, seed), [division, seed]);
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState({});
  const [best, setBest] = useState(loadCardQuiz);
  const [done, setDone] = useState(null);
  const d = DIVISIONS.find((x) => x.id === division);

  const restart = () => { setSeed(Date.now()); setI(0); setPicks({}); setDone(null); };
  const finish = (all) => {
    const right = questions.filter((q) => all[q.id] === q.answer).length;
    const percent = Math.round((right / questions.length) * 100);
    const next = recordCardQuiz(best, division, percent);
    setBest(next); saveCardQuiz(next); recordDay();
    setDone({ right, percent });
  };

  if (done) {
    return (
      <div className="card" aria-live="polite">
        <h3>{done.right} of {questions.length} right ({done.percent}%)</h3>
        <p className={done.percent >= 70 ? 'ok' : 'error'}>{done.percent === 100 ? 'Every term right! 🏅' : done.percent >= 70 ? 'Nicely done. Get every one right for the Total recall badge.' : 'Study the cards a little more, then try a new set. 70% earns the Card sharp badge.'}</p>
        <ol className="review">{questions.filter((q) => picks[q.id] !== q.answer).map((q) => <li key={q.id}><b>{q.options[q.answer]}</b>: {q.definition}</li>)}</ol>
        <div className="row"><button className="primary" onClick={restart}>New quiz</button></div>
      </div>
    );
  }

  const q = questions[i];
  const picked = picks[q.id];
  const answered = picked !== undefined;
  return (
    <div className="card question">
      <p className="muted">{d.code} · {i + 1} of {questions.length}{best[division] !== undefined ? ` · best ${best[division]}%` : ''}</p>
      <div className="quiz-dots" aria-hidden="true">{questions.map((x, k) => <span key={x.id} className={k < i ? (picks[x.id] === x.answer ? 'right' : 'wrong') : k === i ? 'now' : ''} />)}</div>
      <p className="muted small">Which term matches this definition?</p>
      <h3>{q.definition}</h3>
      <div className="choices" role="radiogroup">
        {q.options.map((t, k) => (
          <button key={k} role="radio" aria-checked={picked === k} disabled={answered}
            className={`choice ${answered && k === q.answer ? 'right' : ''} ${answered && k === picked && k !== q.answer ? 'wrong' : ''}`}
            onClick={() => setPicks((p) => ({ ...p, [q.id]: k }))}>{t}</button>
        ))}
      </div>
      {answered && (
        <div className={`feedback ${picked === q.answer ? 'ok' : 'bad'}`} aria-live="polite">
          <strong>{picked === q.answer ? 'Correct.' : `It's ${q.options[q.answer]}.`}</strong>
          <div><button className="primary" onClick={() => (i + 1 < questions.length ? setI(i + 1) : finish(picks))}>{i + 1 < questions.length ? 'Next' : 'See my score'}</button></div>
        </div>
      )}
    </div>
  );
}
