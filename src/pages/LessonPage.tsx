import { Link, useParams } from 'react-router-dom'
import { getSubtopic, getTrack } from '../data/curriculum'
import { fallbackLessonBody, getLessonBody } from '../data/lessonContent'
import { ConceptAccordion } from '../learn/components/ConceptAccordion'
import { ProductionCallout, pickLab } from '../learn/components/LabKit'

export default function LessonPage() {
  const { trackId, lessonId } = useParams()
  const track = getTrack(trackId || '')
  const lesson = trackId && lessonId ? getSubtopic(trackId, lessonId) : undefined

  if (!track || !lesson) {
    return (
      <div className="p-8">
        <p>Lesson not found.</p>
        <Link to="/learn/system-design" className="text-teal-700">
          Back to tracks
        </Link>
      </div>
    )
  }

  const idx = track.subtopics.findIndex((s) => s.id === lesson.id)
  const prev = track.subtopics[idx - 1]
  const next = track.subtopics[idx + 1]

  const isDsa = track.id === 'dsa'
  const body =
    getLessonBody(track.id, lesson.id) ||
    fallbackLessonBody(lesson.title, lesson.summary, lesson.concepts)

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to={track.path} className="text-xs font-semibold uppercase tracking-wider" style={{ color: track.accent }}>
        ← {track.title}
      </Link>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">{lesson.title}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{lesson.summary}</p>

      {!isDsa && (
        <>
          <section className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Overview</h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{body.intro}</p>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Why it matters: </span>
              {body.whyItMatters}
            </p>
          </section>

          <div className="mt-4">
            <ProductionCallout note={lesson.productionNote} />
          </div>

          <section className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Open each idea
            </h2>
            <p className="text-xs text-slate-500 mb-3">
              Click a row to expand the explanation and a real-life example. Only one stays open at a time.
            </p>
            <ConceptAccordion items={body.concepts} accent={track.accent} />
          </section>
        </>
      )}

      {isDsa && (
        <div className="mt-4">
          <ProductionCallout note={lesson.productionNote} />
        </div>
      )}

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
          {isDsa ? 'Interactive lab' : 'Try it yourself'}
        </h2>
        {pickLab(lesson.lab, track, lesson)}
      </section>

      {!isDsa && (
        <section className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white/60 dark:bg-slate-900/40">
          <h2 className="font-semibold">Quick check</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            After reading, you should be able to explain each idea above to a friend using the real-life example —
            without reading from the screen.
          </p>
        </section>
      )}

      <nav className="mt-10 flex items-center justify-between gap-4 text-sm">
        {prev ? (
          <Link to={`${track.path}/${prev.id}`} className="text-teal-800 dark:text-teal-400">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`${track.path}/${next.id}`} className="text-teal-800 dark:text-teal-400">
            {next.title} →
          </Link>
        ) : (
          <Link to={track.path} className="text-teal-800 dark:text-teal-400">
            Back to track →
          </Link>
        )}
      </nav>
    </div>
  )
}
