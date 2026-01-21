import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'DLAI (DeepLogic AI)',
      position: 'Technology Leader & AI Solutions Architect',
      period: 'August 2022 - Present',
      description: [
        'Leading technology strategy and architecture for AI/ML-driven enterprise solutions, driving innovation in document intelligence and automation',
        'Architected and delivered scalable systems processing 2000+ documents using advanced vector embeddings and similarity matching',
        'Pioneered LLM-based solutions including AI-powered email agents and automated document processing systems',
        'Established best practices for AI model deployment, scaling infrastructure to handle enterprise-level workloads',
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'LLMs', 'Vector DBs', 'AI/ML'],
    },
    {
      company: 'SRV Technology',
      position: 'Senior Technology Consultant',
      period: 'July 2020 - July 2022',
      description: [
        'Led full-stack development initiatives, delivering end-to-end solutions using modern frameworks and cloud technologies',
        'Designed and implemented scalable architectures, optimizing performance and ensuring robust API integrations',
        'Built enterprise-grade applications with responsive interfaces and seamless third-party service integrations',
        'Established development workflows and best practices, mentoring teams in agile methodologies',
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
            Leadership <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building and leading technology initiatives that create lasting impact
          </p>
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
                <motion.div 
                  className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive"
                  whileHover={{ 
                    scale: 1.01,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated gradient background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.position}
                        </motion.h3>
                        <motion.p 
                          className="text-lg text-blue-600 dark:text-blue-400 font-semibold"
                          whileHover={{ scale: 1.05, x: 5 }}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                      <motion.div 
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0"
                        whileHover={{ scale: 1.1 }}
                      >
                      <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </motion.div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.05, type: "spring" }}
                          whileHover={{ 
                            scale: 1.15, 
                            y: -3,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium cursor-default"
                        >
                          {tech}
                        </motion.span>
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

