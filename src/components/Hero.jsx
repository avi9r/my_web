import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaGithub, FaDownload } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import TypingAnimation from './TypingAnimation'

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated gradient orbs - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20 dark:opacity-15"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-20 dark:opacity-15"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '60%', right: '10%' }}
        />
      </div>

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(147, 51, 234, 0.3) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.3) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Floating particles - reduced for performance */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}

      {/* Shimmer effect - removed for performance */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              className="inline-block p-4 rounded-full bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm mb-6 border border-blue-200/50 dark:border-blue-700/50 shadow-xl"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <HiCode className="text-4xl text-blue-600 dark:text-blue-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text animate-gradient">
              Avinash Ranjan
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-2 font-medium min-h-[2rem]"
          >
            <TypingAnimation 
              words={['Founder & AI Innovation Leader', 'Tech Entrepreneur', 'AI Solutions Architect', 'Business Technology Strategist']}
              speed={100}
              deleteSpeed={50}
              delay={2000}
            />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building the future of <strong className="text-purple-600 dark:text-purple-400">AI-powered business solutions</strong>. 
            Transforming enterprises through intelligent automation, cutting-edge LLM technologies, and scalable cloud infrastructure. 
            Leading innovation that drives real business value and competitive advantage.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://www.linkedin.com/in/avinashranjan9/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg backdrop-blur-sm border border-blue-500/30 relative overflow-hidden group"
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center gap-2">
                <FaLinkedin />
                LinkedIn
              </span>
            </motion.a>
            <motion.a
              href="mailto:avinashranjan633@gmail.com"
              className="interactive flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-lg backdrop-blur-sm border border-purple-500/30 relative overflow-hidden group"
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center gap-2">
                <FaEnvelope />
                Email
              </span>
            </motion.a>
            <motion.a
              href="/Avinash Ranjan.pdf"
              download="Avinash_Ranjan_Profile.pdf"
              className="interactive flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 shadow-lg backdrop-blur-sm border border-gray-700/30 relative overflow-hidden group"
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload />
                Download Profile
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 text-2xl"
          >
            <motion.a
              href="https://www.linkedin.com/in/avinashranjan9/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive text-blue-600 dark:text-blue-400 relative group"
              whileHover={{ scale: 1.5, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <FaLinkedin className="relative z-10" />
            </motion.a>
            <motion.a
              href="mailto:avinashranjan633@gmail.com"
              className="interactive text-purple-600 dark:text-purple-400 relative group"
              whileHover={{ scale: 1.5, rotate: -360 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <FaEnvelope className="relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-500 rounded-full flex justify-center backdrop-blur-sm bg-white/10 dark:bg-gray-800/10">
            <motion.div 
              className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
