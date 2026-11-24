import { useState } from 'react';
import { loadBest } from '../lib/scores.js';
import { loadDates, saveDates } from '../lib/dates.js';
import { loadMissed } from '../lib/missed.js';
import { loadKnown, CARDS } from '../lib/flashcards.js';
import { loadPassed, savePassed, togglePassed, loadName, saveName, summary } from '../lib/progress.js';
import { DivisionIcon } from './Home.jsx';

/** Each division's readiness, with a switch to mark it passed, and what you've saved along the way. */
export function Progress() {
  const best = loadBest();
  const [passed, setPassed] = useState(loadPassed);
  const s = summary(best, passed, loadDates().goal, new Date().toISOString().slice(0, 10));
  const flip = id => { const next = togglePassed(passed, id); setPassed(next); savePassed(next); };
  return (
    <>
      <section className="card">
        <h2>Your divisions</h2>
        <p className="muted">Readiness is your best practice score. When you pass a division, mark it here.</p>
        <ul className="progress-list">
          {s.each.map(d => (
            <li key={d.id}>
              <DivisionIcon id={d.id} size={30} />
              <span className="pl-name"><b>{d.code}</b> {d.name}
                <span className="bar"><span style={{ width: `${d.percent}%` }} /></span>
              </span>
              <label className="check pass"><input type="checkbox" checked={d.passed} onChange={() => flip(d.id)} /> Passed</label>
            </li>
          ))}
        </ul>
      </section>
      <section className="card">
        <h2>Along the way</h2>
        <div className="stat-grid">
          <div><b>{s.overall}%</b><span>overall</span></div>
          <div><b>{loadMissed().length}</b><span>questions to retry</span></div>
          <div><b>{loadKnown().length}/{CARDS.length}</b><span>flashcards known</span></div>
        </div>
        <p><a href="#practice/missed">Practice the questions you missed ›</a></p>
      </section>
    </>
  );
}

const isIOS = () => /iPhone|iPad|iPod/.test(globalThis.navigator?.userAgent || '');
const installed = () => globalThis.matchMedia?.('(display-mode: standalone)').matches || globalThis.navigator?.standalone === true;

/** Your name for the greeting, your dates, and how to put the app on your iPhone. */
export function Profile() {
  const [name, setName] = useState(loadName);
  const [dates, setDates] = useState(loadDates);
  const [cleared, setCleared] = useState(false);
  const [sure, setSure] = useState(false);
  const change = (k, v) => { const next = { ...dates, [k]: v }; setDates(next); saveDates(next); };
  const clear = () => {
    try { Object.keys(localStorage).filter(k => k.startsWith('are-prep:')).forEach(k => localStorage.removeItem(k)); } catch { /* storage blocked */ }
    setCleared(true); setName('');
  };
  return (
    <>
      <section className="card">
        <h2>You</h2>
        <div className="row">
          <label>Your first name <input value={name} maxLength={40} onChange={e => { setName(e.target.value); saveName(e.target.value); }} placeholder="For the greeting" /></label>
          <label>Start studying <input type="date" value={dates.start} onChange={e => change('start', e.target.value)} /></label>
          <label>Goal: done by <input type="date" value={dates.goal} onChange={e => change('goal', e.target.value)} /></label>
        </div>
        <p className="muted small">Everything is saved only on this device.</p>
      </section>

      <section className="card install">
        <h2>Put it on your iPhone</h2>
        {installed() ? <p className="ok">It's on your home screen. It works offline too.</p> : (
          <>
            <ol>
              <li>Open this page in <b>Safari</b>{isIOS() ? '' : ' on your iPhone'}.</li>
              <li>Tap the <b>Share</b> button (the square with an arrow pointing up).</li>
              <li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b>.</li>
            </ol>
            <p className="muted small">It opens full screen like an app, keeps your progress, and works without a connection after the first visit. On Android, use Chrome's menu and <b>Install app</b>.</p>
          </>
        )}
      </section>

      <section className="card">
        <h2>Start over</h2>
        {cleared ? <p>Your scores, plan dates, missed questions, flashcards and name were cleared from this device.</p>
          : !sure ? <button onClick={() => setSure(true)}>Clear my data on this device</button>
          : <p>This removes your scores, dates, missed questions, flashcards and name, and can't be undone. <button className="primary danger" onClick={clear}>Yes, clear it</button> <button onClick={() => setSure(false)}>Keep it</button></p>}
      </section>
    </>
  );
}
