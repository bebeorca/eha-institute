export const departments = [
  'ALL DEPARTMENTS',
  'Executive & Directorate',
  'Epidemiology & Field Research',
  'Genomics & Laboratory Division',
  'Communications & Public Education',
  'Operations & Field Logistics'
];

export const leaders = [
  { id: 1, name: 'Lorem', role: 'Executive Director', dept: 'Executive & Directorate', image: null },
  { id: 2, name: 'Lorem', role: 'Chief Scientific Officer', dept: 'Executive & Directorate', image: null },
  { id: 3, name: 'Lorem', role: 'Head of Field Research', dept: 'Epidemiology & Field Research', image: null },
  { id: 4, name: 'Lorem', role: 'Director of Laboratory Sciences', dept: 'Genomics & Laboratory Division', image: null },
  { id: 5, name: 'Lorem', role: 'Director of Policy & Outreach', dept: 'Communications & Public Education', image: null },
  { id: 6, name: 'Lorem', role: 'Director of Global Operations', dept: 'Operations & Field Logistics', image: null }
];

export const staffList = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: 'Lorem',
  role: `Staff Researcher #${i + 1}`,
  dept: departments[(i % (departments.length - 1)) + 1],
  image: null
}));

