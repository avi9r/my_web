import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Intelligent Document Processor',
      description:
        'Production AI pipeline extracting key-value data from complex enterprise PDFs; 1,000+ docs/day with async queues, AI evals, ERP/channel delivery, cloud + on-prem.',
      technologies: ['Django', 'Celery', 'LangChain', 'SAP', 'EKS Fargate'],
      category: 'AI/ML',
    },
    {
      title: 'Document Similarity Engine',
      description:
        'Upload/search/compare API for PDF, images, Word, CSV with vector embeddings, OCR, API-key limits — sub-200ms queries on large corpora.',
      technologies: ['Django REST', 'pgvector', 'Tesseract', 'OpenAPI'],
      category: 'AI/ML',
      link: 'https://github.com/avi9r/document_similarity',
    },
    {
      title: 'Advisor Marketplace',
      description:
        'Pay-per-minute consultancy: wallet/ledger, subscriptions, session chat, bilingual web UI, native mobile with social feed.',
      technologies: ['Next.js 14', 'FastAPI', 'Expo', 'Razorpay'],
      category: 'Full-Stack',
      link: 'https://github.com/avi9r/HNL_frontend',
    },
    {
      title: 'BitVault + blackbox-logger',
      description:
        'AES-256 CLI vault for files/text, plus a PyPI request/response logger with sensitive-field masking for secure audits.',
      technologies: ['Python', 'AES-256', 'PostgreSQL', 'PyPI'],
      category: 'Tools',
      link: 'https://github.com/avi9r/bitvault',
    },
    {
      title: 'Hloop Connect',
      description:
        'Privacy-first activity-led dating product: Expo Dev Client, typed API contracts, Supabase, Cloudflare R2 media.',
      technologies: ['Expo', 'Fastify', 'Supabase', 'Cloudflare R2'],
      category: 'Full-Stack',
      link: 'https://github.com/avi9r/Hloop_connect',
    },
    {
      title: 'YouTube Video Factory',
      description:
        'Faceless YouTube automation: script → AI images → Ken Burns, captions, thumbnails, YAML channel configs, review dashboard.',
      technologies: ['FastAPI', 'Next.js', 'FFmpeg', 'Groq', 'FAL'],
      category: 'AI/ML',
      link: 'https://github.com/avi9r/video-factory',
    },
    {
      title: 'Supedio Licensing Server',
      description:
        'Multi-tenant on-prem licensing: validation, revocation, heartbeats, audit logging, HMAC-signed anti-tampering responses.',
      technologies: ['Django', 'Celery', 'Redis', 'HMAC'],
      category: 'Backend',
    },
    {
      title: 'On-Prem Deployment Packages',
      description:
        'Customer-facing Docker Compose bundles with install scripts, ops runbooks, backups, and restarts for on-prem installs.',
      technologies: ['Docker Compose', 'Runbooks', 'SharePoint'],
      category: 'DevOps',
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Full-Stack': 'from-blue-500 to-cyan-500',
      Backend: 'from-green-500 to-emerald-500',
      Tools: 'from-orange-500 to-red-500',
      DevOps: 'from-indigo-500 to-blue-500',
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Work that shows up as “from production” notes inside the lessons
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden relative group interactive"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`} />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
