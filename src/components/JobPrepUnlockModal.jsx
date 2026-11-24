import { useState } from 'react'
import { useJobPrepAccess } from '../context/JobPrepAccessContext'

const TO_EMAIL = 'avinashranjan633@gmail.com'

export default function JobPrepUnlockModal() {
  const { modalOpen, closeModal, grantAccess } = useJobPrepAccess()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [step, setStep] = useState('form') // form | sent

  if (!modalOpen) return null

  const openMail = () => {
    const subject = encodeURIComponent(`Job Prep access request — ${name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Hi Avinash,\n\nPlease unlock Job Prep content for me.\n\nName: ${name}\nEmail: ${email}\nNote: ${note || '(none)'}\n\nThanks!`
    )
    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`
    setStep('sent')
  }

  const finish = () => {
    grantAccess({ name, email, note })
    setStep('form')
    setName('')
    setEmail('')
    setNote('')
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-black/50" aria-label="Close" onClick={closeModal} />
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-2xl">
        {step === 'form' ? (
          <>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Let us know to unlock the content</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Job Prep is private prep material. Send a quick note to{' '}
              <span className="font-medium text-teal-700 dark:text-teal-400">{TO_EMAIL}</span> and you’ll get access on this device.
            </p>
            <div className="mt-4 space-y-3">
              <label className="block text-xs font-semibold text-slate-500">
                Your name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm"
                  placeholder="Alex"
                  required
                />
              </label>
              <label className="block text-xs font-semibold text-slate-500">
                Your email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label className="block text-xs font-semibold text-slate-500">
                Short note (optional)
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm"
                  placeholder="Targeting AI Solutions / FDE roles…"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 justify-end">
              <button type="button" onClick={closeModal} className="rounded-md border px-4 py-2 text-sm">
                Cancel
              </button>
              <button
                type="button"
                disabled={!name.trim() || !email.trim()}
                onClick={openMail}
                className="rounded-md bg-slate-900 dark:bg-teal-600 text-white px-4 py-2 text-sm font-semibold disabled:opacity-40"
              >
                Send email request
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Email client opened</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              After you hit send in your mail app, continue below to unlock Job Prep on this browser.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-end">
              <button type="button" onClick={() => setStep('form')} className="rounded-md border px-4 py-2 text-sm">
                Back
              </button>
              <button
                type="button"
                onClick={finish}
                className="rounded-md bg-teal-700 text-white px-4 py-2 text-sm font-semibold"
              >
                I’ve sent it — unlock
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
