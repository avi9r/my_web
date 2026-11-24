import React, { useEffect } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

/** Nested under portfolio shell — curriculum sidebar lives in RootLayout. */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark } = useTheme()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
    return () => document.body.classList.remove('dark-mode')
  }, [isDark])

  return (
    <div className="layout dsa-nested">
      <main className="main-content dsa-main-full">{children}</main>
    </div>
  )
}
