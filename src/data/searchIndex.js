import { writable } from 'svelte/store';
import { sitePages } from './pagesData.js';
import { allPublications } from './publicationsData.js';
import { allNews } from './newsData.js';
import { careerPrograms } from './careerData.js';
import { leaders, staffList } from './staffData.js';

// Global shared query store so Navbar and SearchResults stay in sync
export const globalSearchQuery = writable('');

// Auto-map publications into searchable schema
const mappedPublications = allPublications.map(pub => ({
  id: `pub-${pub.id}`,
  category: 'Publications',
  type: pub.category,
  title: pub.title,
  desc: pub.excerpt,
  url: '#publications',
  meta: `${pub.authors} • DOI: ${pub.doi} • ${pub.year}`,
  tags: [pub.title, pub.category, pub.authors, pub.journal, pub.year]
}));

// Auto-map news into searchable schema
const mappedNews = allNews.map(item => ({
  id: `news-${item.id}`,
  category: 'News',
  type: item.category,
  title: item.title,
  desc: item.excerpt,
  url: '#news',
  meta: `${item.date} • ${item.author}`,
  tags: [item.title, item.category, item.author, item.year]
}));

// Auto-map career programs into searchable schema
const mappedCareer = careerPrograms.map(prog => ({
  id: `career-${prog.id}`,
  category: 'Programs & Services',
  type: 'Career Program',
  title: `${prog.title1} ${prog.title2} ${prog.batch}`,
  desc: prog.desc,
  url: '#careers',
  meta: `${prog.status} • ${prog.focus}`,
  tags: [prog.title1, prog.title2, prog.batch, prog.focus, prog.status, 'career', 'internship', 'magang']
}));

// Auto-map staff & leadership into searchable schema
const mappedLeaders = leaders.map(leader => ({
  id: `leader-${leader.id}`,
  category: 'Leadership & Staff',
  type: 'Executive',
  title: `${leader.name} • ${leader.role}`,
  desc: `Jajaran dewan kepemimpinan EHA Institute pada divisi ${leader.dept}.`,
  url: '#leadership',
  meta: leader.dept,
  tags: [leader.name, leader.role, leader.dept, 'leadership', 'direktur', 'direksi']
}));

const mappedStaff = staffList.map(st => ({
  id: `staff-${st.id}`,
  category: 'Leadership & Staff',
  type: 'Researcher',
  title: `${st.name} • ${st.role}`,
  desc: `Staf peneliti aktif di divisi ${st.dept}.`,
  url: '#leadership',
  meta: st.dept,
  tags: [st.name, st.role, st.dept, 'staff', 'peneliti']
}));

/**
 * Automatically assembled single-source catalog:
 * When you add or edit items in newsData.js, publicationsData.js, etc.,
 * this searchCatalog is automatically updated with ZERO manual duplication!
 */
export const searchCatalog = [
  ...sitePages,
  ...mappedPublications,
  ...mappedNews,
  ...mappedCareer,
  ...mappedLeaders,
  ...mappedStaff
];

/**
 * Searches the dynamic catalog and returns categorized results
 * @param {string} rawQuery
 */
export function searchDatabase(rawQuery) {
  const query = (rawQuery || '').trim().toLowerCase();
  
  if (!query) {
    return {
      query: '',
      totalCount: 0,
      groups: {
        'Pages': [],
        'Publications': [],
        'News': [],
        'Programs & Services': [],
        'Leadership & Staff': []
      },
      categories: ['Pages', 'Publications', 'News', 'Programs & Services', 'Leadership & Staff'],
      items: []
    };
  }

  // Tokenize query words
  const terms = query.split(/\s+/).filter(Boolean);

  const matchedItems = searchCatalog.filter(item => {
    const haystack = [
      item.title,
      item.desc,
      item.type,
      item.category,
      item.meta || '',
      ...(item.tags || [])
    ].join(' ').toLowerCase();

    // Must match all query words (AND logic for precision)
    return terms.every(term => haystack.includes(term));
  });

  // Group by category
  const categories = ['Pages', 'Publications', 'News', 'Programs & Services', 'Leadership & Staff'];
  const groups = {};
  categories.forEach(cat => {
    groups[cat] = matchedItems.filter(item => item.category === cat);
  });

  return {
    query,
    totalCount: matchedItems.length,
    groups,
    categories,
    items: matchedItems
  };
}
