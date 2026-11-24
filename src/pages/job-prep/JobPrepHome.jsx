import { Link } from 'react-router-dom'
import { jobPrepSections } from '../../data/jobPrep'

export default function JobPrepHome() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">Unlocked</p>
      <h1 className="mt-2 font-serif text-4xl text-slate-900 dark:text-white">Job Prep</h1>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
        Interview-grade notes across production Python, DSA patterns, system design (with case studies),
        agentic RAG, DevOps/cloud, and target roles — explained simply with real-world examples.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {jobPrepSections.map((section) => (
          <Link
            key={section.id}
            to={`/job-prep/${section.id}`}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 p-5 hover:-translate-y-0.5 hover:shadow-lg transition"
            style={{ borderTopColor: section.accent, borderTopWidth: 3 }}
          >
            <h2 className="font-semibold text-lg">{section.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{section.tagline}</p>
            <p className="mt-3 text-xs text-slate-500">{section.topics.length} topics</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
