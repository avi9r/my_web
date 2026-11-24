import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import ThemeProvider, { useTheme } from '../context/ThemeContext'
import { tracks } from '../data/curriculum'

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

function CurriculumSidebar({ open, onClose }) {
  const location = useLocation()
  const [expanded, setExpanded] = useState(() => {
    const match = tracks.find((t) => location.pathname.startsWith(t.path))
    return match?.id || 'dsa'
  })

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
          {tracks.map((track) => (
            <div key={track.id} className="mb-2">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-black/5 dark:hover:bg-white/5"
                onClick={() => setExpanded((e) => (e === track.id ? '' : track.id))}
                style={{ borderLeft: `3px solid ${track.accent}` }}
              >
                <Link
                  to={track.path}
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                  className="flex-1"
                >
                  {track.title}
                </Link>
                <span className="text-xs text-slate-500">{track.subtopics.length}</span>
              </button>
              {expanded === track.id && (
                <ul className="mt-1 space-y-0.5 pl-3">
                  {track.subtopics.map((sub) => {
                    const href = track.id === 'dsa' ? `${track.path}/${sub.id}` : `${track.path}/${sub.id}`
                    const active = location.pathname === href || location.pathname === `${href}/`
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
          ))}
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
      <Shell />
    </ThemeProvider>
  )
}
