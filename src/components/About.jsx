import { useEffect, useRef, useState } from 'react'

const About = () => {
  const [stats, setStats] = useState({ clients: 0, products: 0, quality: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = { clients: 500, products: 150, quality: 100 }
    const duration = 2000
    const steps = 100
    const stepTime = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        clients: Math.floor(targets.clients * progress),
        products: Math.floor(targets.products * progress),
        quality: Math.floor(targets.quality * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setStats(targets)
      }
    }, stepTime)
  }

  return (
    <section className="py-xl bg-gray-100" id="about" ref={sectionRef}>
      <div className="container mx-auto px-md max-w-[1400px]">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/Okaz-logo.png"
              alt="About Store Okaz"
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] bg-gradient-to-br from-gold to-transparent rounded-full blur-[60px] opacity-50"></div>
          </div>

          {/* Text */}
          <div className="text-center md:text-right">
            <span className="inline-block text-gold font-semibold text-[0.95rem] uppercase tracking-[2px] mb-sm">
              من نحن
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-primary mb-sm leading-tight">
              ستور عكاظ<br/>قصة عبق وأصالة
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-md">
              في ستور عكاظ، نؤمن بأن العطر والبخور ليسا مجرد منتجات، بل هما تجربة حسية تنقلك إلى عالم من الفخامة والأصالة.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-md">
              نقدم لكم أجود أنواع البخور والعطور الشرقية المنتقاة بعناية، إلى جانب مجموعة راقية من الإكسسوارات الرجالية والنسائية التي تعكس ذوقكم الرفيع.
            </p>

            {/* Stats */}
            <div className="flex gap-lg mt-lg justify-center md:justify-start">
              <div className="text-center">
                <span className="block text-5xl font-extrabold text-primary leading-none mb-xs">
                  {stats.clients}<span className="text-3xl text-gold">%</span>
                </span>
                <span className="text-[0.95rem] text-gray-600">عميل سعيد</span>
              </div>
              <div className="text-center">
                <span className="block text-5xl font-extrabold text-primary leading-none mb-xs">
                  {stats.products}<span className="text-3xl text-gold">%</span>
                </span>
                <span className="text-[0.95rem] text-gray-600">منتج فاخر</span>
              </div>
              <div className="text-center">
                <span className="block text-5xl font-extrabold text-primary leading-none mb-xs">
                  {stats.quality}<span className="text-3xl text-gold">%</span>
                </span>
                <span className="text-[0.95rem] text-gray-600">جودة مضمونة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
