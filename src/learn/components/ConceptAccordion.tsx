import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export type ConceptBlock = {
  title: string
  explain: string
  example: string
}

export function ConceptAccordion({
  items,
  accent = '#0d9488',
}: {
  items: ConceptBlock[]
  accent?: string
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.title ?? null)

  if (!items.length) return null

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const open = openId === item.title
        return (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 overflow-hidden"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.title)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
            >
              <FaChevronRight
                className={`shrink-0 text-sm transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
                style={{ color: accent }}
              />
              <span className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</span>
            </button>
            {open && (
              <div className="border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">In plain words</p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.explain}</p>
                </div>
                <div className="rounded-lg border border-teal-700/20 bg-teal-700/5 px-3 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-800 dark:text-teal-300 mb-1">
                    Real-life example
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.example}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
