import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'DeepLogic AI (DLAI)',
      position: 'Backend Engineer',
      period: 'August 2022 – Present · Delhi NCR',
      description: [
        'Designed and shipped Django REST APIs for document-automation SaaS extracting structured data from enterprise PDFs for German clients.',
        'Built document similarity / RAG (LangChain, embeddings, pgvector) with sub-200ms queries across 30,000+ documents; OCR for PDF, images, Word, CSV.',
        'Productized Human-in-the-Loop review and AI Eval gates; scaled Celery/Redis to 1,000+ documents/day.',
        'Multi-channel delivery via SAP ERP, Microsoft Graph, SFTP/FTP, SMTP; releases Docker → ECR → EKS Fargate, plus on-prem packages.',
      ],
      technologies: ['Django', 'Celery', 'Redis', 'PostgreSQL', 'LangChain', 'pgvector', 'AWS EKS', 'Docker'],
    },
    {
      company: 'SRV Technology',
      position: 'Full Stack Developer',
      period: 'July 2020 – July 2022 · Siliguri, West Bengal',
      description: [
        'Delivered 5+ client products end-to-end (lead management, education, email marketing) using Django/Python and PHP/Laravel.',
        'Built Japio analytics dashboards and a bulk Email/SMS platform (Twilio, SendGrid) for campaigns of 50,000+ recipients.',
        'Owned schema design, third-party integrations, and multi-environment deployments across projects.',
      ],
      technologies: ['Django', 'Laravel', 'React.js', 'MySQL', 'Twilio', 'SendGrid'],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Roles where the lessons on this site were earned
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaBriefcase className="text-xl" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-1 h-full bg-gray-300 dark:bg-gray-600 mt-4" />
                  )}
                </div>

                <motion.div
                  className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive"
                  whileHover={{ scale: 1.01, y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{exp.position}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
