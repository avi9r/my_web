import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'EPIC Email Agent (DLAI)',
      description: 'AI-powered email agent using LLMs and vector databases to extract key-value pairs from emailed PDFs',
      technologies: ['Django', 'AI/ML', 'LLM', 'Vector Search', 'PostgreSQL'],
      category: 'AI/ML',
    },
    {
      title: 'Document Similarity Engine',
      description: 'PDF similarity search system using vector embeddings and cosine similarity, processing 2000+ documents',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HNSWlib', 'OpenAI', 'AWS Bedrock'],
      category: 'AI/ML',
    },
    {
      title: 'Digital Transformation Centre',
      description: 'Low-code SaaS platform for task automation with multi-channel integration (Email, SFTP, FTP)',
      technologies: ['Django', 'PostgreSQL', 'RESTful APIs'],
      category: 'Full-Stack',
    },
    {
      title: 'Bit_Vault',
      description: 'Secure file vault system with binary encoding/decoding and encryption for multiple file formats',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Encryption'],
      category: 'Backend',
    },
    {
      title: 'Blackbox Logger',
      description: 'Python package for comprehensive API logging with sensitive data masking capabilities',
      technologies: ['Python', 'Django', 'Flask', 'PyPI'],
      category: 'Tools',
    },
    {
      title: 'EPIC (DLAI)',
      description: 'PDF processing system with bounding box annotation for accurate key-value pair extraction',
      technologies: ['Django', 'JavaScript', 'jQuery', 'PostgreSQL', 'HTMX'],
      category: 'Full-Stack',
    },
    {
      title: 'Lead Management System',
      description: 'Platform for managing credit card applications from various banks with analytics dashboard',
      technologies: ['React.js', 'Laravel', 'MySQL', 'JavaScript'],
      category: 'Full-Stack',
    },
    {
      title: 'House Price Prediction',
      description: 'ML-powered portal for predicting house prices using the Washington housing dataset',
      technologies: ['Jupyter Notebook', 'Flask', 'AI/ML', 'JavaScript'],
      category: 'Data Science',
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Full-Stack': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Tools': 'from-orange-500 to-red-500',
      'Data Science': 'from-indigo-500 to-purple-500',
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden relative group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-10 rounded-bl-full`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

