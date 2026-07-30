import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[30px] left-[30px] w-[50px] h-[50px] bg-primary text-white rounded-full flex items-center justify-center shadow-lg z-[100] transition-all duration-300 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      } hover:bg-gold hover:-translate-y-1`}
      aria-label="Back to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  )
}

export default BackToTop
