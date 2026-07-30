import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.pageYOffset / scrollHeight) * 100
      setWidth(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="fixed top-0 right-0 h-1 z-[1001] transition-[width] duration-100"
      style={{
        width: `${width}%`,
        background: 'linear-gradient(90deg, #0e3930, #c7a55b)'
      }}
    />
  )
}

export default ScrollProgress
