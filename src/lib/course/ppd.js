// Project Planning & Design (PPD): designing the building, its systems and its budget.
const S = (prompt, choices, answer, explain) => ({ type: 'single', prompt, choices, answer: [answer], explain });
const M = (prompt, choices, answer, explain) => ({ type: 'multi', prompt, choices, answer, explain });

export default [
  {
    section: 'Environmental Conditions & Context', title: 'Designing with climate and comfort', minutes: 13,
    intro: 'PPD asks you to turn site and climate information into design choices: how the building sits, how it is shaded, lit and ventilated, and how it uses less energy.',
    parts: [
      { h: 'Passive design', p: [
        'Passive strategies use the building itself before machines: orientation, shading, daylight, natural ventilation and thermal mass. A long, narrow building with its long sides facing north and south is easiest to shade and to daylight.',
        'Cross-ventilation needs openings on opposite sides with a clear path between them; stack ventilation lets warm air rise and leave through high openings while cooler air enters low.',
      ] },
      { h: 'Daylight', p: [
        'Daylight reaches roughly 1.5 to 2 times the window head height into a room through side windows, farther with light shelves or high clerestories. North light is even and glare-free; south light is strong but easy to control with overhangs and light shelves.',
      ] },
      { h: 'Thermal comfort', p: [
        'Comfort depends on air temperature, surface (radiant) temperature, humidity and air movement, plus what people wear and do. In humid climates, removing moisture is as important as lowering temperature.',
      ] },
      { h: 'Energy goals', list: [
        'Reduce loads first (envelope, shading, daylight), then use efficient systems, then add on-site renewables.',
        'Energy use intensity (EUI) is annual energy per square foot, used to compare buildings.',
        'Net-zero energy buildings produce as much energy on site in a year as they use.',
        'Rating systems such as LEED® and codes such as the Florida Building Code, Energy Conservation set targets.',
      ] },
    ],
    example: { title: 'How deep can daylight reach?', steps: [
      'A classroom has window heads at 9 feet.',
      'Useful daylight from side windows reaches about 1.5 to 2 × 9 = 13.5 to 18 feet into the room.',
      'A 30-foot-deep room needs a light shelf, clerestory or skylights to light the back half.',
    ] },
    takeaways: [
      'Reduce loads first, then use efficient systems, then renewables.',
      'Long sides facing north and south are easiest to shade and daylight.',
      'Side daylight reaches about 1.5 to 2 times the window head height.',
      'In humid climates, control moisture as well as temperature.',
    ],
    quiz: [
      S('What is the right order for an energy-efficient design strategy?', ['Add solar panels, then improve the envelope', 'Reduce loads, use efficient systems, then add renewables', 'Install the biggest HVAC system possible', 'Rely only on mechanical cooling'], 1, 'Cutting loads first makes systems smaller and renewables go further.'),
      S('Window heads are 8 feet above the floor. About how deep will useful side daylight reach?', ['4 to 6 feet', '12 to 16 feet', '24 to 30 feet', '40 feet'], 1, '1.5 to 2 times the head height: 12 to 16 feet.'),
      M('Which help natural ventilation? Select all that apply.', ['Openings on opposite sides of a room', 'High openings to let warm air out', 'Deep floor plates with no openings', 'An unobstructed path for air'], [0, 1, 3], 'Cross and stack ventilation need openings on opposite sides or at different heights and a clear path. Deep sealed plans block air.'),
      S('Which measure compares the energy use of buildings of different sizes?', ['R-value', 'Energy use intensity (EUI)', 'SHGC', 'FAR'], 1, 'EUI is annual energy use per square foot, so buildings of different sizes can be compared.'),
    ],
  },
  {
    section: 'Codes & Regulations', title: 'Building codes for design', minutes: 15,
    intro: 'The building code decides how big a building can be, what it can be made of, and how people get out in a fire. In Florida, the Florida Building Code is based on the International Building Code with state changes.',
    parts: [
      { h: 'Occupancy classification', p: [
        'Every space is classified by use: Assembly (A), Business (B), Educational (E), Factory (F), High-hazard (H), Institutional (I), Mercantile (M), Residential (R), Storage (S) and Utility (U). Occupancy drives fire protection, egress, height and area rules.',
        'Buildings with more than one occupancy are handled as accessory, nonseparated or separated mixed uses.',
      ] },
      { h: 'Construction type', p: [
        'Types I and II are noncombustible (I is most fire-resistive). Type III has noncombustible exterior walls with any interior. Type IV is heavy or mass timber. Type V allows any material, including wood framing. Types I, II, III and V each have "A" (protected) and "B" (unprotected) versions; Type IV has its own subtypes (IV-A, IV-B and IV-C for mass timber, and IV-HT for heavy timber).',
        'Allowable height and area come from tables by occupancy and construction type. Automatic sprinklers and open frontage can increase them.',
      ] },
      { h: 'Means of egress', list: [
        'Occupant load = floor area ÷ the code\'s occupant load factor for the use (for example about 150 gross sq ft per person for business areas, and as little as 5 to 15 net sq ft per person for assembly, depending on whether people stand, sit in chairs or sit at tables).',
        'The number of exits rises with occupant load: generally 2 exits for up to 500 people, 3 for 501 to 1,000, and 4 above that.',
        'When two exits are required, they must be separated by at least half the diagonal of the space (one third if the building is fully sprinklered).',
        'Travel distance to an exit and dead-end corridor length are limited, with longer limits in sprinklered buildings.',
        'Egress width is figured from occupant load, with minimum widths for doors, stairs and corridors.',
      ] },
      { h: 'Accessibility', p: [
        'Federal ADA Standards and the Florida Building Code, Accessibility require accessible routes, entrances, restrooms, parking and features. Key numbers: a 60-inch turning circle, 36-inch minimum route width, 32-inch clear door openings, and ramps no steeper than 1:12 with rises of 30 inches or less between landings.',
      ] },
    ],
    example: { title: 'Two exits, how far apart?', steps: [
      'A room is 60 feet by 80 feet and needs two exits. Its diagonal is √(60² + 80²) = 100 feet.',
      'Unsprinklered: exits must be at least 100 ÷ 2 = 50 feet apart.',
      'With automatic sprinklers throughout: at least 100 ÷ 3 ≈ 33 feet apart.',
    ] },
    takeaways: [
      'Occupancy + construction type set allowable height and area; sprinklers can increase them.',
      'Type I is most fire-resistive; Type V allows wood framing.',
      'Two exits: separated by half the diagonal (one third if sprinklered).',
      'Accessible routes: 36 inches wide, 60-inch turning circle, ramps 1:12 maximum.',
    ],
    quiz: [
      S('A space 90 feet by 120 feet in an unsprinklered building needs two exits. What is the minimum distance between them?', ['50 feet', '60 feet', '75 feet', '150 feet'], 2, 'Diagonal = √(90² + 120²) = 150 feet. Half of that is 75 feet.'),
      S('Which construction type allows wood stud framing throughout?', ['Type I-A', 'Type II-B', 'Type IV', 'Type V-B'], 3, 'Type V allows any material permitted by code, including wood framing.'),
      M('Which can increase a building\'s allowable height or area? Select all that apply.', ['An automatic sprinkler system throughout', 'Open frontage on the building\'s perimeter', 'A more fire-resistive construction type', 'Adding more parking'], [0, 1, 2], 'Sprinklers, frontage and better construction types raise allowable size. Parking has nothing to do with it.'),
      S('What is the steepest slope allowed for an accessible ramp?', ['1:8', '1:10', '1:12', '1:20'], 2, 'Accessible ramps may be no steeper than 1:12 (8.33%). Walks steeper than 1:20 are treated as ramps.'),
    ],
  },
  {
    section: 'Building Systems, Materials, & Assemblies', title: 'Choosing structure, envelope and systems', minutes: 15,
    intro: 'PPD expects you to choose structural, envelope and building-service systems that fit the program, climate, code and budget, and to know how they affect each other.',
    parts: [
      { h: 'Structural systems', list: [
        'Wood and light-gauge steel framing: economical for low-rise housing and small buildings.',
        'Load-bearing masonry: durable and fire-resistant; common in Florida for hurricane resistance.',
        'Steel frame: long spans, fast erection, needs fireproofing in most construction types.',
        'Concrete (cast-in-place, precast, post-tensioned): fire-resistant, good for flat slabs and short floor-to-floor heights.',
        'Spans: wood joists up to about 20 feet, steel bar joists 30 to 60 feet or more, post-tensioned slabs about 25 to 35 feet.',
      ] },
      { h: 'Lateral loads', p: [
        'Wind and earthquakes push sideways on buildings. Shear walls, braced frames and moment frames resist lateral loads. In Florida, wind governs: the code sets design wind speeds, and coastal areas need impact-resistant windows or shutters in wind-borne debris regions.',
      ] },
      { h: 'The envelope', p: [
        'The envelope separates inside from outside with four control layers: water, air, vapor and thermal. Rain screens drain water that gets past the cladding. Continuous insulation outside the framing avoids thermal bridges.',
        'In hot-humid climates, vapor moves from the humid outside toward the cool, air-conditioned inside, so avoid vapor-tight layers (like vinyl wallcovering) on the inside face of exterior walls.',
      ] },
      { h: 'Building services', list: [
        'HVAC: all-air systems (VAV), air-water and all-water systems (fan coils), and packaged rooftop units. Dedicated outdoor air systems handle ventilation and humidity separately.',
        'Plumbing: fixture counts come from the plumbing code based on occupant load.',
        'Electrical and lighting: lighting power density limits come from the energy code.',
        'Vertical transportation: hydraulic elevators for low-rise, traction for taller buildings.',
      ] },
    ],
    example: { title: 'Picking a structure for a two-story school wing', steps: [
      'Classrooms need about 30-foot clear spans and a durable, hurricane-resistant shell.',
      'Load-bearing CMU walls with steel bar joists span 30 feet easily and resist wind and impact.',
      'Wood framing would need more interior supports and may not meet the construction type; a steel frame would need fireproofing and separate exterior walls.',
    ] },
    takeaways: [
      'Shear walls, braced frames and moment frames resist lateral loads; wind governs in Florida.',
      'The envelope controls water, air, vapor and heat.',
      'In hot-humid climates, avoid vapor barriers on the inside face of exterior walls.',
      'Use continuous insulation to avoid thermal bridging.',
    ],
    quiz: [
      S('In a hot-humid climate, where should a wall\'s vapor-retarding layer generally NOT go?', ['On the outside face of the sheathing', 'On the inside face of the exterior wall', 'Within the roof membrane', 'Under the slab'], 1, 'Moisture moves from the humid outside toward the cool inside. An interior vapor barrier traps it inside the wall.'),
      S('Which system resists lateral wind loads?', ['Bar joists', 'Shear walls', 'Gypsum ceilings', 'Spread footings alone'], 1, 'Shear walls (along with braced and moment frames) resist sideways loads from wind and earthquakes.'),
      M('Which are the control layers of a building envelope? Select all that apply.', ['Water', 'Air', 'Vapor', 'Thermal'], [0, 1, 2, 3], 'All four: water, air, vapor and thermal control.'),
      S('Which elevator type suits a three-story building best?', ['Traction elevator', 'Hydraulic elevator', 'Escalator only', 'Freight lift only'], 1, 'Hydraulic elevators are economical for low-rise buildings; traction elevators serve taller buildings.'),
    ],
  },
  {
    section: 'Project Integration of Program & Systems', title: 'Putting the design together', minutes: 14,
    intro: 'This is the largest section of PPD. It tests whether you can combine program, code, structure, envelope and systems into one design that works, the way you will on real projects.',
    parts: [
      { h: 'Integrating early', p: [
        'Decisions made in schematic design are the cheapest to change and have the biggest effect on cost and performance. Bring in structural and MEP consultants early to size the structural grid, floor-to-floor height, mechanical rooms and shafts.',
      ] },
      { h: 'Floor-to-floor height', p: [
        'Floor-to-floor height = finished ceiling height + ceiling plenum (ductwork, lights, sprinklers) + structure depth + floor finish. Deeper structure or larger ducts raise the building, which raises facade cost and may hit height limits.',
      ] },
      { h: 'Structural grid and planning module', p: [
        'Choose a structural grid that suits the program: parking (about 30 by 60 feet clear for drive aisles and stalls), offices (about 30 feet), classrooms or labs on a planning module. Align columns with walls where possible, and keep large-span spaces like gyms and auditoriums on the top floor or in separate wings.',
      ] },
      { h: 'Space for services', list: [
        'Mechanical rooms and electrical rooms near the loads they serve.',
        'Vertical shafts stacked floor to floor for ducts, pipes and risers.',
        'Restrooms stacked to share plumbing walls.',
        'Rooftop equipment screened and placed over structure that can carry it.',
      ] },
    ],
    example: { title: 'Floor-to-floor for an office', steps: [
      'Ceiling height 9\'-0". Plenum for ducts, lights and sprinklers: 2\'-6". Structure (steel beams and deck): 2\'-6". Floor finish: about 1".',
      'Total: 9\'-0" + 2\'-6" + 2\'-6" + 1" ≈ 14\'-1".',
      'Choosing a shallower post-tensioned slab (about 9") could cut floor-to-floor to about 12\'-4", saving facade and height.',
    ] },
    takeaways: [
      'Early decisions have the biggest effect on cost and performance.',
      'Floor-to-floor = ceiling height + plenum + structure + finish.',
      'Stack shafts and restrooms; put long-span spaces on top or in separate wings.',
      'Bring consultants in during schematic design to size grids, rooms and shafts.',
    ],
    quiz: [
      S('Ceiling height 9\'-0", plenum 3\'-0", structure 2\'-0", finish negligible. What is the floor-to-floor height?', ['11\'-0"', '12\'-0"', '14\'-0"', '15\'-0"'], 2, 'Floor-to-floor = ceiling + plenum + structure + finish = 9\' + 3\' + 2\' = 14\'-0".'),
      S('Where is the best place for a gymnasium with long-span roof trusses in a multistory school?', ['On the ground floor under classrooms', 'On the top floor or in a separate wing', 'In the basement under the library', 'Anywhere, span doesn\'t matter'], 1, 'Long spans can\'t easily carry floors above. Put them on top or in their own wing.'),
      M('Which make MEP systems easier to fit and maintain? Select all that apply.', ['Stacking shafts floor to floor', 'Stacking restrooms to share plumbing walls', 'Placing mechanical rooms far from the spaces they serve', 'Allowing enough ceiling plenum depth'], [0, 1, 3], 'Stacked shafts and restrooms and enough plenum make systems efficient. Distant mechanical rooms lengthen ducts and pipes.'),
      S('When do design decisions have the most influence on a building\'s cost and performance?', ['During construction', 'During schematic design', 'At closeout', 'During bidding'], 1, 'Early design sets the form, structure and systems; changes are cheapest then.'),
    ],
  },
  {
    section: 'Project Costs & Budgeting', title: 'Designing to a budget', minutes: 11,
    intro: 'The owner\'s total project budget includes much more than construction. PPD tests whether you can estimate cost, keep the design within budget, and make smart trade-offs.',
    parts: [
      { h: 'What the owner pays for', p: [
        'Total project cost = construction cost (the cost of the work) + soft costs: design fees, permits and fees, land, financing, furniture and equipment, testing, owner\'s contingency and moving costs. Soft costs often add 25% to 40% to construction cost.',
      ] },
      { h: 'Estimating as the design develops', list: [
        'Programming and early schematic: cost per square foot of similar buildings.',
        'Schematic and design development: systems (assemblies) estimates, such as cost per square foot of wall or roof.',
        'Construction documents: quantity take-offs and unit prices, item by item.',
        'Add design and estimating contingency early (often 10% or more), shrinking as the design is set.',
      ] },
      { h: 'Adjusting estimates', p: [
        'Adjust historical costs for location (city cost indexes) and time (escalation to the midpoint of construction). Building shape matters: a more compact plan has less exterior wall per square foot of floor, which lowers cost.',
      ] },
      { h: 'Life-cycle cost', p: [
        'Life-cycle cost adds first cost, energy, maintenance and replacements over the building\'s life, in present-value dollars. A higher first cost (better glass, a more efficient chiller) can be cheaper over time.',
      ] },
    ],
    example: { title: 'Construction budget from a total budget', steps: [
      'The owner has $10 million total. Soft costs are expected to be 30% of construction cost.',
      'Construction + 0.30 × construction = $10,000,000, so construction = $10,000,000 ÷ 1.30 ≈ $7.69 million.',
      'At $350 per square foot, that buys about 22,000 sq ft of building.',
    ] },
    takeaways: [
      'Total project cost = construction + soft costs (fees, permits, FF&E, contingency, financing, land).',
      'Estimates move from cost per sq ft, to systems, to detailed take-offs as design advances.',
      'Escalate costs to the midpoint of construction and adjust for location.',
      'Compact shapes reduce exterior wall area and cost.',
    ],
    quiz: [
      S('An owner\'s total budget is $13 million and soft costs are expected to be 30% of construction cost. What is the construction budget?', ['$9.1 million', '$10 million', '$11.7 million', '$16.9 million'], 1, 'Construction × 1.30 = $13 million, so construction = $10 million.'),
      M('Which are soft costs? Select all that apply.', ['Design fees', 'Permit fees', 'Furniture and equipment', 'Concrete for the foundations'], [0, 1, 2], 'Fees, permits and FF&E are soft costs. Foundation concrete is part of the cost of the work.'),
      S('Which estimating method fits best during design development?', ['Cost per square foot of similar buildings only', 'Systems (assemblies) estimate', 'The contractor\'s final bid', 'No estimate is needed until bidding'], 1, 'Systems estimates price assemblies like walls and roofs once they are defined in design development.'),
      S('Which building shape usually has the lowest exterior wall cost per square foot of floor?', ['A long thin bar', 'An L-shape with many corners', 'A compact, nearly square plan', 'A star-shaped plan'], 2, 'Compact plans enclose the most floor with the least perimeter wall.'),
    ],
  },
];
