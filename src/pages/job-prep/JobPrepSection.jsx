import { Link, useParams } from 'react-router-dom'
import { getJobPrepSection } from '../../data/jobPrep'

export default function JobPrepSection() {
  const { sectionId } = useParams()
  const section = getJobPrepSection(sectionId || '')

  if (!section) {
    return (
      <div className="p-8">
        <p>Section not found.</p>
        <Link to="/job-prep" className="text-teal-700">
          Back
        </Link>
      </div>
    )
  }

  const caseTopics = section.topics.filter((t) => t.id.startsWith('case-'))
  const otherTopics = section.topics.filter((t) => !t.id.startsWith('case-'))

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/job-prep" className="text-xs font-semibold uppercase tracking-wider" style={{ color: section.accent }}>
        ← Job Prep
      </Link>
      <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{section.title}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{section.tagline}</p>

      <div className="mt-8 space-y-3">
        {otherTopics.map((topic, i) => (
          <Link
            key={topic.id}
            to={`/job-prep/${section.id}/${topic.id}`}
            className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-4 hover:border-teal-600/40"
          >
            <p className="text-xs text-slate-500">Topic {i + 1}</p>
            <h2 className="font-semibold text-lg">{topic.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{topic.summary}</p>
          </Link>
        ))}
      </div>

      {caseTopics.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Case studies</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Top system designs — what they solve and why they’re shaped that way.
          </p>
          <div className="mt-4 space-y-3">
            {caseTopics.map((topic) => (
              <Link
                key={topic.id}
                to={`/job-prep/${section.id}/${topic.id}`}
                className="block rounded-xl border border-violet-500/30 bg-violet-500/5 p-4 hover:border-violet-500/60"
              >
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{topic.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
