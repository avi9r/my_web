import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaBars, FaChevronRight, FaTimes, FaLockOpen } from 'react-icons/fa'
import { jobPrepSections } from '../../data/jobPrep'

export default function JobPrepShell({ children }) {
  const location = useLocation()
  const [navOpen, setNavOpen] = useState(false)
  const [expanded, setExpanded] = useState(() => {
    const match = jobPrepSections.find(
      (s) => location.pathname === `/job-prep/${s.id}` || location.pathname.startsWith(`/job-prep/${s.id}/`)
    )
    return match?.id || jobPrepSections[0].id
  })

  useEffect(() => {
    const match = jobPrepSections.find(
      (s) => location.pathname === `/job-prep/${s.id}` || location.pathname.startsWith(`/job-prep/${s.id}/`)
    )
    if (match) setExpanded(match.id)
    setNavOpen(false)
  }, [location.pathname])

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      {navOpen && (
        <button type="button" className="fixed inset-0 z-40 bg-black/40 lg:hidden" aria-label="Close" onClick={() => setNavOpen(false)} />
      )}

      <aside
        className={`fixed lg:sticky top-14 z-50 lg:z-0 h-[calc(100vh-3.5rem)] w-80 shrink-0 overflow-y-auto border-r border-slate-200 dark:border-slate-800 bg-[#efeae3] dark:bg-slate-950 transition-transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <span className="text-sm font-semibold">Job Prep</span>
          <button type="button" onClick={() => setNavOpen(false)} aria-label="Close">
            <FaTimes />
          </button>
        </div>
        <div className="px-3 pb-8 pt-2">
          <Link
            to="/job-prep"
            className="mb-3 flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-teal-800 dark:text-teal-300 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <FaLockOpen className="text-xs" /> Job Prep home
          </Link>
          {jobPrepSections.map((section) => {
            const isOpen = expanded === section.id
            return (
              <div key={section.id} className="mb-1">
                <div className="flex items-center gap-1 rounded-md px-1 py-1" style={{ borderLeft: `3px solid ${section.accent}` }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded((e) => (e === section.id ? '' : section.id))}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <FaChevronRight className={`text-teal-600 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  <Link
                    to={`/job-prep/${section.id}`}
                    onClick={() => setExpanded(section.id)}
                    className="flex-1 rounded-md px-1 py-1.5 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    {section.title}
                  </Link>
                  <span className="pr-2 text-[10px] text-slate-500">{section.topics.length}</span>
                </div>
                {isOpen && (
                  <ul className="mt-0.5 mb-2 space-y-0.5 pl-9">
                    {section.topics.map((topic) => {
                      const href = `/job-prep/${section.id}/${topic.id}`
                      const active = location.pathname === href
                      return (
                        <li key={topic.id}>
                          <Link
                            to={href}
                            className={`block rounded-md px-2 py-1.5 text-xs ${
                              active
                                ? 'bg-teal-700/15 text-teal-800 dark:text-teal-300 font-medium'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                          >
                            {topic.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 px-4 py-2">
          <button type="button" onClick={() => setNavOpen(true)} className="inline-flex items-center gap-2 text-sm font-medium">
            <FaBars /> Sections
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
