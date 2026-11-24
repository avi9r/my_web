export interface NavItem {
  path: string
  label: string
  icon: string
  section?: string
}

const BASE = '/learn/dsa'

export const navigationItems: NavItem[] = [
  { path: BASE, label: 'Home', icon: '🏠', section: 'main' },
  { path: `${BASE}/arrays`, label: 'Arrays & Lists', icon: '📊', section: 'data-structures' },
  { path: `${BASE}/linked-lists`, label: 'Linked Lists', icon: '🔗', section: 'data-structures' },
  { path: `${BASE}/stacks-queues`, label: 'Stacks & Queues', icon: '📚', section: 'data-structures' },
  { path: `${BASE}/hash-tables`, label: 'Hash Tables', icon: '🗂️', section: 'data-structures' },
  { path: `${BASE}/trees`, label: 'Trees & Binary Trees', icon: '🌳', section: 'data-structures' },
  { path: `${BASE}/graphs`, label: 'Graphs', icon: '🕸️', section: 'data-structures' },
  { path: `${BASE}/sorting`, label: 'Sorting Algorithms', icon: '🔄', section: 'algorithms' },
  { path: `${BASE}/searching`, label: 'Searching Algorithms', icon: '🔍', section: 'algorithms' },
  { path: `${BASE}/dynamic-programming`, label: 'Dynamic Programming', icon: '⚡', section: 'algorithms' },
  { path: `${BASE}/greedy`, label: 'Greedy Algorithms', icon: '💰', section: 'algorithms' },
  { path: `${BASE}/backtracking`, label: 'Backtracking', icon: '🔙', section: 'algorithms' },
  { path: `${BASE}/rb-trees`, label: 'Red-Black Trees', icon: '🔴', section: 'clrs' },
  { path: `${BASE}/b-trees`, label: 'B-Trees', icon: '🌲', section: 'clrs' },
  { path: `${BASE}/heaps-priority`, label: 'Heaps & Priority Queues', icon: '🛗', section: 'clrs' },
  { path: `${BASE}/mst`, label: 'Minimum Spanning Trees', icon: '🕸️', section: 'clrs' },
  { path: `${BASE}/shortest-paths`, label: 'Shortest Paths', icon: '🛣️', section: 'clrs' },
  { path: `${BASE}/string-matching`, label: 'String Matching', icon: '🔎', section: 'clrs' },
  { path: `${BASE}/max-flow`, label: 'Max Flow', icon: '🌊', section: 'clrs' },
]

export const getSectionTitle = (section: string): string => {
  const titles: Record<string, string> = {
    main: 'Main',
    'data-structures': 'Data Structures',
    algorithms: 'Algorithms',
    clrs: 'CLRS Algorithms',
  }
  return titles[section] || section
}
