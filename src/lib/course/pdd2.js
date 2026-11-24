// PDD lessons 6 to 12. Each teaches the practice and exam questions listed for it in units.js.
export default [
  { // l6
    section: 'Integration of Building Materials & Systems', title: 'Walls: water, air, heat and vapor', minutes: 13,
    intro: 'Exterior walls fail at layers and joints. This lesson follows a brick veneer wall from the foundation up: drainage, flashing, ties, thermal bridges, vapor and windows.',
    parts: [
      { h: 'Drainage and flashing', list: [
        'The water-resistive barrier on the outside face of the sheathing is the drainage plane and usually the air barrier. Everything outside it (brick, cavity, rigid insulation) is expected to get wet and drain.',
        'Through-wall flashing with weeps goes at the base of the cavity, just above the foundation ledge, and above openings.',
        'Steel lintels get flashing and end dams so cavity water is sent out through weeps instead of running off the ends into the wall.',
        'A drip edge or groove under a sill or coping breaks the path of water so it drips clear instead of running back into the wall.',
      ] },
      { h: 'Holding the veneer', p: [
        'Corrosion-resistant metal ties at regular spacing connect brick veneer across the cavity to the backup wall and carry wind loads.',
        'At each floor, the brick sits on a steel shelf angle with a soft, compressible joint and sealant below it, so the brick below can grow and the frame can deflect without crushing the veneer.',
      ] },
      { h: 'Heat and vapor', p: [
        'Steel studs conduct heat and form thermal bridges through cavity insulation, lowering the wall\'s effective R-value. Continuous insulation outside the studs fixes this. Thermal breaks (such as polyamide strips in aluminum frames) do the same for windows and balcony connections.',
        'In hot, humid climates moisture drives inward, so a vapor retarder, if used, goes toward the exterior side. Avoid impermeable interior finishes like vinyl wallcovering on exterior walls; they trap moisture and grow mold.',
      ] },
      { h: 'Windows and glass walls', p: [
        'Install windows shingle-lapped from the bottom up: sill flashing (sill pan), set the window, jamb flashing over the flanges, then head flashing over the jambs, with the barrier lapped over the head flashing.',
        'A curtain wall hangs from the floor edges and spans stories; a storefront sits in an opening, usually one story.',
      ] },
    ],
    takeaways: ['The WRB is the drainage plane; flash the cavity base and every opening, with end dams and weeps.', 'Ties hold veneer; soft joints under shelf angles.', 'Continuous insulation beats thermal bridges; in humid climates keep interior finishes permeable.'],
    quiz: [],
  },
  { // l7
    section: 'Integration of Building Materials & Systems', title: 'Roofs, joints and below grade', minutes: 13,
    intro: 'Roofs, movement joints and foundations each have their own ways to fail. This lesson covers roof slope and edges, sealant and movement, joints, slabs and below-grade water, firestopping, sound and wind uplift.',
    parts: [
      { h: 'Low-slope roofs', list: [
        'Tapered insulation creates slope to drains on a flat structural deck. Roof drop = distance × slope: 40 feet × 1/4 inch per foot = 10 inches.',
        'A cricket on the upslope side of a curb or chimney splits the water and sends it around to the drains.',
        'At a parapet, the membrane turns up as base flashing (at least 8 inches), covered by counterflashing or a termination bar; the air barrier must connect wall to roof.',
        'A coping caps the parapet and sheds water toward the roof, lapping both faces.',
      ] },
      { h: 'Movement', p: [
        'Thermal movement: ΔL = α × L × ΔT. A 20-foot aluminum mullion (α ≈ 0.0000128 in/in/°F) over 100°F moves about 0.31 inch.',
        'A ±25% sealant moves a quarter of its width: width = movement ÷ 0.25 (0.25 inch of movement needs a 1-inch joint).',
        'Clay brick grows, so it gets expansion joints; CMU and concrete shrink, so they get control or contraction joints; separately moving wings get a building separation joint. Slab control joints make a weak line so shrinkage cracks form where planned.',
      ] },
      { h: 'Below grade, fire, sound and wind', list: [
        'Under a slab on grade, a vapor retarder (often 10 to 15 mil) keeps ground moisture from ruining floor finishes.',
        'Waterproofing resists water under pressure; dampproofing only resists moisture where water drains away freely.',
        'Penetrations through rated walls need tested firestop systems.',
        'IIC rates impact noise through floors; STC rates airborne sound.',
        'In hurricane regions, a continuous load path of straps and anchors carries roof uplift to the foundation.',
        'The air barrier must be continuous across walls, roof, windows and foundation; check ceiling heights against ducts, pipes and sprinklers in the plenum.',
      ] },
    ],
    takeaways: ['Slope roofs to drains with tapered insulation and crickets; detail parapets and copings.', 'Size joints for movement; brick expands, concrete shrinks.', 'Vapor retarder under slabs, waterproofing under pressure, firestop penetrations, continuous load paths.'],
    quiz: [],
  },
  { // l8
    section: 'Construction Documentation', title: 'Reading and organizing drawings', minutes: 12,
    intro: 'Builders find information by convention. This lesson covers scales, sheet numbering, discipline letters, the common symbols and the types of drawings in a set.',
    parts: [
      { h: 'Scales', list: [
        '1/4" = 1\'-0": each inch is 4 feet (3 inches = 12 feet).',
        '1/8" = 1\'-0": each inch is 8 feet (2-1/2 inches = 20 feet).',
        '3" = 1\'-0": each inch is 4 inches (1-1/2 inches = 6 inches).',
        '1" = 20\' (engineering scale, site plans): 7.5 inches = 150 feet.',
      ] },
      { h: 'Sheets and symbols', p: [
        'Under the National CAD Standard, the discipline letter comes first (A architectural, S structural, M mechanical, E electrical, P plumbing, C civil), then the sheet type: 1 plans, 2 elevations, 3 sections, 4 large-scale views, 5 details, 6 schedules. A-501 holds architectural details.',
        'Grid bubbles name the column grid lines. A section marker shows the cut line, an arrow for the direction of view and the section number over its sheet. A detail callout gives the detail number and the sheet it is on.',
        'After issue, a change gets a revision cloud, a revision mark and an entry in the title block\'s revision list.',
      ] },
      { h: 'Kinds of drawings', list: [
        'Wall section: how the layers of an exterior wall stack up from foundation to roof.',
        'Exterior elevations: each facade\'s materials, openings and heights.',
        'Reflected ceiling plan: the ceiling as if seen in a mirror on the floor (types, heights, lights, diffusers).',
        'Interior elevations: casework, mounting heights and wall finishes.',
        'Enlarged plans: restrooms, stairs and kitchens at a larger scale.',
      ] },
    ],
    takeaways: ['Know the common scales and convert quickly.', 'Discipline letter + sheet type: A-501 = architectural details.', 'Grid bubbles, section markers, callouts and revision clouds.'],
    quiz: [],
  },
  { // l9
    section: 'Construction Documentation', title: 'Coordinated, permit-ready sets', minutes: 12,
    intro: 'A buildable set is complete, consistent and coordinated. This lesson covers what goes where, general sheets, schedules and notes, coordination with consultants, BIM and sealing for permit.',
    parts: [
      { h: 'What goes where', p: [
        'Under A201 the contract documents are complementary: what one requires is as binding as if all did. Drawings show size, location and quantity; specifications describe quality; general conditions (A201) set the parties\' duties (such as who secures the permit); bidding requirements tell bidders how and when to bid.',
        'Give each requirement one source (door sizes in the door schedule, for example) so a change in one place is reflected everywhere.',
      ] },
      { h: 'Sheets, schedules and notes', list: [
        'Cover and general sheets: sheet index, project directory, code analysis summary, abbreviations and symbols.',
        'Life safety plan: occupant loads, exit paths and travel distances, rated walls and exit widths.',
        'Door schedule: each door\'s size, type, rating and hardware set. Room finish schedule: floor, base, walls and ceiling. Wall type legend: studs, layers, insulation, fire rating, STC and tested assembly.',
        'Keynotes link short tags to standard notes, often tied to spec sections; general notes stay short and in a consistent place.',
        'Commercial plans dimension partitions to face of stud (or masonry) and grid lines.',
        'A wall section shows every layer in order, flashing at the base, lintels and shelf angles, heights and references.',
      ] },
      { h: 'Coordination and sealing', p: [
        'Cross-check consultant sheets: a floor drain shown in a carpeted room is a coordination failure that becomes a change order.',
        'In BIM, level of development (LOD) tells others how complete and reliable a model element is.',
        'A permit set goes to the building department, often before bidding documents are final, and must show everything reviewers need. In Florida it must bear the seal of the Florida-licensed architect in responsible charge.',
      ] },
    ],
    takeaways: ['Documents are complementary; give each fact one home.', 'Life safety plans, schedules, legends and keynotes carry information efficiently.', 'Coordinate consultants; Florida permit sets are sealed by the architect in responsible charge.'],
    quiz: [],
  },
  { // l10
    section: 'Project Manual & Specifications', title: 'Specification methods and Division 01', minutes: 11,
    intro: 'Specifications describe quality and procedures. This lesson covers what\'s in the project manual, MasterFormat divisions, the ways to specify and what Division 01 does.',
    parts: [
      { h: 'The project manual', p: [
        'The project manual holds the written documents: bidding requirements, contract forms, conditions of the contract and the specifications. Drawings are bound separately.',
        'MasterFormat divisions include 03 Concrete, 05 Metals, 07 Thermal and Moisture Protection (for example 07 54 23 TPO Roofing), 08 Openings (08 71 00 Door Hardware) and 09 Finishes.',
      ] },
      { h: 'Ways to specify', list: [
        'Performance: states results and leaves the method to the contractor.',
        'Reference standard: points to a published standard, such as ASTM C94 for ready-mixed concrete.',
        'Closed proprietary: one product, no substitutions; usually avoided on public work, where bidding rules require competition.',
        'Open proprietary: names products and allows approved "or equal" substitutions.',
      ] },
      { h: 'Division 01 and section parts', p: [
        'Division 01, General Requirements, sets administrative and procedural rules for the whole project: submittals, quality control, temporary facilities, substitutions, allowances and closeout. Allowances are listed there, with the work covered in related sections.',
        'In a section, Part 1 General holds submittals, quality assurance and warranties (a roofing warranty goes in 07 54 23, Part 1); Part 3 Execution holds installation, tolerances and field quality control.',
      ] },
    ],
    takeaways: ['Project manual: bidding, contract forms, conditions, specs.', 'Performance, reference standard, open and closed proprietary.', 'Division 01 for project-wide rules; warranties in Part 1, tolerances in Part 3.'],
    quiz: [],
  },
  { // l11
    section: 'Codes & Regulations', title: 'Code checks in the details', minutes: 12,
    intro: 'Many code requirements live in the details. This lesson covers door ratings, safety glazing, stairs and guards, accessible dimensions and egress doors.',
    parts: [
      { h: 'Openings and glass', list: [
        'Doors in 2-hour exit enclosures and shafts need 1-1/2-hour ratings; in 1-hour enclosures, 1 hour; in 1-hour corridors, often 20 minutes.',
        'Safety glazing (tempered or laminated) goes in hazardous locations: doors, glass beside doors and near walking surfaces, and wet areas like showers.',
        'Egress doors must swing in the direction of exit travel when serving a room with 50 or more occupants (or a high-hazard area).',
      ] },
      { h: 'Stairs and guards', p: [
        'Commercial stairs: risers 7 inches maximum, treads 11 inches minimum. Fewest risers = floor-to-floor ÷ 7, rounded up: 144 ÷ 7 = 20.6 → 21; 160 ÷ 7 = 22.9 → 23. A straight run has one fewer tread than risers (23 risers, 22 treads).',
        'Handrails sit 34 to 38 inches above the nosings and extend 12 inches horizontally at the top. Guards are at least 42 inches high.',
      ] },
      { h: 'Accessible dimensions', list: [
        'Accessible routes are at least 36 inches clear, narrowing to 32 inches for short distances such as doors.',
        'A portion of a sales or service counter at least 36 inches long is no higher than 36 inches.',
      ] },
    ],
    takeaways: ['Door ratings follow the wall: 2-hour → 1-1/2-hour doors.', 'Risers = height ÷ 7 rounded up; treads = risers − 1; guards 42 inches.', 'Accessible routes 36 inches; counters 36 inches high.'],
    quiz: [],
  },
  { // l12
    section: 'Construction Cost Estimates', title: 'Take-offs and contingencies', minutes: 10,
    intro: 'At the end of documents, estimates come from measuring the drawings. This lesson covers quantity take-offs, unit costs, waste and how contingencies change.',
    parts: [
      { h: 'Measuring quantities', p: [
        'Concrete: length × width × thickness, in cubic feet, ÷ 27 for cubic yards. 100 × 50 × 4/12 = 1,667 cubic feet ÷ 27 ≈ 62 cubic yards.',
        'Cost = quantity × unit cost: 12,000 sq ft of partitions at $6.50 = $78,000.',
        'Add a waste factor: cutting, breakage and laps use more material than the net quantity.',
      ] },
      { h: 'Accuracy and contingency', p: [
        'Near the end of construction documents, a quantity take-off priced with unit costs is the most detailed and accurate estimate.',
        'Early estimates carry a larger design contingency for unknowns; it shrinks as drawings and specifications fill in.',
      ] },
      { h: 'Checking the estimate against the budget', list: [
        'Compare the take-off total with the owner\'s construction budget before bidding.',
        'If it is over, report it and offer choices: reduce scope, change materials or systems, or add alternates the owner can accept or drop at bid time.',
        'Escalate the estimate to the midpoint of construction when bidding is months away.',
      ] },
    ],
    takeaways: ['Cubic yards = cubic feet ÷ 27; cost = quantity × unit cost, plus waste.', 'Take-offs are most accurate at the end of CDs.', 'Design contingency shrinks as the design completes.'],
    quiz: [],
  },
];
