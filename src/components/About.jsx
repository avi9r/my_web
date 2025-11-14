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
      title: 'AI/ML & LLM Specialist',
      description: 'Expert in Large Language Models, Prompt Engineering, RAG systems, and vector embeddings. Building intelligent solutions with OpenAI and AWS Bedrock',
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Full-Stack Development',
      description: 'Building end-to-end applications with modern frameworks and scalable architectures',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Cloud & DevOps',
      description: 'Deploying scalable solutions with Docker, Kubernetes, and AWS cloud infrastructure',
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Highly motivated and results-oriented technology professional with 4+ years of experience 
              specializing in <strong className="text-purple-600 dark:text-purple-400">AI/ML engineering</strong> and full-stack development. 
              I excel at building intelligent systems powered by Large Language Models (LLMs) and modern cloud infrastructure.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My core expertise lies in <strong className="text-purple-600 dark:text-purple-400">AI/ML technologies</strong> including LLMs, Prompt Engineering, 
              RAG (Retrieval-Augmented Generation) systems, vector embeddings, and deploying AI models at scale. 
              I've architected AI-powered solutions processing thousands of documents using OpenAI API and AWS Bedrock.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently leading backend development at <strong>DLAI (DeepLogic AI)</strong>, where I design and implement 
              complex AI/ML-driven solutions. I specialize in containerizing applications with <strong>Docker</strong> and 
              orchestrating them with <strong>Kubernetes</strong> for scalable, production-ready deployments.
            </p>
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
                className={`p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0 ? 'ring-2 ring-purple-500/30 dark:ring-purple-400/30' : ''
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    index === 0 
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' 
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                      {feature.title}
                    </h3>
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
