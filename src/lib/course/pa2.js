// PA lessons 5 to 12. Each teaches the practice and exam questions listed for it in units.js.
export default [
  { // l5
    section: 'Environmental & Contextual Conditions', title: 'Sun, climate and microclimate', minutes: 12,
    intro: 'Where the sun is, and how air and surfaces behave, shapes where a building goes and which way it faces. This lesson covers sun angles, shading by orientation, trees, slopes and the urban heat island.',
    parts: [
      { h: 'Sun angles', p: [
        'Noon sun altitude = 90° − latitude + the sun\'s declination (+23.45° at the summer solstice, 0° at the equinoxes, −23.45° at the winter solstice). In Gainesville (29.6° N) the winter noon sun is about 90 − 29.6 − 23.45 ≈ 37°, and the summer noon sun about 84°.',
        'In the northern hemisphere the sun is in the southern sky at noon, so glass for passive solar heating faces south.',
      ] },
      { h: 'Facades and trees', p: [
        'Afternoon sun comes from the west at a low angle that overhangs can\'t block, so the west facade needs the most protection (vertical shading, trees or less glass). The south facade is easy to shade with overhangs.',
        'Deciduous trees on the south and west shade the building in summer and drop their leaves to let winter sun through.',
      ] },
      { h: 'Slopes, air and heat', list: [
        'North-facing slopes tilt away from the sun and get the least sun; south-facing slopes get the most.',
        'Cold air is heavy: on still nights it drains downhill and pools in low spots and valleys (frost pockets).',
        'Hard, dark surfaces make cities hotter (the urban heat island). Reflective roofs, green roofs, shade trees and light paving reduce it; dark asphalt plazas make it worse.',
      ] },
    ],
    takeaways: ['Noon altitude = 90 − latitude ± declination.', 'Shade the west most; south is easy to shade; deciduous trees on south and west.', 'North slopes are coolest; cold air pools low; reflective and green surfaces cut heat islands.'],
    quiz: [],
  },
  { // l6
    section: 'Environmental & Contextual Conditions', title: 'Ground, water and floods', minutes: 12,
    intro: 'What lies under and around a site can decide whether and where to build. This lesson covers Florida\'s limestone, groundwater, soil bearing and FEMA flood zones.',
    parts: [
      { h: 'Soils and rock', p: [
        'Much of Florida sits on limestone that dissolves over time, forming voids and sinkholes (karst). Borings, and sometimes ground-penetrating radar, check for them before a building is placed.',
        'The IBC\'s presumptive bearing values rank materials from crystalline bedrock (about 12,000 psf), to sandy gravel and gravel (3,000 psf), to sand and silty sand (2,000 psf), to clay (1,500 psf). Dense, well-graded gravel is a good base for shallow footings; peat and organic soils need special study.',
      ] },
      { h: 'Groundwater', p: [
        'A high water table (say 3 feet below grade) makes basements costly and wet, leaves little room for stormwater to soak in, and favors raised finished floors. Don\'t put the main mechanical room below grade.',
      ] },
      { h: 'Flood zones', list: [
        'Zone VE: coastal high-hazard area with wave action.',
        'Zone AE: the 1% annual chance (100-year) floodplain with base flood elevations set.',
        'Zone A: the 1% annual chance floodplain without base flood elevations.',
        'Shaded Zone X: the 0.2% annual chance (500-year) area. Unshaded X is minimal hazard.',
        'The safest building area is on higher ground in zone X, away from wetland buffers and protected trees.',
      ] },
    ],
    takeaways: ['Check Florida sites for karst.', 'Bearing: bedrock > gravel > sand > clay.', 'Know V, AE, A and X zones; build on high ground out of the floodplain.'],
    quiz: [],
  },
  { // l7
    section: 'Codes & Regulations', title: 'Building codes and accessibility on the site', minutes: 12,
    intro: 'The building code and accessibility rules affect a project from the first site study. This lesson covers Florida\'s code, occupancy groups, ramps, accessible parking and fire separation distance.',
    parts: [
      { h: 'Florida\'s code and occupancy', p: [
        'The Florida Building Code adopts the International Codes (such as the IBC) with Florida changes, including high-velocity hurricane zone provisions in Miami-Dade and Broward.',
        'Occupancy groups: restaurants seating 50 or more are A-2; libraries are A-3; offices and outpatient clinics are B; schools through 12th grade are E; stores are M; hotels are R-1.',
      ] },
      { h: 'Accessible routes and parking', p: [
        'Under the 2010 ADA Standards a walking surface steeper than 1:20 is a ramp, and ramps may be no steeper than 1:12, with at most 30 inches of rise per run. A 30-inch rise at 1:12 needs 30 × 12 = 360 inches, or 30 feet, of ramp.',
        'Accessible parking follows a table: for example, 101 to 150 spaces need 5 accessible spaces, and one of every six accessible spaces must be van accessible.',
      ] },
      { h: 'Fire separation distance', p: [
        'Fire separation distance is measured from the building face to the nearest interior lot line, the centerline of a street, or an imaginary line between two buildings on the same lot. It sets how much wall opening and fire rating is allowed.',
      ] },
    ],
    takeaways: ['FBC = I-Codes plus Florida changes.', 'Ramps 1:12 max with 30 inches rise per run; accessible parking by table.', 'Fire separation distance runs to the lot line, street centerline or an imaginary line.'],
    quiz: [],
  },
  { // l8
    section: 'Codes & Regulations', title: 'Zoning, easements, coasts and history', minutes: 10,
    intro: 'Beyond the building code, other rules govern land. This lesson separates zoning from the building code and covers easements, Florida\'s coastal permits and historic preservation.',
    parts: [
      { h: 'Zoning versus building code', p: [
        'Zoning controls land use, density, height, setbacks, lot coverage and parking. The building code controls how the building is built safely: fire ratings, exits, stairs and sprinklers.',
      ] },
      { h: 'Easements and coasts', p: [
        'An easement gives someone a right to use part of a property for a specific purpose, such as a utility line or access. You generally can\'t build in a way that blocks it.',
        'Construction seaward of Florida\'s Coastal Construction Control Line needs a permit from the Florida Department of Environmental Protection, in addition to local permits.',
      ] },
      { h: 'Historic buildings', p: [
        'Federal historic tax credits require a certified rehabilitation that meets the Secretary of the Interior\'s Standards for Rehabilitation, reviewed by the State Historic Preservation Office and the National Park Service.',
      ] },
    ],
    takeaways: ['Zoning: use, height, setbacks, parking. Code: construction safety.', 'Don\'t build over easements; the CCCL needs a state permit.', 'Historic tax credits follow the Secretary of the Interior\'s Standards.'],
    quiz: [],
  },
  { // l9
    section: 'Site Analysis & Programming', title: 'Site arithmetic', minutes: 13,
    intro: 'Site analysis is full of quick calculations. This lesson covers slopes and contours, acres, floor area ratio and coverage, parking and the buildable area.',
    parts: [
      { h: 'Slopes and contours', p: [
        'Slope = rise ÷ run × 100. 5 feet over 100 feet is 5%; from elevation 104 to 100 over 40 feet is 10%.',
        'Contour lines close together mean steep ground; far apart, gentle. A closed contour with lower elevations inside marks a low spot where water collects.',
      ] },
      { h: 'Area and density', p: [
        'One acre is 43,560 sq ft: 2.5 acres = 108,900 sq ft; 3.0 acres = 130,680 sq ft.',
        'Allowed floor area = lot area × FAR. 20,000 × 2.5 = 50,000 sq ft; 130,680 × 0.5 = 65,340 sq ft.',
        'Largest footprint = lot area × coverage. To use the full FAR: stories = floor area ÷ footprint. On 50,000 sq ft with FAR 3.0 and 50% coverage: 150,000 ÷ 25,000 = 6 stories.',
      ] },
      { h: 'Parking and the buildable area', p: [
        'Parking = floor area ÷ the area per space. 60,000 ÷ 300 = 200 spaces; 27,333 ÷ 300 = 91.1, rounded up to 92.',
        'The buildable area is what remains after front, side and rear setbacks and any easements are taken out. Where an easement is wider than the setback beside it, the easement governs.',
      ] },
    ],
    takeaways: ['Slope = rise ÷ run; bunched contours are steep.', '1 acre = 43,560 sq ft; floor area = lot × FAR; stories = floor area ÷ footprint.', 'Parking = area ÷ ratio (round up); buildable area excludes setbacks and easements.'],
    quiz: [],
  },
  { // l10
    section: 'Site Analysis & Programming', title: 'Placing the building and handling water', minutes: 12,
    intro: 'Good siting uses the land instead of fighting it. This lesson covers orientation, grading, stormwater, driveways, and the surveys and reports that inform the site plan.',
    parts: [
      { h: 'Orientation and grading', p: [
        'In a hot, humid climate, set a long, narrow building with its long axis east-west, so the big walls face north and south where shading is easy.',
        'On a slope, run the long side along (parallel to) the contours so each floor stays near one elevation and less earth is moved.',
      ] },
      { h: 'Stormwater and access', list: [
        'A retention pond keeps water to soak in or evaporate; a detention pond stores it during a storm and releases it slowly.',
        'Pervious paving, bioswales, rain gardens and fewer spaces reduce runoff; piping it all to the street moves the problem downstream.',
        'Put the main driveway as far from street intersections as practical.',
        'Use the site\'s zones: buildings on high, flat ground; ponds in the floodplain where allowed; only passive uses in wetland buffers; paths but no paving under protected trees.',
      ] },
      { h: 'Information for the site plan', p: [
        'A geotechnical report gives soil types from borings, groundwater depth, allowable bearing pressure and foundation recommendations (not zoning limits).',
        'An ALTA/NSPS land title survey shows boundaries, easements of record, improvements and encroachments for lenders and title insurers.',
      ] },
    ],
    takeaways: ['Long axis east-west in hot climates; along the contours on slopes.', 'Retention keeps water, detention releases it; reduce runoff at the source.', 'Geotech report for soils; ALTA survey for boundaries and easements.'],
    quiz: [],
  },
  { // l11
    section: 'Building Analysis & Programming', title: 'Program arithmetic and diagrams', minutes: 12,
    intro: 'A program turns needs into numbers and relationships. This lesson covers net and gross area, occupant loads, the kinds of programming information and the diagrams that follow.',
    parts: [
      { h: 'Net and gross', p: [
        'Net assignable area is space assigned to a use, like offices and classrooms. Corridors, stairs, restrooms, walls and mechanical rooms are in the gross area but not assignable.',
        'Efficiency = net ÷ gross (28,000 ÷ 40,000 = 70%). Gross = net ÷ efficiency (18,000 ÷ 0.72 = 25,000; 20,500 ÷ 0.75 ≈ 27,333). A gross-to-net ratio multiplies instead: 42,000 × 1.4 = 58,800.',
        'Occupant load = area ÷ load factor: 15,000 gross sq ft of business at 150 = 100; 1,800 net sq ft of tables and chairs at 15 = 120.',
      ] },
      { h: 'Kinds of information', p: [
        'In the problem-seeking method, programming runs: establish goals, collect and analyze facts, uncover and test concepts, determine needs, state the problem. "The library should feel welcoming to teenagers" is a goal.',
        'For each space the program lists its net area, users, adjacencies and special requirements.',
      ] },
      { h: 'Diagrams', list: [
        'Adjacency matrix: rates how closely each pair of spaces must connect.',
        'Bubble diagram: shows which spaces need to be next to or near each other.',
        'Stacking diagram: assigns departments to floors.',
        'Blocking diagram: departments drawn to scale on one floor plate.',
      ] },
    ],
    takeaways: ['Efficiency = net ÷ gross; gross = net ÷ efficiency.', 'Goals, facts, concepts, needs, problem.', 'Matrix → bubbles → stacking → blocking.'],
    quiz: [],
  },
  { // l12
    section: 'Building Analysis & Programming', title: 'Existing buildings and long-term needs', minutes: 12,
    intro: 'Programming also asks whether an existing building fits, and how the building will change. This lesson covers pre-design studies, gathering information, adaptability and balancing the program with the budget.',
    parts: [
      { h: 'Studying an existing building', list: [
        'Can the structure carry the new loads?',
        'Hazardous materials: buildings of the 1960s often hide asbestos and lead paint, so a hazardous materials survey comes first.',
        'Code: a change of occupancy (a warehouse becoming a restaurant) can require upgrades to exits, fire protection and accessibility under the Florida Building Code, Existing Building.',
        'As-built conditions: a 3D laser scan turned into measured drawings is more reliable than old drawings.',
        'A feasibility study compares reuse with new construction for fit, cost and schedule.',
      ] },
      { h: 'Gathering information', p: [
        'Observe how spaces are used, interview users, hold workshops and survey space use. Benchmarking compares the program with similar recent buildings (for example area per courtroom) to check it is realistic.',
        'Program requirements go beyond room areas: budget, schedule, sustainability and performance goals, security and technology needs.',
      ] },
      { h: 'Planning for change and budget', p: [
        'Regular column grids, generous floor-to-floor heights and accessible service routes make later change easier; interior bearing walls lock the layout in. Plan for growth with expansion zones and structure sized for additions.',
        'Universal design aims for spaces everyone can use the same way, such as a level main entrance.',
        'If the budget can\'t cover the program, show the owner options to balance scope, quality and budget, and let the owner decide.',
      ] },
    ],
    takeaways: ['Check structure, hazardous materials and code before reuse.', 'Observe, interview and benchmark; record budget and goals too.', 'Design for change and for everyone; the owner decides scope versus budget.'],
    quiz: [],
  },
];
