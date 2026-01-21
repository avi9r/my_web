import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'avinashranjan633@gmail.com',
      link: 'mailto:avinashranjan633@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/avinashranjan9/',
      link: 'https://www.linkedin.com/in/avinashranjan9/',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bangalore, India',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Open to strategic partnerships, collaborations, and opportunities to drive innovation together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center relative overflow-hidden group interactive ${
                  info.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => info.link && window.open(info.link, '_blank')}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl text-blue-600 dark:text-blue-400 mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {info.label}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-center text-white relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="mb-6 text-blue-100">
                Let's explore how AI innovation and strategic technology can drive your business forward.
              </p>
              <motion.a
                href="mailto:avinashranjan633@gmail.com"
                className="interactive inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors relative overflow-hidden group/btn"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                />
                <span className="relative z-10">
                  Send Message
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

