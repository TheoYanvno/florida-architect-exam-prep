// Practice questions written for this app (not copied from NCARB or any prep company). Each one is tied
// to a division and one of its NCARB sections, has one or more correct choices, and explains the answer.
// Types: 'single' (pick one) and 'multi' (pick all that apply), the two most common ARE item types.

export const QUESTIONS = [
  {
    id: 'pcm-001', division: 'pcm', section: 'Business Operations', type: 'single',
    prompt: 'A firm\'s direct salary expense for a project is $40,000. The firm bills at a 3.0 multiplier on direct salary. What fee does that labor produce?',
    choices: ['$40,000', '$80,000', '$120,000', '$160,000'], answer: [2],
    explain: 'A multiplier covers direct salary, overhead and profit: $40,000 × 3.0 = $120,000.',
  },
  {
    id: 'pcm-002', division: 'pcm', section: 'Business Operations', type: 'single',
    prompt: 'An employee works 2,080 hours in a year and charges 1,560 of them to projects. What is the employee\'s utilization rate?',
    choices: ['25%', '60%', '75%', '133%'], answer: [2],
    explain: 'Utilization is billable hours divided by total hours: 1,560 ÷ 2,080 = 0.75, or 75%.',
  },
  {
    id: 'pcm-003', division: 'pcm', section: 'Finances, Risk, & Development of Practice', type: 'single',
    prompt: 'Which insurance protects an architecture firm against claims that its own negligent acts, errors or omissions caused a client\'s loss?',
    choices: ['Commercial general liability', 'Professional liability', 'Workers\' compensation', 'Builder\'s risk'], answer: [1],
    explain: 'Professional liability (errors and omissions) insurance covers claims arising from negligent professional services. General liability covers bodily injury and property damage not tied to professional services.',
  },
  {
    id: 'pcm-004', division: 'pcm', section: 'Finances, Risk, & Development of Practice', type: 'multi',
    prompt: 'Which business structures can limit the owners\' personal liability for the firm\'s business debts? Select all that apply.',
    choices: ['Sole proprietorship', 'General partnership', 'Limited liability company (LLC)', 'Corporation'], answer: [2, 3],
    explain: 'LLCs and corporations are separate legal entities that shield owners from the firm\'s business debts. Sole proprietors and general partners are personally liable. Neither shields a licensed professional from liability for their own professional negligence.',
  },
  {
    id: 'pcm-005', division: 'pcm', section: 'Practice-Wide Delivery of Services', type: 'single',
    prompt: 'A firm wants to grow its share of health care projects. Which is the best first step in its marketing plan?',
    choices: ['Lower fees on every proposal', 'Research the health care market and the firm\'s current position in it', 'Hire a health care specialist before any planning', 'Enter every design competition available'], answer: [1],
    explain: 'A marketing plan starts with research: the target market, competitors and the firm\'s strengths. Goals, strategies and actions follow from that.',
  },
  {
    id: 'pcm-006', division: 'pcm', section: 'Practice Methodologies', type: 'single',
    prompt: 'In integrated project delivery (IPD), what most distinguishes it from design-bid-build?',
    choices: ['The contractor is chosen by lowest bid after design', 'The owner, architect and builder share risk and reward under one agreement from early design', 'The architect also acts as the contractor', 'Construction starts before the program is written'], answer: [1],
    explain: 'IPD brings the key parties together early under a multi-party agreement with shared risk and reward. Design-bid-build separates design from a competitively bid construction contract.',
  },
  {
    id: 'pcm-007', division: 'pcm', section: 'Business Operations', type: 'single',
    prompt: 'Which expense is overhead (indirect) rather than a direct project expense?',
    choices: ['Reproduction of drawings for one client', 'Travel to a project site', 'Rent for the firm\'s office', 'A structural consultant hired for one project'], answer: [2],
    explain: 'Office rent supports the whole firm and can\'t be charged to one project, so it is overhead. The others are tied to a specific project.',
  },
  {
    id: 'pcm-008', division: 'pcm', section: 'Finances, Risk, & Development of Practice', type: 'multi',
    prompt: 'Which practices reduce a firm\'s professional liability risk? Select all that apply.',
    choices: ['Written agreements that define scope', 'Documenting decisions and changes in writing', 'Starting work before the agreement is signed', 'Quality control reviews of documents before issue'], answer: [0, 1, 3],
    explain: 'Clear scope, written records and document reviews all reduce risk. Working before an agreement is signed leaves scope and responsibilities undefined.',
  },
  // Project Management
  {
    id: 'pjm-001', division: 'pjm', section: 'Contracts', type: 'single',
    prompt: 'Which AIA document is the standard form of agreement between an owner and an architect?',
    choices: ['A101', 'A201', 'B101', 'G702'], answer: [2],
    explain: 'B101 is the owner-architect agreement. A101 is the owner-contractor agreement (stipulated sum), A201 holds the general conditions of the construction contract, and G702 is the contractor\'s application for payment.',
  },
  {
    id: 'pjm-002', division: 'pjm', section: 'Contracts', type: 'single',
    prompt: 'During construction, a change to the contract sum and time is agreed to and signed by the owner, architect and contractor. What is this document?',
    choices: ['Construction Change Directive', 'Change Order', 'Architect\'s Supplemental Instructions', 'Addendum'], answer: [1],
    explain: 'A Change Order is signed by all three and changes the work, sum or time. A Construction Change Directive is used when the contractor has not agreed yet; supplemental instructions cover minor changes with no change in sum or time; addenda change the bidding documents before a contract exists.',
  },
  {
    id: 'pjm-003', division: 'pjm', section: 'Project Work Planning', type: 'single',
    prompt: 'In the phases of basic services, which phase comes right after Schematic Design?',
    choices: ['Construction Documents', 'Design Development', 'Bidding or Negotiation', 'Programming'], answer: [1],
    explain: 'The usual order is Schematic Design, Design Development, Construction Documents, Procurement (bidding or negotiation), then Construction.',
  },
  {
    id: 'pjm-004', division: 'pjm', section: 'Resource Management', type: 'single',
    prompt: 'A project manager sees that the team has used 60% of the design fee while the work is about 40% complete. What should the project manager do first?',
    choices: ['Stop all work until the owner pays more', 'Find out why the hours ran over and revise the work plan and staffing', 'Ask the team to stop recording their hours', 'Skip the quality control review to save time'], answer: [1],
    explain: 'Comparing fee spent with work completed is how overruns are caught early. The first step is to understand the cause, then adjust staffing, scope or schedule, and talk with the principal and the owner if scope has grown.',
  },
  {
    id: 'pjm-005', division: 'pjm', section: 'Project Quality Control', type: 'multi',
    prompt: 'Which practices improve the quality of a drawing set before it is issued? Select all that apply.',
    choices: ['A review by someone who did not draw the set', 'Checklists for each discipline\'s sheets', 'Coordinating the consultants\' drawings with the architectural drawings', 'Skipping the review when the deadline is tight'], answer: [0, 1, 2],
    explain: 'Independent review, checklists and cross-discipline coordination catch conflicts before they reach the field. Skipping review under deadline pressure is where costly errors come from.',
  },
  {
    id: 'pjm-006', division: 'pjm', section: 'Project Execution', type: 'single',
    prompt: 'The architect hires a structural engineer as a consultant. Who is responsible for coordinating the engineer\'s work with the rest of the design?',
    choices: ['The owner', 'The contractor', 'The architect', 'The building official'], answer: [2],
    explain: 'Consultants hired by the architect work under the architect, who coordinates their services with the overall design and is responsible to the owner for them.',
  },
  {
    id: 'pjm-007', division: 'pjm', section: 'Contracts', type: 'single',
    prompt: 'Under the standard owner-architect agreement, who furnishes the survey of the site\'s boundaries, utilities and topography?',
    choices: ['The owner', 'The architect', 'The contractor', 'The civil engineer, at the architect\'s cost'], answer: [0],
    explain: 'B101 makes site information such as surveys and geotechnical reports the owner\'s responsibility. The architect is entitled to rely on that information.',
  },
  {
    id: 'pjm-008', division: 'pjm', section: 'Project Quality Control', type: 'single',
    prompt: 'What should the architect obtain before moving from Design Development into Construction Documents?',
    choices: ['A building permit', 'The owner\'s approval of the Design Development documents', 'The contractor\'s schedule of values', 'A certificate of occupancy'], answer: [1],
    explain: 'Each design phase ends with a submittal to the owner and the owner\'s approval, so later phases build on decisions the owner has accepted.',
  },

  // Programming & Analysis
  {
    id: 'pa-001', division: 'pa', section: 'Codes & Regulations', type: 'single',
    prompt: 'Under the International Building Code, what is the occupancy group of a restaurant designed for 80 diners?',
    choices: ['B (Business)', 'M (Mercantile)', 'A-2 (Assembly)', 'R-1 (Residential)'], answer: [2],
    explain: 'Restaurants and other food and drink places with an occupant load of 50 or more are Assembly A-2. Smaller ones can be classified as Group B.',
  },
  {
    id: 'pa-002', division: 'pa', section: 'Environmental & Contextual Conditions', type: 'single',
    prompt: 'In the northern hemisphere, which way should most of the glass face for passive solar heating?',
    choices: ['North', 'South', 'East', 'West'], answer: [1],
    explain: 'South glass gets low winter sun deep into the building, and a roof overhang can shade the high summer sun.',
  },
  {
    id: 'pa-003', division: 'pa', section: 'Site Analysis & Programming', type: 'single',
    prompt: 'A 20,000 sq ft lot has a maximum floor area ratio (FAR) of 2.5. What is the most gross floor area that can be built?',
    choices: ['8,000 sq ft', '22,500 sq ft', '40,000 sq ft', '50,000 sq ft'], answer: [3],
    explain: 'FAR is gross floor area divided by lot area, so the maximum is 20,000 × 2.5 = 50,000 sq ft, spread over any number of floors that zoning allows.',
  },
  {
    id: 'pa-004', division: 'pa', section: 'Building Analysis & Programming', type: 'single',
    prompt: 'A program needs 30,000 net sq ft of usable space, and the building type is about 75% efficient. About how big will the building be?',
    choices: ['22,500 gross sq ft', '30,000 gross sq ft', '37,500 gross sq ft', '40,000 gross sq ft'], answer: [3],
    explain: 'Gross area = net area ÷ efficiency: 30,000 ÷ 0.75 = 40,000 sq ft. The extra covers walls, corridors, stairs, shafts and mechanical rooms.',
  },
  {
    id: 'pa-005', division: 'pa', section: 'Environmental & Contextual Conditions', type: 'multi',
    prompt: 'Which choices reduce the urban heat island effect around a new building? Select all that apply.',
    choices: ['Roofing with high solar reflectance', 'A vegetated (green) roof', 'Shade trees over the parking lot', 'A large dark asphalt plaza'], answer: [0, 1, 2],
    explain: 'Reflective and vegetated roofs and shade keep surfaces cooler. Dark paving absorbs sunlight and releases heat, which makes the heat island worse.',
  },
  {
    id: 'pa-006', division: 'pa', section: 'Site Analysis & Programming', type: 'single',
    prompt: 'The ground rises 5 feet over a horizontal distance of 100 feet. What is the slope?',
    choices: ['0.5%', '5%', '20%', '50%'], answer: [1],
    explain: 'Slope = rise ÷ run × 100: 5 ÷ 100 = 5%. Closely spaced contour lines mean steeper slopes.',
  },
  {
    id: 'pa-007', division: 'pa', section: 'Codes & Regulations', type: 'single',
    prompt: 'Under the 2010 ADA Standards, what is the steepest running slope allowed for a ramp?',
    choices: ['1:8', '1:10', '1:12', '1:20'], answer: [2],
    explain: 'Ramps can be no steeper than 1:12 (one inch of rise per foot of run). Walking surfaces steeper than 1:20 count as ramps.',
  },
  {
    id: 'pa-008', division: 'pa', section: 'Building Analysis & Programming', type: 'single',
    prompt: 'During programming, what is a bubble (adjacency) diagram mainly used for?',
    choices: ['Showing which spaces need to be next to or near each other', 'Calculating structural loads', 'Choosing interior finishes', 'Estimating construction cost'], answer: [0],
    explain: 'Bubble and adjacency diagrams map relationships between spaces before any plan is drawn, so the layout follows how people actually use the building.',
  },
  // Project Planning & Design
  {
    id: 'ppd-001', division: 'ppd', section: 'Building Systems, Materials, & Assemblies', type: 'single',
    prompt: 'Which HVAC system moves refrigerant to indoor units so some zones can heat while others cool at the same time?',
    choices: ['Constant-volume single-zone system', 'Variable refrigerant flow (VRF) with heat recovery', 'Window air conditioners', 'Gravity warm-air furnace'], answer: [1],
    explain: 'A heat-recovery VRF system shifts heat between zones through the refrigerant piping, so one space can be cooled while another is heated.',
  },
  {
    id: 'ppd-002', division: 'ppd', section: 'Project Costs & Budgeting', type: 'single',
    prompt: 'Early in schematic design, which estimating method is most practical?',
    choices: ['A detailed quantity takeoff of every material', 'A cost per square foot based on similar buildings', 'Contractor bids', 'The schedule of values'], answer: [1],
    explain: 'With little detail drawn, estimates use area-based costs from comparable projects. Takeoffs and unit prices become possible as the documents develop.',
  },
  {
    id: 'ppd-003', division: 'ppd', section: 'Codes & Regulations', type: 'single',
    prompt: 'Under the IBC, which construction type allows the structure to be built of combustible materials such as wood framing throughout?',
    choices: ['Type I', 'Type II', 'Type III', 'Type V'], answer: [3],
    explain: 'Type V lets structural elements, exterior walls and interior walls be of any material the code permits, including wood. Types I and II are noncombustible; Type III has noncombustible exterior walls.',
  },
  {
    id: 'ppd-004', division: 'ppd', section: 'Project Integration of Program & Systems', type: 'multi',
    prompt: 'For an office in a hot, humid climate like Central Florida, which choices reduce the cooling load? Select all that apply.',
    choices: ['Exterior shading on east and west windows', 'Glazing with a low solar heat gain coefficient (SHGC)', 'A roof with high solar reflectance', 'Large unshaded west-facing windows'], answer: [0, 1, 2],
    explain: 'Shading, low-SHGC glass and reflective roofs keep solar heat out. Unshaded west glass takes in strong afternoon sun and raises cooling loads.',
  },
  {
    id: 'ppd-005', division: 'ppd', section: 'Environmental Conditions & Context', type: 'single',
    prompt: 'What does a light shelf do?',
    choices: ['Stores backup lighting fixtures', 'Bounces daylight off its top onto the ceiling and deeper into the room while shading the window below', 'Blocks all daylight to reduce glare', 'Supports a skylight'], answer: [1],
    explain: 'A light shelf reflects daylight up onto the ceiling, spreading it further into the space, and shades the lower view glass from direct sun.',
  },
  {
    id: 'ppd-006', division: 'ppd', section: 'Building Systems, Materials, & Assemblies', type: 'single',
    prompt: 'A school gym needs a column-free roof spanning about 120 feet. Which structural system suits it best?',
    choices: ['Wood light-frame joists', 'A concrete flat plate slab', 'Long-span steel trusses or a space frame', 'Short-span masonry bearing walls with lintels'], answer: [2],
    explain: 'Long-span steel trusses and space frames carry roofs over wide column-free spaces efficiently. The other systems suit much shorter spans.',
  },

  // Project Development & Documentation
  {
    id: 'pdd-001', division: 'pdd', section: 'Project Manual & Specifications', type: 'single',
    prompt: 'In CSI MasterFormat, which division covers concrete?',
    choices: ['Division 01', 'Division 03', 'Division 05', 'Division 09'], answer: [1],
    explain: 'Division 03 is Concrete. Division 01 is General Requirements, 05 is Metals and 09 is Finishes.',
  },
  {
    id: 'pdd-002', division: 'pdd', section: 'Project Manual & Specifications', type: 'single',
    prompt: 'Which kind of specification states the results the work must achieve and leaves the method to the contractor?',
    choices: ['Proprietary', 'Descriptive', 'Performance', 'Reference standard'], answer: [2],
    explain: 'A performance spec describes required results and how they will be verified. Descriptive specs spell out materials and methods; proprietary specs name products.',
  },
  {
    id: 'pdd-003', division: 'pdd', section: 'Construction Documentation', type: 'single',
    prompt: 'According to AIA A201, how are the drawings and specifications meant to work together?',
    choices: ['The drawings always govern over the specifications', 'They are complementary: what one requires is as binding as if all required it', 'The specifications always govern over the drawings', 'Only the document signed last applies'], answer: [1],
    explain: 'A201 says the contract documents are complementary. That\'s why coordinating drawings and specs matters: the contractor is bound by both.',
  },
  {
    id: 'pdd-004', division: 'pdd', section: 'Integration of Building Materials & Systems', type: 'single',
    prompt: 'In a hot, humid climate with air-conditioned interiors, where does a vapor retarder generally belong in an exterior wall?',
    choices: ['On the interior face, under the drywall', 'Toward the exterior side of the wall', 'In both faces of the wall', 'Vapor retarders are never used in walls'], answer: [1],
    explain: 'Moisture moves from warm, humid outdoor air toward the cool interior, so the retarder goes toward the exterior. An interior plastic sheet can trap moisture inside the wall.',
  },
  {
    id: 'pdd-005', division: 'pdd', section: 'Codes & Regulations', type: 'single',
    prompt: 'Under the IBC, when must an egress door swing in the direction of exit travel?',
    choices: ['Always', 'When it serves a room with an occupant load of 50 or more', 'Only in residential buildings', 'Never; doors may swing either way'], answer: [1],
    explain: 'Side-hinged egress doors must swing in the direction of travel when serving an occupant load of 50 or more, and in high-hazard areas, so a crowd doesn\'t push against the door.',
  },
  {
    id: 'pdd-006', division: 'pdd', section: 'Construction Cost Estimates', type: 'single',
    prompt: 'Near the end of construction documents, which estimate is the most detailed and accurate?',
    choices: ['Cost per square foot', 'Cost per bed or per seat', 'A quantity takeoff priced with unit costs', 'A percentage of last year\'s project'], answer: [2],
    explain: 'With complete documents, an estimator can count quantities of each material and price them, which gives the most reliable figure before bids.',
  },
];

export function questionsFor(division) {
  return QUESTIONS.filter(q => q.division === division);
}

// True only when exactly the right choices are picked (ARE multi-select items have no partial credit).
export function isCorrect(question, picked) {
  const a = [...question.answer].sort();
  const p = [...new Set(picked)].sort();
  return a.length === p.length && a.every((v, i) => v === p[i]);
}

// Score a set of answers: { [questionId]: [choice indexes] }. Returns totals and a per-section breakdown.
export function score(questions, answers) {
  const bySection = {};
  let correct = 0;
  for (const q of questions) {
    const ok = isCorrect(q, answers[q.id] || []);
    if (ok) correct++;
    const s = (bySection[q.section] ||= { correct: 0, total: 0 });
    s.total++;
    if (ok) s.correct++;
  }
  return { correct, total: questions.length, percent: questions.length ? Math.round((correct / questions.length) * 100) : 0, bySection };
}

// A fair shuffle with a seed, so a practice set can be repeated in the same order.
export function shuffled(list, seed = Date.now()) {
  const out = [...list];
  let s = seed >>> 0 || 1;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
