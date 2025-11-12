import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'DLAI (DeepLogic AI)',
      position: 'Django Developer',
      period: 'August 2022 - Present',
      description: [
        'Leading backend development, focusing on developing complex APIs and AI/ML-driven solutions using Django',
        'Collaborated with cross-functional teams to implement LLM-based document data extraction and conversion features',
        'Architected scalable systems processing 2000+ documents using vector embeddings and similarity matching',
        'Implemented AI-powered email agents using LLMs and vector databases for automated document processing',
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'LLMs', 'Vector DBs', 'AI/ML'],
    },
    {
      company: 'SRV Technology',
      position: 'Full-Stack Developer',
      period: 'July 2020 - July 2022',
      description: [
        'Developed and maintained full-stack applications using Laravel, Django and React.js',
        'Worked on API integration, database design, and deployment',
        'Built responsive user interfaces and integrated third-party services',
        'Collaborated with team members using Git version control in agile environments',
      ],
      technologies: ['Laravel', 'Django', 'React.js', 'MySQL', 'JavaScript', 'PHP'],
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaBriefcase className="text-xl" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-1 h-full bg-gray-300 dark:bg-gray-600 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

