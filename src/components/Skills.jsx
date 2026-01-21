import { motion } from 'framer-motion'
import { 
  FaPython, FaPhp, FaJs, FaReact, FaAws, FaDocker,
  FaGitAlt, FaDatabase, FaBrain, FaCode
} from 'react-icons/fa'
import { SiDjango, SiLaravel, SiPostgresql, SiMysql, SiKubernetes, SiOpenai } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'PHP', icon: <FaPhp />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
      ],
    },
    {
      title: 'AI/ML & LLM Technologies',
      skills: [
        { name: 'Large Language Models (LLMs)', icon: <SiOpenai />, level: 90 },
        { name: 'Prompt Engineering', icon: <FaBrain />, level: 88 },
        { name: 'Vector Embeddings', icon: <FaCode />, level: 85 },
        { name: 'RAG Systems', icon: <FaBrain />, level: 85 },
        { name: 'OpenAI API', icon: <SiOpenai />, level: 90 },
        { name: 'AWS Bedrock', icon: <FaAws />, level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Django', icon: <SiDjango />, level: 95 },
        { name: 'Laravel', icon: <SiLaravel />, level: 85 },
        { name: 'React.js', icon: <FaReact />, level: 90 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90 },
        { name: 'MySQL', icon: <SiMysql />, level: 85 },
        { name: 'Vector DBs (pgvector, Pinecone)', icon: <FaDatabase />, level: 85 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 88 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 80 },
        { name: 'AWS', icon: <FaAws />, level: 85 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
      ],
    },
  ]

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="mb-6 group"
        whileHover={{ scale: 1.02, x: 5 }}
      >
        <div className="flex items-center justify-between mb-2">
          <motion.div 
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-600 dark:text-blue-400">
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </motion.div>
          <motion.span 
            className="text-sm text-gray-600 dark:text-gray-400 font-bold"
            whileHover={{ scale: 1.2, color: "#9333ea" }}
          >
            {skill.level}%
          </motion.span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full relative overflow-hidden"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-blue-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity"
            />
          </motion.div>
        </div>
      </motion.div>
    )
  }

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
            Core <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Strategic expertise that drives business innovation and competitive advantage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, type: "spring" }}
              whileHover={{ 
                y: -5, 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive ${
                category.title.includes('AI/ML') ? 'ring-2 ring-purple-500/50 dark:ring-purple-400/50' : ''
              }`}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  category.title.includes('AI/ML') 
                    ? 'from-purple-500/10 to-pink-500/10' 
                    : 'from-blue-500/10 to-cyan-500/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10">
              <motion.h3 
                className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>
              {category.skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
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
