import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
      setIsMobile(mobile)
      return mobile
    }
    
    const isMobileDevice = checkMobile()
    if (isMobileDevice) return

    let rafId = null
    let cursorX = 0
    let cursorY = 0
    let followerX = 0
    let followerY = 0

    const updateMousePosition = (e) => {
      cursorX = e.clientX
      cursorY = e.clientY
    }

    const animate = () => {
      followerX += (cursorX - followerX) * 0.15
      followerY += (cursorY - followerY) * 0.15
      setMousePosition({ x: followerX, y: followerY })
      rafId = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    animate()
    
    const interactiveElements = document.querySelectorAll('a, button, .interactive')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      if (rafId) cancelAnimationFrame(rafId)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] transition-transform duration-50 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />
      {isHovering && (
        <div
          className="fixed top-0 left-0 w-12 h-12 border-2 border-blue-400 rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px) scale(1.1)`,
          }}
        />
      )}
    </>
  )
}

export default CustomCursor
