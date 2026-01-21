import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'EPIC Email Agent (DLAI)',
      description: 'Enterprise AI solution automating document processing with LLMs and vector databases. Reduced manual processing time by 85% and improved accuracy to 98%',
      technologies: ['Django', 'AI/ML', 'LLM', 'Vector Search', 'PostgreSQL'],
      category: 'AI/ML',
    },
    {
      title: 'Document Similarity Engine',
      description: 'Scalable intelligence platform processing 2000+ documents using advanced vector embeddings. Enabled 10x faster document matching and discovery',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HNSWlib', 'OpenAI', 'AWS Bedrock'],
      category: 'AI/ML',
    },
    {
      title: 'Digital Transformation Centre',
      description: 'Enterprise automation platform streamlining workflows across multiple channels. Increased operational efficiency by 60% for client organizations',
      technologies: ['Django', 'PostgreSQL', 'RESTful APIs'],
      category: 'Full-Stack',
    },
    {
      title: 'Bit_Vault',
      description: 'Enterprise-grade secure file management system with advanced encryption. Trusted by organizations for handling sensitive business documents',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Encryption'],
      category: 'Backend',
    },
    {
      title: 'Blackbox Logger',
      description: 'Enterprise logging solution ensuring compliance and security. Widely adopted Python package with intelligent data masking for production environments',
      technologies: ['Python', 'Django', 'Flask', 'PyPI'],
      category: 'Tools',
    },
    {
      title: 'EPIC (DLAI)',
      description: 'Advanced document intelligence platform with precision annotation. Achieved 95%+ accuracy in automated data extraction, transforming document workflows',
      technologies: ['Django', 'JavaScript', 'jQuery', 'PostgreSQL', 'HTMX'],
      category: 'Full-Stack',
    },
    {
      title: 'Lead Management System',
      description: 'Comprehensive CRM platform managing multi-bank credit applications. Delivered real-time analytics and streamlined approval processes',
      technologies: ['React.js', 'Laravel', 'MySQL', 'JavaScript'],
      category: 'Full-Stack',
    },
    {
      title: 'House Price Prediction',
      description: 'ML-powered analytics platform providing accurate property valuations. Enabled data-driven decision making for real estate stakeholders',
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
            Innovation <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Solutions that drive business transformation and measurable impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden relative group perspective-1000 interactive"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-10 rounded-bl-full`}
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 90, 180],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <motion.span 
                    className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <motion.span 
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      whileHover={{ scale: 1.1 }}
                    >
                      +{project.technologies.length - 4}
                    </motion.span>
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

