import { useEffect, useRef } from 'react'

const Hero = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const particlesContainer = particlesRef.current
    if (!particlesContainer) return

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.style.position = 'absolute'
      particle.style.width = Math.random() * 4 + 2 + 'px'
      particle.style.height = particle.style.width
      particle.style.background = 'rgba(199, 165, 91, 0.5)'
      particle.style.borderRadius = '50%'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s linear infinite`
      particle.style.animationDelay = Math.random() * 5 + 's'
      particlesContainer.appendChild(particle)
    }
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-[calc(6rem+80px)] pb-xl" id="hero">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {/* Blobs */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] -top-[10%] -right-[10%] animate-[float_20s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, rgba(199, 165, 91, 0.3), transparent)' }}
        ></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] -bottom-[10%] -left-[10%] animate-[float_20s_ease-in-out_infinite_7s]"
          style={{ background: 'radial-gradient(circle, rgba(244, 238, 214, 0.2), transparent)' }}
        ></div>
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[80px] top-[40%] left-1/2 animate-[float_20s_ease-in-out_infinite_14s]"
          style={{ background: 'radial-gradient(circle, rgba(29, 93, 80, 0.3), transparent)' }}
        ></div>

        {/* Particles */}
        <div ref={particlesRef} className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-md max-w-[1400px]">
        <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-xl items-center">
          {/* Hero Text */}
          <div className="text-center md:text-right">
            <div className="inline-block glass px-md py-xs rounded-lg text-cream font-medium mb-md border border-white/20 animate-[fadeInUp_0.8s_ease_0.2s_both]">
              ستور عكاظ · البحرين 🇧🇭
            </div>
            
            <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-tight mb-md text-white">
              <span className="block animate-[fadeInUp_0.8s_ease_0.3s_both]">عبق الأصالة</span>
              <span className="block text-gradient animate-[fadeInUp_0.8s_ease_0.4s_both]">ولمسة من الفخامة</span>
            </h1>
            
            <p className="text-xl leading-relaxed text-cream mb-lg max-w-[600px] mx-auto md:mx-0 animate-[fadeInUp_0.8s_ease_0.5s_both]">
              اكتشف عالماً من البخور الفاخر والعطور الشرقية الأصيلة والإكسسوارات الراقية<br/>
              نقدم لك تجربة تسوق استثنائية مع التوصيل لجميع أنحاء البحرين
            </p>
            
            <div className="flex gap-md flex-wrap justify-center md:justify-start animate-[fadeInUp_0.8s_ease_0.6s_both]">
              <a
                href="#products"
                onClick={(e) => handleLinkClick(e, '#products')}
                className="inline-flex items-center gap-xs px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-gold to-[#d4a855] text-white shadow-[0_8px_24px_rgba(199,165,91,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(199,165,91,0.5)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-[600ms]"
              >
                <span>تسوق الآن</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              
              <a
                href="#categories"
                onClick={(e) => handleLinkClick(e, '#categories')}
                className="inline-flex items-center gap-xs px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 glass text-white border-2 border-white/30 hover:bg-white/25 hover:border-white/50 hover:-translate-y-1"
              >
                <span>تصفح المنتجات</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-[fadeIn_1s_ease_0.7s_both]">
            <div className="glass rounded-xl p-lg border border-white/20 shadow-xl">
              <img
                src="/assets/Okaz-logo.png"
                alt="Store Okaz"
                className="w-full h-auto animate-[floating_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-[fadeIn_1s_ease_1s_both]">
        <div className="w-[30px] h-[50px] border-2 border-cream/50 rounded-[20px] relative">
          <div className="w-1 h-2.5 bg-gold rounded-sm absolute top-2.5 left-1/2 -translate-x-1/2 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
