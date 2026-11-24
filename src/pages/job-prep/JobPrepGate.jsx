import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useJobPrepAccess } from '../../context/JobPrepAccessContext'
import JobPrepShell from './JobPrepShell'

/** Wraps all /job-prep/* routes: locked visitors see the unlock CTA. */
export default function JobPrepGate() {
  const { unlocked, requestUnlock } = useJobPrepAccess()
  const location = useLocation()

  useEffect(() => {
    if (!unlocked) requestUnlock()
  }, [unlocked, requestUnlock, location.pathname])

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">Job Prep</p>
        <h1 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white">Content is locked</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Let us know to unlock the content — send a short email request, then continue here.
        </p>
        <button
          type="button"
          onClick={requestUnlock}
          className="mt-6 rounded-md bg-slate-900 dark:bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Request access
        </button>
        <p className="mt-8 text-xs text-slate-500">
          Or browse the{' '}
          <Link to="/learn/dsa" className="text-teal-700 underline">
            public curriculum
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <JobPrepShell>
      <Outlet />
    </JobPrepShell>
  )
}
