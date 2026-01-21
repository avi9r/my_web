import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaRocket, FaRobot } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'AI Innovation Leadership',
      description: 'Pioneering AI solutions with LLMs, RAG systems, and vector embeddings. Delivering enterprise-grade intelligent automation that transforms business operations',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Strategic Technology Execution',
      description: 'Building scalable, production-ready systems with modern architectures. From concept to deployment, delivering solutions that drive business value',
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Cloud-First Architecture',
      description: 'Designing and deploying enterprise solutions with Docker, Kubernetes, and AWS. Ensuring scalability, reliability, and optimal performance',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vision & <span className="gradient-text">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Transforming businesses through AI innovation and strategic technology leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                My Vision
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To democratize <strong className="text-purple-600 dark:text-purple-400">AI-powered solutions</strong> and make intelligent automation 
                accessible to businesses of all sizes. I believe in building technology that doesn't just solve problems, 
                but creates new opportunities and competitive advantages.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                The Mission
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Leading innovation in <strong className="text-purple-600 dark:text-purple-400">AI/ML technologies</strong> including Large Language Models, 
                RAG systems, and vector embeddings. Architecting solutions that process thousands of documents, 
                automate complex workflows, and deliver measurable business impact.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Impact & Leadership
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently leading technology initiatives at <strong>DLAI (DeepLogic AI)</strong>, where I design and implement 
                enterprise-grade AI solutions. Specializing in scalable cloud infrastructure with <strong>Docker</strong> and 
                <strong>Kubernetes</strong>, delivering production-ready systems that drive business growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive ${
                  index === 0 ? 'ring-2 ring-purple-500/30 dark:ring-purple-400/30' : ''
                }`}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    index === 0 
                      ? 'from-purple-500/20 to-pink-500/20' 
                      : 'from-blue-500/20 to-cyan-500/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                />
                
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div 
                    className={`p-3 rounded-lg ${
                      index === 0 
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' 
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
