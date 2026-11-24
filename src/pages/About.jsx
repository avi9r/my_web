import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const experience = [
  {
    role: 'Backend Engineer',
    company: 'DeepLogic AI (DLAI)',
    when: 'Aug 2022 – Present · Delhi NCR',
    points: [
      'Django REST APIs for document-automation SaaS extracting structured data from enterprise PDFs (German clients).',
      'Document similarity / RAG (LangChain, embeddings, pgvector) with sub-200ms queries across 30,000+ documents.',
      'HITL review + AI Eval gates; Celery/Redis at 1,000+ docs/day; SAP, Microsoft Graph, SFTP/FTP, SMTP delivery.',
      'Containerized releases Docker → ECR → EKS Fargate, plus on-prem Docker packages for customer infrastructure.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'SRV Technology',
    when: 'Jul 2020 – Jul 2022 · Siliguri, West Bengal',
    points: [
      'Delivered 5+ client products end-to-end (lead management, education, email marketing) with Django/Python and PHP/Laravel.',
      'Japio analytics dashboards and bulk Email/SMS (Twilio, SendGrid) for campaigns of 50,000+ recipients.',
    ],
  },
]

const projects = [
  { name: 'EPIC / DTC', blurb: 'Intelligent document processor — async AI pipelines, HITL, ERP channels, cloud + on-prem.' },
  { name: 'Document Similarity Engine', blurb: 'Upload/search/compare with OCR + pgvector (github.com/avi9r/document_similarity).' },
  { name: 'Human in Loop', blurb: 'Pay-per-minute advisor marketplace — Next.js, FastAPI, Expo, Razorpay.' },
  { name: 'BitVault / blackbox-logger', blurb: 'AES-256 vault + PyPI request/response logger with sensitive-field masking.' },
  { name: 'Hloop Connect', blurb: 'Privacy-first dating app — Expo, Fastify, Supabase, Cloudflare R2.' },
  { name: 'YouTube Video Factory', blurb: 'Faceless YouTube automation with Groq, FFmpeg, Hugging Face / FAL.' },
]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-teal-800 dark:text-teal-400">About</p>
      <h1 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white">Product engineer. Teacher from the trenches.</h1>
      <p className="mt-5 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        I am Avinash Ranjan — about six years shipping production SaaS end-to-end: APIs, async pipelines,
        AI document extraction and RAG, payments, mobile clients, and customer-facing workflows. This site
        turns that work into interactive learning tracks, not buzzword slides.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/Avinash_Ranjan_Resume_2026.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 dark:bg-teal-600 px-4 py-2 text-sm font-semibold text-white"
          download
        >
          <FaDownload /> Resume PDF
        </a>
        <a href="https://github.com/avi9r" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/avinashranjan9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">
          <FaLinkedin /> LinkedIn
        </a>
        <Link to="/learn/dsa" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm">
          Enter curriculum
        </Link>
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-wide uppercase text-slate-500">Experience</h2>
      <div className="mt-4 space-y-6">
        {experience.map((job) => (
          <article key={job.company} className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white/70 dark:bg-slate-900/40">
            <h3 className="font-semibold text-lg">{job.role} · {job.company}</h3>
            <p className="text-xs text-slate-500 mt-1">{job.when}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-teal-700">▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-wide uppercase text-slate-500">Selected projects</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.blurb}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-wide uppercase text-slate-500">Education</h2>
      <div className="mt-3 space-y-2 text-sm">
        <p><strong>MCA (Data Science)</strong> — Jain University, Bangalore · 2022 – 2024</p>
        <p><strong>BCA</strong> — Techno India, Kolkata · 2017 – 2020</p>
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-wide uppercase text-slate-500">Stack I teach from</h2>
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        Python, Django, DRF, FastAPI, Celery, Redis, PostgreSQL, Next.js, TypeScript, React, Expo,
        LangChain, LlamaIndex, RAG, pgvector, Pinecone, AWS (EKS, ECR, Fargate, RDS, S3, Secrets Manager, IRSA),
        Docker, Kubernetes, Cloudflare Workers/D1/R2, OpenAPI, Razorpay, Stripe, SAP, Microsoft Graph.
      </p>
    </div>
  )
}
