import { motion } from 'framer-motion'
import { FaBrain, FaRocket, FaCode } from 'react-icons/fa'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'AI systems in production',
      description:
        'RAG, LangChain, pgvector, and AI eval gates on real document pipelines — not demos.',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Product end-to-end',
      description:
        'APIs, async workers, payments, mobile clients, and customer workflows from requirements to release.',
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Cloud & containers',
      description:
        'Docker → ECR → EKS Fargate, plus on-prem Compose packages when customers need control of their infra.',
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Product engineer with 6 years building production SaaS — APIs, AI document systems, cloud, and on-prem delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/Avinash_Ranjan_Resume_2026.pdf"
              download
              className="interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="https://github.com/avi9r"
              target="_blank"
              rel="noreferrer"
              className="interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold shadow"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/avinashranjan9"
              target="_blank"
              rel="noreferrer"
              className="interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold shadow"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <Link
              to="/learn/dsa"
              className="interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/40 text-blue-700 dark:text-blue-300 font-semibold"
            >
              Browse lessons
            </Link>
          </div>
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
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Who I am</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am <strong className="text-purple-600 dark:text-purple-400">Avinash Ranjan</strong>, based in Kolkata.
                I ship features from stakeholder requirements through AWS production — comfortable owning the messy middle
                between product, AI, and ops.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">What I work on</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At <strong>DeepLogic AI (DLAI)</strong> I build document-automation SaaS for German enterprises:
                extraction, RAG similarity across 30,000+ documents, quality checks, and multi-channel delivery
                (SAP, Microsoft Graph, SFTP, SMTP).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Why this site exists</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                These lessons mirror how I learned on the job — visual, interactive, and tied to real systems —
                so visitors can practice the same ideas without the jargon wall.
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
                key={feature.title}
                variants={itemVariants}
                className={`p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive ${
                  index === 0 ? 'ring-2 ring-purple-500/30 dark:ring-purple-400/30' : ''
                }`}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    index === 0 ? 'from-purple-500/20 to-pink-500/20' : 'from-blue-500/20 to-cyan-500/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div
                    className={`p-3 rounded-lg ${
                      index === 0
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
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
