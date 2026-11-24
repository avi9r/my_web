import { Link } from 'react-router-dom'
import { featuredTracks, tracks } from '../data/curriculum'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-90 dark:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse at 20% 20%, rgba(13,148,136,0.22), transparent 50%), radial-gradient(ellipse at 80% 0%, rgba(37,99,235,0.14), transparent 45%), linear-gradient(180deg, #eef2ea 0%, #f7f4ef 55%, #f7f4ef 100%)',
          }}
        />
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
        <div
          className="absolute inset-0 hidden dark:block opacity-70"
          style={{
            background:
              'radial-gradient(ellipse at 20% 10%, rgba(13,148,136,0.2), transparent 45%), radial-gradient(ellipse at 90% 0%, rgba(37,99,235,0.12), transparent 40%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-teal-800/80 dark:text-teal-400">
            Avinash Ranjan
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-slate-900 dark:text-white">
            Six years of shipping — taught as interactive labs.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-700 dark:text-slate-300">
            Learn DSA, system design, RAG, agents, cloud, Docker, and Kubernetes the way they show up in production SaaS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/learn/dsa"
              className="rounded-md bg-slate-900 dark:bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Start learning
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-slate-400/70 dark:border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200"
            >
              About the instructor
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-500">Featured tracks</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTracks.map((track) => (
            <Link
              key={track.id}
              to={track.path}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderTopColor: track.accent, borderTopWidth: 3 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-teal-800 dark:group-hover:text-teal-300">
                {track.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{track.tagline}</p>
              <p className="mt-4 text-xs font-medium text-slate-500">{track.subtopics.length} lessons</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-500">Full curriculum</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.id}
              to={track.path}
              className="flex items-start gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 px-4 py-3 hover:bg-white dark:hover:bg-slate-900/80"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full shrink-0" style={{ background: track.accent }} />
              <div>
                <div className="font-medium">{track.title}</div>
                <div className="text-xs text-slate-500">{track.subtopics.map((s) => s.title).slice(0, 4).join(' · ')}
                  {track.subtopics.length > 4 ? '…' : ''}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
