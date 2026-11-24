import { Link, useParams } from 'react-router-dom'
import { getSubtopic, getTrack } from '../data/curriculum'
import { ConceptChips, ProductionCallout, pickLab } from '../learn/components/LabKit'

export default function LessonPage() {
  const { trackId, lessonId } = useParams()
  const track = getTrack(trackId || '')
  const lesson = trackId && lessonId ? getSubtopic(trackId, lessonId) : undefined

  if (!track || !lesson) {
    return (
      <div className="p-8">
        <p>Lesson not found.</p>
        <Link to="/learn/system-design" className="text-teal-700">Back to tracks</Link>
      </div>
    )
  }

  const idx = track.subtopics.findIndex((s) => s.id === lesson.id)
  const prev = track.subtopics[idx - 1]
  const next = track.subtopics[idx + 1]

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to={track.path} className="text-xs font-semibold uppercase tracking-wider" style={{ color: track.accent }}>
        ← {track.title}
      </Link>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">{lesson.title}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{lesson.summary}</p>

      <div className="mt-5">
        <ConceptChips concepts={lesson.concepts} />
      </div>

      <div className="mt-4">
        <ProductionCallout note={lesson.productionNote} />
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Interactive lab</h2>
        {pickLab(lesson.lab, track, lesson)}
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white/60 dark:bg-slate-900/40">
        <h2 className="font-semibold">What you should walk away with</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {lesson.concepts.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="text-teal-700">▸</span>
              Be able to explain and apply <strong>{c}</strong> in a real system conversation.
            </li>
          ))}
        </ul>
      </section>

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
