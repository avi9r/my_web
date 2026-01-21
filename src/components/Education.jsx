import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (Data Science)',
      institution: 'Jain University',
      location: 'Bangalore, India',
      period: 'July 2022 - June 2024',
      icon: <FaGraduationCap />,
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Techno India Salt Lake',
      location: 'Kolkata, India',
      period: 'July 2017 - June 2020',
      icon: <FaGraduationCap />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8"
            >
              <motion.div 
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group interactive"
                whileHover={{ 
                  scale: 1.01,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                />
                
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {edu.institution}
                    </motion.p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {edu.location}
                    </p>
                    <motion.div 
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCalendarAlt />
                      <span>{edu.period}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

