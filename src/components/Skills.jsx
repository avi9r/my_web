import { motion } from 'framer-motion'
import {
  FaPython, FaJs, FaReact, FaAws, FaDocker, FaGitAlt, FaDatabase, FaBrain, FaCode,
} from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiFastapi, SiKubernetes, SiOpenai, SiRedis, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Product & Backend',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'Django / DRF', icon: <SiDjango />, level: 95 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 88 },
        { name: 'Celery / Redis', icon: <SiRedis />, level: 90 },
      ],
    },
    {
      title: 'AI & Agents',
      skills: [
        { name: 'RAG / Vector Search', icon: <FaBrain />, level: 90 },
        { name: 'LangChain / LlamaIndex', icon: <FaCode />, level: 85 },
        { name: 'LLMs (Claude, GPT)', icon: <SiOpenai />, level: 90 },
        { name: 'AI Evals', icon: <FaBrain />, level: 88 },
      ],
    },
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React / TypeScript', icon: <FaReact />, level: 88 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'Expo / React Native', icon: <FaReact />, level: 80 },
      ],
    },
    {
      title: 'Data',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 92 },
        { name: 'pgvector / Pinecone', icon: <FaDatabase />, level: 88 },
        { name: 'Redis', icon: <SiRedis />, level: 90 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (EKS, Fargate, RDS)', icon: <FaAws />, level: 88 },
        { name: 'Docker', icon: <FaDocker />, level: 90 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 82 },
        { name: 'Git / CI/CD', icon: <FaGitAlt />, level: 90 },
      ],
    },
  ]

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 group"
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
          <span className="text-blue-600 dark:text-blue-400">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stack from the 2026 resume — what I teach from
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, type: 'spring' }}
              whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
              className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive ${
                category.title.includes('AI') ? 'ring-2 ring-purple-500/50 dark:ring-purple-400/50' : ''
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  category.title.includes('AI') ? 'from-purple-500/10 to-pink-500/10' : 'from-blue-500/10 to-cyan-500/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">{category.title}</h3>
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
