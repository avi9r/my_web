import { motion } from 'framer-motion'
import AboutSection from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden border-b border-gray-100 dark:border-gray-800"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Avinash <span className="gradient-text">Ranjan</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Product Engineer · Python · Django · Next.js · AI Systems
          </p>
        </div>
      </motion.div>

      <AboutSection />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
