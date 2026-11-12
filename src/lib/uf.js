// Resources on and around the University of Florida campus for School of Architecture students working
// toward a Florida license. Each one links to where it came from; checked November 12, 2026. This app is
// not affiliated with or endorsed by the University of Florida.

export const UF_RESOURCES = [
  {
    id: 'soa', group: 'School of Architecture', title: 'UF School of Architecture (College of Design, Construction and Planning)',
    detail: 'Your advisors and faculty for degree questions, the M.Arch path that meets Florida\'s education rule, and IPAL. Ask the school who its NCARB Licensing Advisor is; NCARB keeps a licensing advisor at accredited programs to help students with the AXP and ARE.',
    where: '1480 Inner Road, Gainesville, FL 32611 · (352) 392-4836', url: 'https://dcp.ufl.edu/architecture/',
  },
  {
    id: 'ipal', group: 'School of Architecture', title: 'IPAL at the UF CityLabs',
    detail: 'NCARB\'s Integrated Path to Architectural Licensure lets you work on the AXP and ARE while you finish your degree. UF\'s CityLabs are approved; CityLab-Orlando had the first IPAL graduates in the country, licensed weeks after commencement. The track adds five 1-credit seminars: Architects and their Collaborators, The Construction Site, Nature of Professions, Ethics / Professional Behavior and International Practice.',
    where: 'CityLab-Orlando and UF School of Architecture', url: 'https://dcp.ufl.edu/architecture/integrated-path-to-architectural-licensure/',
  },
  {
    id: 'afa', group: 'Study spaces and books', title: 'Architecture & Fine Arts Library (AFA)',
    detail: 'UF Libraries\' design library. With your UF login you can use Building Types Online, BuildingGreen, DETAIL Inspiration and the Avery Index to Architectural Periodicals, which help with PPD and PDD topics like building types, sustainability and detailing. Ask the reference desk about ARE study guides in the UF catalog.',
    where: '201 Fine Arts A, Gainesville · (352) 273-2805', url: 'https://afa.uflib.ufl.edu/',
  },
  {
    id: 'aias', group: 'Student groups', title: 'UF AIAS, NOMAS and Alpha Rho Chi',
    detail: 'The UF chapters of the American Institute of Architecture Students and the National Organization of Minority Architecture Students, and the Apollodorus Chapter of Alpha Rho Chi, are good places to find study partners and people a few divisions ahead of you.',
    where: 'School of Architecture student organizations', url: 'https://dcp.ufl.edu/architecture/student-organizations',
  },
  {
    id: 'career', group: 'Jobs and AXP hours', title: 'UF Career Connections Center',
    detail: 'Resume and portfolio reviews, career fairs and CareerHub job listings, for finding a firm where a licensed architect can supervise your AXP hours.',
    where: 'J. Wayne Reitz Union · (352) 392-1601', url: 'https://career.ufl.edu/',
  },
  {
    id: 'aiafl', group: 'Jobs and AXP hours', title: 'AIA Florida for emerging professionals',
    detail: 'AIA Florida\'s ARE Scholarship can cover up to two ARE seat credits, and eligible Associate AIA members get AIA PrepARE\'s free Exam Readiness Pack with practice exams for all six divisions.',
    where: 'AIA Florida', url: 'https://www.aiafla.org/Emerging-Professionals.cfm',
  },
];

export const UF_GROUPS = [...new Set(UF_RESOURCES.map((r) => r.group))];
