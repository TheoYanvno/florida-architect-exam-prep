// Project Development & Documentation (PDD): detailing the building and documenting it for construction.
const S = (prompt, choices, answer, explain) => ({ type: 'single', prompt, choices, answer: [answer], explain });
const M = (prompt, choices, answer, explain) => ({ type: 'multi', prompt, choices, answer, explain });

export default [
  {
    section: 'Integration of Building Materials & Systems', title: 'Details that keep water, air and heat in their place', minutes: 15,
    intro: 'PDD\'s biggest section is about how materials and systems fit together in real details: walls, roofs, openings and the joints between them.',
    parts: [
      { h: 'Water first', p: [
        'Most building failures are water failures. Design every joint so gravity drains water out: lap materials shingle-fashion (upper over lower), slope sills and copings, add drips under edges, and put flashing at every opening, roof edge and change of material.',
        'Through-wall flashing at masonry lintels and shelf angles, with weeps above it, carries water in the cavity back outside.',
      ] },
      { h: 'Air, vapor and heat', p: [
        'A continuous air barrier stops air leaks, which carry far more moisture than vapor diffusion. Vapor retarders go on the warm, humid side of the insulation: the outside in hot-humid Florida, the inside in cold climates.',
        'Thermal bridges (steel studs, slab edges, shelf angles) let heat bypass insulation. Continuous insulation outside the framing reduces them. Effective R-value of a wall with steel studs is much lower than the insulation\'s rated R-value.',
      ] },
      { h: 'Movement', p: [
        'Materials move with temperature, moisture and loads. Provide control joints in concrete slabs and masonry, expansion joints across buildings, and deflection allowances where walls meet structure above (slip tracks at the top of partitions).',
        'Clay brick grows over time; concrete block shrinks. Never lock them rigidly together.',
      ] },
      { h: 'Roofs', list: [
        'Low-slope roofs (below 2:12) use membranes such as TPO, PVC, EPDM or modified bitumen, with at least 1/4 inch per foot slope to drains.',
        'Steep roofs use shingles, tile or metal, which shed water by lapping.',
        'Provide secondary (overflow) drains or scuppers so ponding water can\'t overload the structure.',
        'In high-wind areas, roof edges and corners need extra attachment because wind uplift is highest there.',
      ] },
    ],
    example: { title: 'Effective slope to a drain', steps: [
      'A roof drain is 40 feet from the high point of a low-slope roof.',
      'At the minimum 1/4 inch per foot: 40 × 1/4 = 10 inches of rise from the drain to the high point.',
      'Tapered insulation or sloped structure must create those 10 inches.',
    ] },
    takeaways: [
      'Lap materials so water flows out; flash every opening and change of material.',
      'Air barriers matter more than vapor retarders; put vapor retarders on the warm, humid side.',
      'Continuous insulation outside the framing reduces thermal bridging.',
      'Provide joints for movement: brick grows, block shrinks.',
      'Low-slope roofs need at least 1/4 inch per foot to drains and an overflow path.',
    ],
    quiz: [
      S('What is the minimum slope commonly required for a low-slope membrane roof to drain?', ['1/16 inch per foot', '1/8 inch per foot', '1/4 inch per foot', '1 inch per foot'], 2, 'Codes call for at least 1/4 inch per foot (2%) on most low-slope roofs so water drains instead of ponding.'),
      S('Where is through-wall flashing needed in a masonry cavity wall?', ['Only at the roof', 'At lintels, shelf angles, sills and the base of the wall, with weeps', 'Nowhere if the brick is sealed', 'Only on the inside face'], 1, 'Flashing at every interruption of the cavity, with weeps above it, carries water back out.'),
      M('Which details accommodate movement? Select all that apply.', ['Control joints in a slab on grade', 'Slip track at the head of a partition', 'Rigidly mortaring brick veneer to the concrete frame', 'Expansion joints between building sections'], [0, 1, 3], 'Joints and slip connections let materials move. Locking brick to a concrete frame causes cracking because they move differently.'),
      S('Why is a steel-stud wall\'s effective R-value lower than the insulation\'s rated R-value?', ['Steel absorbs water', 'The studs are thermal bridges that conduct heat around the insulation', 'Insulation shrinks between steel studs', 'Steel studs are always too short'], 1, 'Steel conducts heat well, so each stud bypasses the cavity insulation. Continuous exterior insulation fixes this.'),
    ],
  },
  {
    section: 'Construction Documentation', title: 'Drawings that can be built from', minutes: 14,
    intro: 'Construction documents tell the contractor what to build. PDD tests whether you know how a drawing set is organized and how to coordinate it.',
    parts: [
      { h: 'The contract documents', p: [
        'The contract documents are the agreement, the conditions of the contract (general, supplementary and other), the drawings, the specifications, addenda issued before signing, and modifications after. Drawings show quantity, location, relationship and size; specifications describe quality: materials, products, workmanship and standards.',
        'Say each thing once, in the right place. Don\'t repeat specification requirements in drawing notes, where the two can drift apart.',
      ] },
      { h: 'How a set is organized', p: [
        'The U.S. National CAD Standard orders sheets by discipline: G general, C civil, L landscape, S structural, A architectural, I interiors, P plumbing, M mechanical, E electrical, F fire protection, T telecom. Within architectural, plans come before elevations, sections, enlarged plans, details and schedules.',
        'Drawings go from large to small scale: site plan, floor plans (1/8" = 1\'-0"), building sections and elevations, wall sections (3/4" or 1/2"), and details (1-1/2" to 3"). Every view is referenced so the builder can find the next level of detail.',
      ] },
      { h: 'Schedules and coordination', list: [
        'Door, window, finish and equipment schedules organize repetitive information in tables.',
        'Coordinate architectural, structural and MEP drawings: column grids, openings in walls and slabs, ceiling heights against ducts, and fire-rated walls against penetrations.',
        'Keynotes link drawing tags to specification sections.',
      ] },
      { h: 'Changes before bidding', p: [
        'An addendum changes the bidding documents before bids are due and becomes part of the contract. After the contract is signed, changes happen through change orders, construction change directives or minor changes in the work.',
      ] },
    ],
    example: { title: 'Finding a detail', steps: [
      'Floor plan A-101 has a section mark "3 / A-301" cutting through the exterior wall.',
      'Sheet A-301, view 3, is a wall section at 3/4" = 1\'-0", with a detail callout "5 / A-501" at the window head.',
      'Sheet A-501, detail 5, at 3" = 1\'-0", shows the head flashing. Each step adds detail without repeating information.',
    ] },
    takeaways: [
      'Drawings show quantity, location and size; specifications describe quality.',
      'Sheets are organized by discipline (G, C, L, S, A, I, P, M, E, F, T).',
      'Views go from small scale (plans) to large scale (details), each referenced to the next.',
      'Addenda change documents before bids; change orders change the contract after.',
    ],
    quiz: [
      S('Which part of the contract documents describes the quality of materials and workmanship?', ['The drawings', 'The specifications', 'The agreement', 'The bid form'], 1, 'Specifications describe quality; drawings show quantity, location, relationship and size.'),
      S('A change is issued to all bidders a week before bids are due. What is it called?', ['A change order', 'An addendum', 'A construction change directive', 'A submittal'], 1, 'Addenda modify the bidding documents before bids are received and become part of the contract.'),
      M('Which should the architect coordinate between disciplines? Select all that apply.', ['Column grids', 'Openings in rated walls for ducts', 'Ceiling heights against ductwork', 'The contractor\'s means and methods'], [0, 1, 2], 'Grids, penetrations and ceiling space are design coordination. Means and methods belong to the contractor.'),
      S('Under the National CAD Standard, what does an "M" sheet prefix mean?', ['Masonry', 'Mechanical', 'Miscellaneous', 'Materials'], 1, 'M is mechanical. The discipline letters order the whole set.'),
    ],
  },
  {
    section: 'Project Manual & Specifications', title: 'Writing the project manual', minutes: 12,
    intro: 'The project manual holds everything that isn\'t a drawing: bidding requirements, contract forms, conditions and the technical specifications. PDD asks how specifications are organized and written.',
    parts: [
      { h: 'MasterFormat', p: [
        'CSI MasterFormat organizes specifications into numbered divisions: 00 procurement and contracting requirements, 01 general requirements, then the work itself (03 concrete, 04 masonry, 05 metals, 06 wood and plastics, 07 thermal and moisture protection, 08 openings, 09 finishes, through 21 to 28 for fire suppression, plumbing, HVAC, electrical and communications, and 31 to 33 for site work).',
      ] },
      { h: 'SectionFormat: three parts', list: [
        'Part 1 General: scope, references, submittals, quality assurance, delivery and storage, warranties.',
        'Part 2 Products: materials, manufacturers, fabrication and performance.',
        'Part 3 Execution: preparation, installation, field quality control, cleaning and protection.',
      ] },
      { h: 'Ways to specify', list: [
        'Descriptive: describes materials and properties in detail without naming products.',
        'Performance: states the required results and how they will be verified, leaving the means to the contractor.',
        'Reference standard: requires compliance with a published standard such as ASTM.',
        'Proprietary: names products. Closed (one product, no substitutes) or open ("or equal", or with substitutions allowed). Public work usually requires open, competitive specs.',
      ] },
      { h: 'Good specification writing', p: [
        'Use short, imperative sentences ("Install anchors at 16 inches on center"), the right term every time, and no conflicting or duplicate requirements between drawings and specs. Division 01 holds requirements that apply to every section, such as substitution procedures and closeout.',
      ] },
    ],
    example: { title: 'Placing requirements in the right part', steps: [
      'Requirement: "Submit manufacturer\'s product data for review" goes in Part 1 (submittals).',
      'Requirement: "Gypsum board: 5/8 inch Type X, ASTM C1396" goes in Part 2 (products).',
      'Requirement: "Fasten board at 12 inches on center at ceilings" goes in Part 3 (execution).',
    ] },
    takeaways: [
      'MasterFormat organizes specs into divisions; 00 and 01 come first.',
      'Every section has three parts: General, Products, Execution.',
      'Performance specs state results; proprietary specs name products.',
      'Division 01 holds requirements that apply to the whole project.',
    ],
    quiz: [
      S('In SectionFormat, where do installation requirements go?', ['Part 1 General', 'Part 2 Products', 'Part 3 Execution', 'Division 00'], 2, 'Part 3 Execution covers preparation, installation, field quality control and protection.'),
      S('A specification states the required wind and water resistance of a curtain wall and how it will be tested, leaving the design to the contractor. What type is it?', ['Proprietary', 'Descriptive', 'Performance', 'Closed'], 2, 'Performance specifications state the result and how it will be verified.'),
      M('Which belong in Division 01 General Requirements? Select all that apply.', ['Substitution procedures', 'Project closeout requirements', 'Concrete mix design', 'Temporary facilities'], [0, 1, 3], 'Division 01 covers project-wide procedures and temporary facilities. Concrete mixes belong in Division 03.'),
      S('Which MasterFormat division covers doors, windows and hardware?', ['Division 06', 'Division 07', 'Division 08', 'Division 09'], 2, 'Division 08 Openings covers doors, frames, windows, glazing and hardware.'),
    ],
  },
  {
    section: 'Codes & Regulations', title: 'Codes in the details', minutes: 12,
    intro: 'In PDD, codes show up in the details: fire-rated assemblies, stairs and handrails, guards, accessible features and energy requirements.',
    parts: [
      { h: 'Fire-resistance-rated assemblies', p: [
        'Walls, floors and shafts are rated in hours based on tested assemblies (ASTM E119 or UL 263). Use a listed assembly exactly as tested. Openings in rated walls need rated doors (fire door assemblies with closers and labeled frames) and penetrations need tested firestop systems.',
        'Door ratings come from the code\'s tables: for example, 1-1/2-hour doors in 2-hour exit enclosures and shafts, 1-hour doors in 1-hour exit enclosures and shafts, 3/4-hour doors in other 1-hour fire barriers, and 20-minute doors in 1-hour corridor walls.',
      ] },
      { h: 'Stairs, handrails and guards', list: [
        'Commercial stairs: risers 4 to 7 inches, treads at least 11 inches, minimum width usually 44 inches (36 inches for small occupant loads).',
        'Handrails 34 to 38 inches above the stair nosing, on both sides, extending 12 inches beyond the top riser and one tread depth beyond the bottom (ADA).',
        'Guards at least 42 inches high where a drop exceeds 30 inches, with openings that won\'t pass a 4-inch sphere.',
      ] },
      { h: 'Accessible details', list: [
        'Doors: 32 inches clear opening, with maneuvering clearances on the pull side.',
        'Toilet rooms: 60-inch turning space, grab bars at 33 to 36 inches high, water closet centerline 16 to 18 inches from the side wall.',
        'Reach ranges: 15 to 48 inches above the floor for controls.',
        'Protruding objects: no more than 4 inches into a circulation path between 27 and 80 inches high.',
      ] },
      { h: 'Energy code', p: [
        'The energy code sets insulation and window performance (U-factor and SHGC), air-leakage limits, and lighting power. In Florida\'s hot climate, a low SHGC on windows matters most.',
      ] },
    ],
    example: { title: 'Checking a stair', steps: [
      'A floor-to-floor height of 12\'-0" = 144 inches. With 7-inch maximum risers: 144 ÷ 7 = 20.6, so 21 risers.',
      'Actual riser: 144 ÷ 21 = 6.86 inches. Treads: 20 treads × 11 inches = 220 inches (18\'-4") of run.',
      'Check landings: one flight may rise no more than 12 feet between landings, so this 12-foot floor height is right at the limit for a single flight.',
    ] },
    takeaways: [
      'Use tested fire-rated assemblies exactly; rated walls need rated doors and firestopping.',
      'Stairs: 7-inch maximum risers, 11-inch minimum treads; handrails 34 to 38 inches.',
      'Guards: 42 inches high where the drop exceeds 30 inches; 4-inch sphere rule.',
      'Accessible doors: 32 inches clear; reach range 15 to 48 inches.',
    ],
    quiz: [
      S('A floor-to-floor height is 10\'-6" (126 inches). What is the fewest number of risers allowed with a 7-inch maximum riser?', ['16', '18', '19', '21'], 1, '126 ÷ 7 = 18 risers exactly, each 7 inches.'),
      S('What is the minimum guard height along a commercial mezzanine edge with a 10-foot drop?', ['30 inches', '34 inches', '36 inches', '42 inches'], 3, 'Guards in commercial buildings must be at least 42 inches high where the drop is more than 30 inches.'),
      M('Which are required when a duct passes through a 1-hour fire-rated wall? Select all that apply.', ['A fire damper or other method allowed by code', 'A tested firestop system around the penetration', 'Leaving a gap for air movement', 'Following the rated assembly\'s listing'], [0, 1, 3], 'Penetrations must keep the rating: dampers where required, tested firestopping, and the listed assembly. Gaps break the rating.'),
      S('What is the minimum clear opening width of an accessible door?', ['28 inches', '30 inches', '32 inches', '36 inches'], 2, 'Accessible doors need a 32-inch clear opening, measured with the door open 90 degrees.'),
    ],
  },
  {
    section: 'Construction Cost Estimates', title: 'Estimating from the documents', minutes: 9,
    intro: 'This small section asks you to estimate quantities and costs from drawings and to keep the design within budget as the documents are finished.',
    parts: [
      { h: 'Quantity take-offs', p: [
        'By construction documents, estimates are built from quantities: square feet of wall and roof, cubic yards of concrete, linear feet of trim, counts of doors and fixtures. Multiply each quantity by a unit cost (material, labor and equipment), then add general conditions, overhead, profit, contingency and escalation.',
      ] },
      { h: 'Useful conversions', list: [
        'Cubic yards = cubic feet ÷ 27.',
        'Areas of walls: perimeter × height, minus large openings.',
        'Add waste: about 5% to 10% for many materials.',
      ] },
      { h: 'Keeping to budget', p: [
        'Compare each estimate with the budget. If it\'s over, look at the biggest cost items first: structure, envelope and MEP systems, not small finishes. Alternates in the bid documents (add or deduct options) let the owner decide on extras after seeing prices.',
      ] },
    ],
    example: { title: 'Concrete for a slab', steps: [
      'A slab is 60 feet by 90 feet and 5 inches thick.',
      'Volume = 60 × 90 × (5 ÷ 12) = 2,250 cubic feet. ÷ 27 = 83.3 cubic yards.',
      'With 5% waste: about 87.5 cubic yards. At $180 a yard in place: about $15,750.',
    ] },
    takeaways: [
      'Detailed estimates = quantities × unit costs + markups.',
      'Cubic yards = cubic feet ÷ 27.',
      'Cut cost where the money is: structure, envelope, MEP.',
      'Bid alternates let the owner choose options after seeing prices.',
    ],
    quiz: [
      S('A footing is 2 feet wide, 1 foot deep and 270 feet long. How many cubic yards of concrete, before waste?', ['10', '20', '27', '540'], 1, '2 × 1 × 270 = 540 cubic feet ÷ 27 = 20 cubic yards.'),
      S('An estimate at 95% CDs is 8% over budget. Where should the team look first for savings?', ['Paint colors', 'Major systems such as structure, envelope and MEP', 'Door hardware finish', 'Signage fonts'], 1, 'The biggest savings come from the biggest cost items.'),
      S('What lets an owner decide whether to include an optional item after bids come in?', ['An addendum', 'A bid alternate', 'A change order', 'A submittal'], 1, 'Bid alternates price add or deduct options so the owner can choose based on actual prices.'),
      M('What gets added to direct material and labor costs in a construction estimate? Select all that apply.', ['General conditions', 'Contractor overhead and profit', 'Contingency', 'The architect\'s copyright'], [0, 1, 2], 'General conditions, overhead and profit, contingency and escalation are standard markups.'),
    ],
  },
];
