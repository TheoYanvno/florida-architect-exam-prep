import { useState } from 'react';
import { DIVISIONS } from '../lib/are.js';
import { cardsFor, loadKnown, saveKnown, markCard, deck } from '../lib/flashcards.js';

// Flashcards: key terms for a division. Tap the card to see the definition, then mark it Got it (it leaves
// the pile) or Again (it comes back). Known cards are saved in the browser.
export default function Flashcards() {
  const [division, setDivision] = useState(DIVISIONS[0].id);
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
    setKnown(next); saveKnown(next); setFlipped(false);
    if (i + 1 < pile.length) setI(i + 1);
    else { setPile(deck(division, next)); setI(0); }
  }

  return (
    <section>
      <h2>Flashcards</h2>
      <p className="muted">Key terms for each division, in plain words. Tap the card (or press Space) to turn it over.</p>
      <div className="row">
        <label>Division
          <select value={division} onChange={(e) => choose(e.target.value)}>
            {DIVISIONS.map((d) => {
              const n = cardsFor(d.id).filter((c) => known.includes(c.id)).length;
              return <option key={d.id} value={d.id}>{d.code} · {d.name} ({n} of {cardsFor(d.id).length} known)</option>;
            })}
          </select>
        </label>
        <span className="muted">{knownHere === total ? `All ${total} known. Going through them again.` : `${knownHere} of ${total} known · card ${i + 1} of ${pile.length}`}</span>
      </div>
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
    </section>
  );
}
