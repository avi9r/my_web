import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import HotProjects from './components/HotProjects'
import Education from './components/Education'
import Contact from './components/Contact'
import ThemeProvider from './context/ThemeContext'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <HotProjects />
          <Education />
          <Contact />
        </main>
        <motion.footer 
          className="bg-gray-100 dark:bg-gray-800 py-6 text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-600 dark:text-gray-400 relative z-10"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © {new Date().getFullYear()} Avinash Ranjan. All rights reserved.
          </motion.p>
        </motion.footer>
      </div>
    </ThemeProvider>
  )
}

export default App

