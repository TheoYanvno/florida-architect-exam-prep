// Key terms for each division, with short definitions written for this app (not copied from NCARB or any
// prep company). Cards you mark "Got it" are saved in the browser; "Again" puts a card back in the pile.

export const CARDS = [
  // Practice Management
  { id: 'pcm-t1', division: 'pcm', term: 'Utilization rate', definition: 'Billable hours divided by total hours worked. 1,560 billable of 2,080 hours is 75%.' },
  { id: 'pcm-t2', division: 'pcm', term: 'Multiplier', definition: 'What a firm bills for each dollar of direct salary. It covers the salary itself, overhead and profit.' },
  { id: 'pcm-t3', division: 'pcm', term: 'Break-even rate', definition: 'Direct salary plus overhead, divided by direct salary: the multiplier at which a project makes no profit and loses no money.' },
  { id: 'pcm-t4', division: 'pcm', term: 'Overhead', definition: 'Costs of running the firm that can\'t be charged to one project, such as rent, insurance, utilities and time spent on marketing.' },
  { id: 'pcm-t5', division: 'pcm', term: 'Professional liability insurance', definition: 'Insurance (errors and omissions) that covers claims that the firm\'s negligent professional services caused a client\'s loss.' },
  { id: 'pcm-t6', division: 'pcm', term: 'Backlog', definition: 'Fees for work under contract that has not been done yet. It shows how long current work will keep the staff busy.' },
  // Project Management
  { id: 'pjm-t1', division: 'pjm', term: 'Standard of care', definition: 'The skill and care that architects ordinarily use under similar circumstances. Architects are held to it, not to perfection.' },
  { id: 'pjm-t2', division: 'pjm', term: 'AIA B101', definition: 'The standard form of agreement between owner and architect, setting out services, compensation and each party\'s responsibilities.' },
  { id: 'pjm-t3', division: 'pjm', term: 'Additional services', definition: 'Services beyond those in the agreement\'s basic services, such as extra design options after approval, which are paid separately.' },
  { id: 'pjm-t4', division: 'pjm', term: 'Stipulated sum', definition: 'A contract for one fixed price for the work. The contractor takes the risk that costs run higher.' },
  { id: 'pjm-t5', division: 'pjm', term: 'Cost of the work plus a fee', definition: 'A contract where the owner pays the actual costs plus a fee, often with a guaranteed maximum price (GMP) as a ceiling.' },
  { id: 'pjm-t6', division: 'pjm', term: 'Critical path', definition: 'The longest chain of tasks that depend on each other. It sets the shortest possible schedule; any delay on it delays the project.' },
  // Programming & Analysis
  { id: 'pa-t1', division: 'pa', term: 'Floor area ratio (FAR)', definition: 'Gross floor area allowed divided by the lot area. A FAR of 2.0 on a 10,000 sq ft lot allows 20,000 sq ft of building.' },
  { id: 'pa-t2', division: 'pa', term: 'Setback', definition: 'The minimum distance zoning requires between a property line and the building.' },
  { id: 'pa-t3', division: 'pa', term: 'Easement', definition: 'A right to use part of someone else\'s land for a purpose, such as a utility line or access drive. It limits where you can build.' },
  { id: 'pa-t4', division: 'pa', term: 'Variance', definition: 'Permission from the zoning board to depart from a zoning rule, usually because the rule causes a hardship on that specific property.' },
  { id: 'pa-t5', division: 'pa', term: 'Net-to-gross ratio', definition: 'Usable (net) area divided by total (gross) area. The rest is walls, corridors, stairs, shafts and mechanical space.' },
  { id: 'pa-t6', division: 'pa', term: 'Contour lines', definition: 'Lines joining points of equal elevation on a site plan. The closer together they are, the steeper the slope.' },
  // Project Planning & Design
  { id: 'ppd-t1', division: 'ppd', term: 'R-value and U-factor', definition: 'R-value is resistance to heat flow (higher insulates better). U-factor is the heat flow through a whole assembly: 1 divided by its total R-value.' },
  { id: 'ppd-t2', division: 'ppd', term: 'Solar heat gain coefficient (SHGC)', definition: 'The share of the sun\'s heat a window lets through, from 0 to 1. In hot climates like Florida, a lower SHGC keeps cooling loads down.' },
  { id: 'ppd-t3', division: 'ppd', term: 'IBC construction types', definition: 'Types I and II are noncombustible, Type III has noncombustible exterior walls, Type IV is heavy or mass timber, and Type V allows any material, including wood framing.' },
  { id: 'ppd-t4', division: 'ppd', term: 'Occupancy classification', definition: 'The building code\'s grouping by use (assembly, business, educational, residential and others), which drives fire, egress and height rules.' },
  { id: 'ppd-t5', division: 'ppd', term: 'Life-cycle cost', definition: 'The total cost of owning something over its life: first cost plus energy, maintenance and replacements, less what it is worth at the end, in today\'s dollars.' },
  { id: 'ppd-t6', division: 'ppd', term: 'Light shelf', definition: 'A horizontal shelf at a window that shades the lower glass and bounces daylight off its top onto the ceiling, deeper into the room.' },
  // Project Development & Documentation
  { id: 'pdd-t1', division: 'pdd', term: 'MasterFormat', definition: 'CSI\'s numbering system that organizes the project manual\'s specifications into 50 divisions (00 to 49).' },
  { id: 'pdd-t2', division: 'pdd', term: 'Performance vs. prescriptive specs', definition: 'A performance spec states the result required and lets the contractor choose how. A prescriptive spec names the materials and methods.' },
  { id: 'pdd-t3', division: 'pdd', term: 'Vapor retarder', definition: 'A layer that slows moisture through a wall. In cold climates it goes on the warm inside face; in hot, humid climates an interior vapor barrier can trap moisture in the wall.' },
  { id: 'pdd-t4', division: 'pdd', term: 'Flashing', definition: 'Thin waterproof material at roof edges, openings and joints that directs water out of the building instead of into it.' },
  { id: 'pdd-t5', division: 'pdd', term: 'Fire-resistance rating', definition: 'How long, in hours, an assembly such as a wall or floor holds up under a standard fire test (ASTM E119).' },
  { id: 'pdd-t6', division: 'pdd', term: 'Project manual', definition: 'The bound book of bidding requirements, contract forms, conditions of the contract and specifications that goes with the drawings.' },
  // Construction & Evaluation
  { id: 'ce-t1', division: 'ce', term: 'Substantial completion', definition: 'When the work is complete enough, under the contract documents, for the owner to occupy or use it for its intended purpose.' },
  { id: 'ce-t2', division: 'ce', term: 'Retainage', definition: 'A part of each progress payment held back (often 5 to 10%) until the work is finished, as security for completing it.' },
  { id: 'ce-t3', division: 'ce', term: 'Construction change directive', definition: 'A written order, signed by the owner and architect, directing a change in the work before the contractor agrees on its cost or time.' },
  { id: 'ce-t4', division: 'ce', term: 'Shop drawings', definition: 'Drawings the contractor or a supplier prepares to show how part of the work will be made. The architect reviews them only for conformance with the design intent.' },
  { id: 'ce-t5', division: 'ce', term: 'Certificate for payment', definition: 'The architect\'s statement, on AIA G702, that the work has progressed as the contractor\'s application says and the amount certified is due.' },
  { id: 'ce-t6', division: 'ce', term: 'Request for information (RFI)', definition: 'A contractor\'s written question asking the architect to clarify the contract documents.' },
];

const KEY = 'are-prep:cards-known';
const IDS = new Set(CARDS.map((c) => c.id));

export function cardsFor(division) {
  return CARDS.filter((c) => c.division === division);
}

export function loadKnown(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || '[]');
    return Array.isArray(raw) ? [...new Set(raw.filter((id) => IDS.has(id)))] : [];
  } catch { return []; }
}

export function saveKnown(ids, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(ids)); return true; } catch { return false; }
}

/** Mark a card known ("Got it") or not ("Again"). Returns the new list. */
export function markCard(known, id, gotIt) {
  const out = new Set(known);
  if (gotIt) out.add(id); else out.delete(id);
  return CARDS.map((c) => c.id).filter((x) => out.has(x));
}

/** The cards still to learn in a division, then (when all are known) the whole deck again. */
export function deck(division, known) {
  const all = cardsFor(division);
  const left = all.filter((c) => !known.includes(c.id));
  return left.length ? left : all;
}
