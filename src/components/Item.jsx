import { useState } from 'react';
import { isCorrect, parseNumber } from '../lib/questions.js';
import { caseById, figureById } from '../lib/bank/index.js';
import { Figure } from './figures.jsx';

// One ARE-style item's answer area, for every type: multiple choice, check all that apply, number fill-in,
// hot spot and drag-and-place, with its case study brief when it has one. The value is always an array:
//   single/multi: picked choice indexes · number: [typed text] · hotspot: [x, y] · drag: [slot for each item]
// reveal shows right and wrong; disabled stops changes (after an answer is checked).

/** The note under the prompt that says how to answer. */
export function howTo(q) {
  if (q.type === 'multi') return /select all/i.test(q.prompt) ? '' : 'Select all that apply.';
  if (q.type === 'number') return 'Type a number.';
  if (q.type === 'hotspot') return 'Tap the drawing to place your mark. You can also use the arrow keys, then Enter.';
  if (q.type === 'drag') return q.order ? 'Tap an item, then tap the box where it goes. Each box holds one item.' : 'Tap an item, then tap the box where it goes.';
  return '';
}

export function CaseBrief({ id, open = false }) {
  const c = caseById(id);
  if (!c) return null;
  return (
    <details className="case" open={open}>
      <summary>Case study: <b>{c.title}</b></summary>
      <p>{c.intro}</p>
      {c.parts.map((part) => (
        <section key={part.h}>
          <h4>{part.h}</h4>
          {(part.p || []).map((t, k) => <p key={k}>{t}</p>)}
          {part.list && <ul>{part.list.map((t, k) => <li key={k}>{t}</li>)}</ul>}
          {part.table && (
            <div className="table-wrap"><table>
              <thead><tr>{part.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{part.table.rows.map((r, k) => <tr key={k}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
            </table></div>
          )}
        </section>
      ))}
      {c.figure && figureById(c.figure) && <Figure meta={figureById(c.figure)} />}
    </details>
  );
}

export default function ItemInput({ q, value = [], onChange, reveal = false, disabled = false, caseOpen }) {
  const body = q.type === 'number' ? <NumberIn q={q} value={value} onChange={onChange} reveal={reveal} disabled={disabled} />
    : q.type === 'hotspot' ? <Hotspot q={q} value={value} onChange={onChange} reveal={reveal} disabled={disabled} />
    : q.type === 'drag' ? <Drag q={q} value={value} onChange={onChange} reveal={reveal} disabled={disabled} />
    : <Choices q={q} value={value} onChange={onChange} reveal={reveal} disabled={disabled} />;
  return (
    <>
      {q.case && <CaseBrief id={q.case} open={caseOpen} />}
      {q.figure && q.type !== 'hotspot' && figureById(q.figure) && <div className="exhibit"><Figure meta={figureById(q.figure)} /></div>}
      {howTo(q) && <p className="muted small how">{howTo(q)}</p>}
      {body}
    </>
  );
}

function Choices({ q, value, onChange, reveal, disabled }) {
  const pick = (k) => onChange(q.type === 'single' ? [k] : value.includes(k) ? value.filter((x) => x !== k) : [...value, k].sort());
  return (
    <div role={q.type === 'single' ? 'radiogroup' : 'group'} className="choices">
      {q.choices.map((c, k) => {
        const state = reveal ? (q.answer.includes(k) ? 'right' : value.includes(k) ? 'wrong' : '') : '';
        return (
          <button key={k} type="button" role={q.type === 'single' ? 'radio' : 'checkbox'} aria-checked={value.includes(k)}
            className={`choice ${value.includes(k) ? 'picked' : ''} ${state}`} onClick={() => !disabled && pick(k)}>
            {String.fromCharCode(65 + k)}. {c}
          </button>
        );
      })}
    </div>
  );
}

function NumberIn({ q, value, onChange, reveal, disabled }) {
  const ok = reveal && isCorrect(q, value);
  return (
    <div className="number-in">
      <label>
        <span className="sr-only">Your answer{q.unit ? ` in ${q.unit}` : ''}</span>
        <input type="text" inputMode="decimal" autoComplete="off" value={value[0] ?? ''} disabled={disabled}
          className={reveal ? (ok ? 'right' : 'wrong') : ''} onChange={(e) => onChange([e.target.value])} placeholder="0" />
      </label>
      {q.unit && <span className="unit">{q.unit}</span>}
      {value[0] && Number.isNaN(parseNumber(value[0])) && <span className="error small">Numbers only, please.</span>}
    </div>
  );
}

export function Target({ target }) {
  return target.points
    ? <polygon points={target.points.map((p) => p.join(',')).join(' ')} className="fig-target" />
    : <rect x={target.x} y={target.y} width={target.w} height={target.h} rx="6" className="fig-target" />;
}

export const Mark = ({ x, y, right }) => (
  <g className={`fig-mark${right === undefined ? '' : right ? ' right' : ' wrong'}`}>
    <circle cx={x} cy={y} r="9" /><path d={`M${x - 14} ${y}h28M${x} ${y - 14}v28`} />
  </g>
);

function Hotspot({ q, value, onChange, reveal, disabled }) {
  const meta = figureById(q.figure);
  const [cursor, setCursor] = useState(null);
  if (!meta) return <p className="error">This drawing is missing.</p>;
  const placed = value.length === 2;
  const pointer = (e) => {
    if (disabled) return;
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    onChange([Math.round(p.x), Math.round(p.y)]);
  };
  const key = (e) => {
    if (disabled) return;
    const step = e.shiftKey ? 2 : 10;
    const at = cursor || (placed ? { x: value[0], y: value[1] } : { x: meta.w / 2, y: meta.h / 2 });
    const move = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
    if (move) {
      e.preventDefault();
      const next = { x: Math.min(meta.w, Math.max(0, at.x + move[0])), y: Math.min(meta.h, Math.max(0, at.y + move[1])) };
      setCursor(next);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange([at.x, at.y]);
      setCursor(null);
    }
  };
  return (
    <div className="hotspot">
      <Figure meta={meta} onPointer={pointer} onKeyDown={key} focusable={!disabled}
        label={`${meta.alt}${placed ? ' Your mark is placed.' : ''}`}>
        {reveal && <Target target={q.target} />}
        {cursor && <g className="fig-cursor"><circle cx={cursor.x} cy={cursor.y} r="9" /></g>}
        {placed && <Mark x={value[0]} y={value[1]} right={reveal ? isCorrect(q, value) : undefined} />}
      </Figure>
    </div>
  );
}

function Drag({ q, value, onChange, reveal, disabled }) {
  const [held, setHeld] = useState(null);
  const at = q.items.map((_, i) => (Number.isInteger(value[i]) ? value[i] : null));
  const place = (slot) => {
    if (disabled || held === null) return;
    const next = [...at];
    if (q.order) next.forEach((s, i) => { if (s === slot) next[i] = null; });   // one item per box
    next[held] = slot;
    onChange(next);
    setHeld(null);
  };
  const unplace = (i) => { if (disabled) return; const next = [...at]; next[i] = null; onChange(next); };
  const loose = q.items.map((_, i) => i).filter((i) => at[i] === null);
  return (
    <div className="drag">
      <div className="drag-pool" aria-label="Items to place">
        {loose.length ? loose.map((i) => (
          <button key={i} type="button" className={`chip-item${held === i ? ' held' : ''}`} aria-pressed={held === i} onClick={() => !disabled && setHeld(held === i ? null : i)}>{q.items[i]}</button>
        )) : <span className="muted small">Every item is placed.</span>}
      </div>
      <div className="drag-slots">
        {q.slots.map((s, slot) => {
          const here = q.items.map((_, i) => i).filter((i) => at[i] === slot);
          return (
            <div key={slot} className={`slot${held !== null ? ' ready' : ''}`}>
              <button type="button" className="slot-label" onClick={() => place(slot)} disabled={disabled || held === null}
                aria-label={held !== null ? `Place "${q.items[held]}" in ${s}` : s}>{s}</button>
              {here.map((i) => {
                const state = reveal ? (q.answer[i] === slot ? 'right' : 'wrong') : '';
                return <button key={i} type="button" className={`chip-item placed ${state}`} onClick={() => unplace(i)} aria-label={`${q.items[i]}, placed in ${s}. Tap to take it out.`}>{q.items[i]}</button>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** For reviews: the drawing with the right area and the spot picked, or nothing for other types. */
export function ReviewFigure({ q, value = [] }) {
  if (q.type !== 'hotspot') return null;
  const meta = figureById(q.figure);
  if (!meta) return null;
  return (
    <div className="hotspot review-fig">
      <Figure meta={meta}>
        <Target target={q.target} />
        {value.length === 2 && <Mark x={value[0]} y={value[1]} right={isCorrect(q, value)} />}
      </Figure>
    </div>
  );
}
