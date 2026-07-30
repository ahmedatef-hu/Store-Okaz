import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activeLink, setActiveLink] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]')
      let currentSection = '#hero'

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150
        const sectionHeight = section.offsetHeight
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          currentSection = `#${section.getAttribute('id')}`
        }
      })

      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#products', label: 'منتجاتنا' },
    { href: '#incense', label: 'البخور' },
    { href: '#accessories', label: 'الإكسسوارات' },
    { href: '#about', label: 'من نحن' },
    { href: '#contact', label: 'تواصل معنا' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-white/35 backdrop-blur-[60px] backdrop-saturate-[200%] backdrop-brightness-[115%] backdrop-contrast-[110%] py-sm shadow-[0_10px_40px_rgba(14,57,48,0.15),0_4px_12px_rgba(14,57,48,0.08),inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(255,255,255,0.5)] border border-white/40 mx-md mt-sm rounded-xl'
          : 'bg-transparent py-md'
      }`}
    >
      <div className="container mx-auto px-md max-w-[1400px]">
        <div className={`flex items-center justify-between gap-md transition-all duration-300 ${scrolled ? 'px-sm' : ''}`}>
          {/* Logo */}
          <div className="nav-logo">
            <img
              src="/assets/Okaz-logo.png"
              alt="Store Okaz Logo"
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-[50px]'}`}
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-md items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-medium px-sm py-xs rounded-sm relative transition-all duration-300 ${
                    scrolled ? 'text-primary' : 'text-white'
                  } ${
                    activeLink === link.href ? 'after:w-[80%]' : 'after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:right-1/2 after:h-0.5 after:bg-gold after:transition-all after:duration-300 after:translate-x-1/2 hover:text-gold hover:after:w-[80%]`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-sm">
            {/* Search Button */}
            <button
              className={`w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-[10px] transition-all duration-300 border ${
                scrolled
                  ? 'text-primary bg-primary/8 border-primary/10'
                  : 'text-white bg-white/15 border-white/20'
              } hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_16px_rgba(14,57,48,0.2)]`}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            {/* Cart Button */}
            <button
              className={`w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-[10px] transition-all duration-300 border relative ${
                scrolled
                  ? 'text-primary bg-primary/8 border-primary/10'
                  : 'text-white bg-white/15 border-white/20'
              } hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_16px_rgba(14,57,48,0.2)]`}
              aria-label="Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-gold text-white text-[0.7rem] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/97333141066"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white px-md py-xs rounded-lg flex items-center gap-xs font-semibold transition-all duration-300 shadow-[0_4px_12px_rgba(37,211,102,0.3)] border border-white/20 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden flex flex-col gap-[5px] w-11 h-11 items-center justify-center rounded-sm backdrop-blur-[10px] border ${
                scrolled
                  ? 'bg-primary/8 border-primary/10'
                  : 'bg-white/15 border-white/20'
              }`}
              aria-label="Menu"
            >
              <span
                className={`w-6 h-0.5 rounded-sm transition-all duration-300 ${
                  scrolled ? 'bg-primary' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              ></span>
              <span
                className={`w-6 h-0.5 rounded-sm transition-all duration-300 ${
                  scrolled ? 'bg-primary' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`w-6 h-0.5 rounded-sm transition-all duration-300 ${
                  scrolled ? 'bg-primary' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed top-[90px] w-[280px] h-[calc(100vh-100px)] bg-white/95 backdrop-blur-[30px] backdrop-saturate-[180%] flex-col p-md shadow-[0_8px_32px_rgba(14,57,48,0.15)] transition-all duration-300 z-[999] rounded-lg mr-md border border-white/50 ${
            mobileMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`w-full p-sm text-primary font-medium text-lg block transition-all duration-300 rounded-sm relative ${
                  activeLink === link.href ? 'after:w-[80%]' : 'after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:right-1/2 after:h-0.5 after:bg-gold after:transition-all after:duration-300 after:translate-x-1/2 hover:text-gold hover:after:w-[80%]`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
