import { Link, useParams } from 'react-router-dom'
import { getJobPrepSection, getJobPrepTopic } from '../../data/jobPrep'
import { getJobPrepBody } from '../../data/jobPrepContent'
import { ConceptAccordion } from '../../learn/components/ConceptAccordion'
import { PipelineLab, CompareLab, QuizLab } from '../../learn/components/LabKit'

export default function JobPrepTopic() {
  const { sectionId, topicId } = useParams()
  const section = getJobPrepSection(sectionId || '')
  const topic = sectionId && topicId ? getJobPrepTopic(sectionId, topicId) : undefined

  if (!section || !topic) {
    return (
      <div className="p-8">
        <p>Topic not found.</p>
        <Link to="/job-prep" className="text-teal-700">
          Back
        </Link>
      </div>
    )
  }

  const body = getJobPrepBody(section.id, topic.id)
  const idx = section.topics.findIndex((t) => t.id === topic.id)
  const prev = section.topics[idx - 1]
  const next = section.topics[idx + 1]
  const isCase = topic.id.startsWith('case-')

  const stages = topic.concepts.map((c, i) => ({
    id: String(i),
    label: c,
    detail: body?.concepts?.[i + (isCase ? 2 : 0)]?.explain || `${c} — part of ${topic.title}. ${topic.summary}`,
  }))

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to={`/job-prep/${section.id}`} className="text-xs font-semibold uppercase tracking-wider" style={{ color: section.accent }}>
        ← {section.title}
      </Link>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">{topic.title}</h1>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{topic.summary}</p>

      {body && (
        <section className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Overview</h2>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{body.intro}</p>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Why it matters: </span>
            {body.whyItMatters}
          </p>
          {body.whyThatWay && (
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <span className="font-semibold">Why it’s built that way: </span>
              {body.whyThatWay}
            </p>
          )}
          {body.architecture && (
            <div className="rounded-lg border border-violet-500/20 bg-violet-500/5 px-3 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-800 dark:text-violet-300 mb-1">
                Architecture sketch
              </p>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{body.architecture}</p>
            </div>
          )}
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Open each idea</h2>
        <p className="text-xs text-slate-500 mb-3">Click to expand a plain explanation and a real-world example.</p>
        <ConceptAccordion items={body?.concepts || topic.concepts.map((c) => ({ title: c, explain: topic.summary, example: c }))} accent={section.accent} />
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Try it</h2>
        {isCase ? (
          <CompareLab
            left={{ title: 'Naive approach', points: ['One server does everything', 'No cache', 'Sync everything on request', 'Breaks at first traffic spike'] }}
            right={{ title: 'Why the real design wins', points: topic.concepts.slice(0, 4) }}
          />
        ) : topic.concepts.length >= 4 ? (
          <PipelineLab title={`${topic.title} walkthrough`} stages={stages.slice(0, 6)} />
        ) : (
          <QuizLab
            questions={[
              {
                q: `What’s the main takeaway of ${topic.title}?`,
                options: [topic.summary, 'Ignore failure modes', 'Always use one giant server', 'Skip measurements'],
                answer: 0,
                explain: topic.summary,
              },
            ]}
          />
        )}
      </section>

      <nav className="mt-10 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link to={`/job-prep/${section.id}/${prev.id}`} className="text-teal-800 dark:text-teal-400">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/job-prep/${section.id}/${next.id}`} className="text-teal-800 dark:text-teal-400">
            {next.title} →
          </Link>
        ) : (
          <Link to={`/job-prep/${section.id}`} className="text-teal-800 dark:text-teal-400">
            Back to section →
          </Link>
        )}
      </nav>
    </div>
  )
}
