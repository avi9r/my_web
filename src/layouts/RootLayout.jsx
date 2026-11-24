import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa'
import ThemeProvider, { useTheme } from '../context/ThemeContext'
import { JobPrepAccessProvider, useJobPrepAccess } from '../context/JobPrepAccessContext'
import JobPrepUnlockModal from '../components/JobPrepUnlockModal'
import { tracks } from '../data/curriculum'

function JobPrepNavLink() {
  const { unlocked, requestUnlock } = useJobPrepAccess()
  if (unlocked) {
    return (
      <Link to="/job-prep" className="hover:text-teal-700 dark:hover:text-teal-400">
        Job Prep
      </Link>
    )
  }
  return (
    <button
      type="button"
      onClick={requestUnlock}
      className="hover:text-teal-700 dark:hover:text-teal-400"
    >
      Job Prep
    </button>
  )
}

function TopBar({ onOpenNav }) {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const isLearn = location.pathname.startsWith('/learn')

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800 bg-[#f7f4ef]/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {isLearn && (
            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-slate-700 dark:text-slate-200"
              onClick={onOpenNav}
              aria-label="Open curriculum"
            >
              <FaBars />
            </button>
          )}
          <Link to="/" className="font-semibold tracking-tight text-slate-900 dark:text-white">
            Avinash Ranjan
            <span className="ml-2 text-xs font-medium text-teal-700 dark:text-teal-400">Learn</span>
          </Link>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
          <Link to="/" className="hover:text-teal-700 dark:hover:text-teal-400">Home</Link>
          <Link to="/learn/dsa" className="hover:text-teal-700 dark:hover:text-teal-400">Curriculum</Link>
          <JobPrepNavLink />
          <Link to="/about" className="hover:text-teal-700 dark:hover:text-teal-400">About</Link>
          <Link to="/contact" className="hover:text-teal-700 dark:hover:text-teal-400">Contact</Link>
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-200"
          aria-label="Toggle theme"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  )
}

function trackIdFromPath(pathname) {
  const match = tracks.find((t) => pathname === t.path || pathname.startsWith(`${t.path}/`))
  return match?.id || ''
}

function CurriculumSidebar({ open, onClose }) {
  const location = useLocation()
  const [expanded, setExpanded] = useState(() => trackIdFromPath(location.pathname) || 'dsa')

  // Keep the open section in sync with the current lesson route
  useEffect(() => {
    const current = trackIdFromPath(location.pathname)
    if (current) setExpanded(current)
  }, [location.pathname])

  const toggleTrack = (id) => {
    setExpanded((prev) => (prev === id ? '' : id))
  }

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Close sidebar overlay"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:sticky top-14 z-50 lg:z-0 h-[calc(100vh-3.5rem)] w-72 shrink-0 overflow-y-auto border-r border-slate-200 dark:border-slate-800 bg-[#f3efe8] dark:bg-slate-950 transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <span className="text-sm font-semibold">Curriculum</span>
          <button type="button" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>
        <div className="px-3 pb-8">
          {tracks.map((track) => {
            const isOpen = expanded === track.id
            return (
              <div key={track.id} className="mb-1">
                <div
                  className="flex w-full items-center gap-1 rounded-md px-1 py-1 text-sm font-semibold text-slate-800 dark:text-slate-100"
                  style={{ borderLeft: `3px solid ${track.accent}` }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? `Collapse ${track.title}` : `Expand ${track.title}`}
                    onClick={() => toggleTrack(track.id)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <FaChevronRight
                      className={`text-teal-600 dark:text-teal-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <Link
                    to={track.path}
                    onClick={() => {
                      setExpanded(track.id)
                      onClose()
                    }}
                    className="flex-1 rounded-md px-1 py-1.5 hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    {track.title}
                  </Link>
                  <span className="pr-2 text-[10px] tabular-nums text-slate-500">{track.subtopics.length}</span>
                </div>

                {isOpen && (
                  <ul className="mt-0.5 mb-2 space-y-0.5 pl-9">
                    {track.subtopics.map((sub) => {
                      const href = `${track.path}/${sub.id}`
                      const active =
                        location.pathname === href ||
                        location.pathname === `${href}/`
                      return (
                        <li key={sub.id}>
                          <Link
                            to={href}
                            onClick={onClose}
                            className={`block rounded-md px-2 py-1.5 text-xs ${
                              active
                                ? 'bg-teal-700/15 text-teal-800 dark:text-teal-300 font-medium'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
          <div className="mt-6 border-t border-slate-300 dark:border-slate-800 pt-4 px-2 space-y-2 text-sm">
            <Link to="/about" onClick={onClose} className="block text-slate-700 dark:text-slate-300 hover:text-teal-700">
              About me
            </Link>
            <Link to="/contact" onClick={onClose} className="block text-slate-700 dark:text-slate-300 hover:text-teal-700">
              Contact
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

function Shell() {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()
  const isLearn = location.pathname.startsWith('/learn')

  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#f7f4ef] dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <TopBar onOpenNav={() => setNavOpen(true)} />
      <div className={isLearn ? 'flex' : ''}>
        {isLearn && <CurriculumSidebar open={navOpen} onClose={() => setNavOpen(false)} />}
        <main className={isLearn ? 'min-w-0 flex-1' : ''}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <JobPrepAccessProvider>
        <Shell />
        <JobPrepUnlockModal />
      </JobPrepAccessProvider>
    </ThemeProvider>
  )
}
