import React, { createContext, useContext, useEffect } from 'react'
import { useTheme } from '../../../context/ThemeContext'

interface DarkModeContextType {
  isDark: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

/** Bridges portfolio ThemeContext into DSA components that call useDarkMode(). */
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
  }, [isDark])

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode: toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider')
  }
  return context
}
