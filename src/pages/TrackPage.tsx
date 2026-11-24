import { Link, useParams } from 'react-router-dom'
import { getTrack } from '../data/curriculum'
import { ConceptChips, ProductionCallout } from '../learn/components/LabKit'

export default function TrackPage() {
  const { trackId } = useParams()
  const track = getTrack(trackId || '')

  if (!track) {
    return (
      <div className="p-8">
        <p>Track not found.</p>
        <Link to="/" className="text-teal-700">Back home</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: track.accent }}>
        Track
      </p>
      <h1 className="mt-2 font-serif text-4xl text-slate-900 dark:text-white">{track.title}</h1>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{track.tagline}</p>

      <div className="mt-8 space-y-3">
        {track.subtopics.map((sub, i) => (
          <Link
            key={sub.id}
            to={`${track.path}/${sub.id}`}
            className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-4 hover:border-teal-600/40 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-slate-500">Lesson {i + 1}</p>
                <h2 className="font-semibold text-lg">{sub.title}</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{sub.summary}</p>
                <div className="mt-3">
                  <ConceptChips concepts={sub.concepts.slice(0, 4)} />
                </div>
                {sub.productionNote && (
                  <div className="mt-3">
                    <ProductionCallout note={sub.productionNote} />
                  </div>
                )}
              </div>
              <span className="text-xs rounded-full border px-2 py-1 shrink-0 capitalize">{sub.lab}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
