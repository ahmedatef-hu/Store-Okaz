import { useState, useEffect } from 'react'

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'محمد العلي',
      location: 'المنامة، البحرين',
      avatar: 'م',
      text: '"بخور رائع وجودة عالية! التوصيل كان سريع والتعامل راقي جداً. بالتأكيد سأطلب مرة أخرى."'
    },
    {
      id: 2,
      name: 'فاطمة الخالدي',
      location: 'الرفاع، البحرين',
      avatar: 'ف',
      text: '"العطور الشرقية عندهم أصلية وثابتة. السوار اللي طلبته كان فخم جداً وبسعر ممتاز!"'
    },
    {
      id: 3,
      name: 'أحمد السعيد',
      location: 'المحرق، البحرين',
      avatar: 'أ',
      text: '"خدمة ممتازة ومنتجات راقية. أنصح الجميع بالتعامل مع ستور عكاظ، تجربة تسوق مميزة!"'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const Stars = () => (
    <div className="flex gap-1 mb-md text-gold">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )

  return (
    <section className="py-xl bg-white relative">
      <div className="container mx-auto px-md max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <span className="inline-block text-gold font-semibold text-[0.95rem] uppercase tracking-[2px] mb-sm">
            آراء عملائنا
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-primary mb-sm leading-tight">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
            تجارب حقيقية من عملاء راضين
          </p>
        </div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-md mb-md">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white p-lg rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s both` }}
            >
              <Stars />
              <p className="text-lg leading-relaxed text-gray-600 mb-md italic">
                {review.text}
              </p>
              <div className="flex items-center gap-sm">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-0.5">
                    {review.name}
                  </h4>
                  <span className="text-sm text-gray-600">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Slider - Mobile */}
        <div className="md:hidden relative mb-md">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-full bg-white p-lg rounded-lg shadow-sm"
                >
                  <Stars />
                  <p className="text-lg leading-relaxed text-gray-600 mb-md italic">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-sm">
                    <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-0.5">
                        {review.name}
                      </h4>
                      <span className="text-sm text-gray-600">
                        {review.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-sm mt-lg">
          <button
            onClick={prevSlide}
            className="w-[50px] h-[50px] bg-gray-100 rounded-full flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-[50px] h-[50px] bg-gray-100 rounded-full flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews
