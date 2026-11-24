import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-teal-800 dark:text-teal-400">Contact</p>
      <h1 className="mt-3 font-serif text-4xl">Let’s talk</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Kolkata, India · Open to product engineering, AI systems, and teaching collaborations.
      </p>
      <div className="mt-8 space-y-3">
        <a href="mailto:avinashranjan633@gmail.com" className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-white dark:hover:bg-slate-900">
          <FaEnvelope className="text-teal-700" /> avinashranjan633@gmail.com
        </a>
        <a href="https://github.com/avi9r" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-white dark:hover:bg-slate-900">
          <FaGithub className="text-teal-700" /> github.com/avi9r
        </a>
        <a href="https://linkedin.com/in/avinashranjan9" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-white dark:hover:bg-slate-900">
          <FaLinkedin className="text-teal-700" /> linkedin.com/in/avinashranjan9
        </a>
      </div>
    </div>
  )
}
