import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const HotProjects = () => {
  const hotProjects = [
    {
      title: 'Bit Vault AI',
      description: 'An advanced AI-powered secure file vault system that combines cutting-edge encryption with intelligent file management. Bit Vault AI uses machine learning algorithms to automatically categorize and protect your sensitive documents, offering seamless binary encoding/decoding for multiple file formats. Experience next-generation data security with smart access controls and automated threat detection.',
      link: 'https://bitvault-ai.com',
      technologies: ['AI/ML', 'Encryption', 'Python', 'Django', 'PostgreSQL'],
      category: 'AI/ML',
    },
    {
      title: 'EdTech with AI',
      description: 'A comprehensive educational technology platform revolutionizing online learning experiences. EdTech with AI provides interactive courses, real-time progress tracking, and personalized learning paths powered by adaptive algorithms. With features like virtual classrooms, AI-powered tutoring, and comprehensive analytics, it empowers both students and educators to achieve better learning outcomes.',
      link: 'https://edtech-platform.com',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'AI/ML', 'WebRTC'],
      category: 'AI-Powered Platform',
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'AI-Powered Platform': 'from-cyan-500 to-blue-500',
      'Full-Stack': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Tools': 'from-orange-500 to-red-500',
      'Data Science': 'from-indigo-500 to-purple-500',
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  return (
    <section id="hot-projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flagship <span className="gradient-text">Ventures</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leading initiatives that redefine industry standards and drive business transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hotProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden relative group interactive perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated gradient orb */}
              <motion.div 
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-10 rounded-bl-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulsing glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
              />
              
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.span 
                    className={`px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    animate={{
                      boxShadow: [
                        '0 4px 14px rgba(0,0,0,0.1)',
                        '0 8px 20px rgba(59, 130, 246, 0.4)',
                        '0 4px 14px rgba(0,0,0,0.1)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
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
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Visit Project
                    <FaExternalLinkAlt className="text-sm" />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HotProjects
