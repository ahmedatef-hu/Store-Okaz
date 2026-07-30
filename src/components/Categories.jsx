const Categories = () => {
  const categories = [
    {
      id: 'incense',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v20M12 2c-1.5 0-2 1.5-2 3s.5 3 2 3 2-1.5 2-3-.5-3-2-3z"/>
          <path d="M8 8c-2 0-3 2-3 4s1 4 4 4M16 8c2 0 3 2 3 4s-1 4-4 4"/>
        </svg>
      ),
      title: 'البخور',
      desc: 'بخور فاخر من أجود الأنواع'
    },
    {
      id: 'perfume',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="7" y="13" width="10" height="9" rx="2"/>
          <path d="M12 13V7M9 7h6M10 2l2 5 2-5"/>
        </svg>
      ),
      title: 'العطور',
      desc: 'عطور شرقية أصيلة وفاخرة'
    },
    {
      id: 'men',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="8" r="5"/>
          <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/>
        </svg>
      ),
      title: 'إكسسوارات رجالية',
      desc: 'قطع مميزة تعكس أناقتك'
    },
    {
      id: 'women',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="8" r="5"/>
          <path d="M12 13v8m-4 0h8"/>
        </svg>
      ),
      title: 'إكسسوارات نسائية',
      desc: 'إكسسوارات راقية لكل مناسبة'
    }
  ]

  return (
    <section className="py-xl bg-gray-100" id="categories">
      <div className="container mx-auto px-md max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <span className="inline-block text-gold font-semibold text-[0.95rem] uppercase tracking-[2px] mb-sm">
            تصنيفاتنا المميزة
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-primary mb-sm leading-tight">
            اكتشف عالماً من الفخامة
          </h2>
          <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
            منتجات منتقاة بعناية لتلبية ذوقك الرفيع
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {categories.map((category, index) => (
            <div
              key={category.id}
              data-category={category.id}
              className="bg-white rounded-lg p-lg text-center cursor-pointer relative overflow-hidden transition-all duration-300 shadow-sm hover:-translate-y-2.5 hover:shadow-lg before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary before:to-primary-light before:opacity-0 before:transition-opacity before:duration-300 before:z-[1] hover:before:opacity-95 group"
              style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s both` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-md text-white transition-all duration-300 relative z-[2] group-hover:bg-gold group-hover:scale-110 group-hover:rotate-[10deg] group-hover:shadow-[0_8px_24px_rgba(199,165,91,0.4)]">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-xs relative z-[2] transition-colors duration-300 group-hover:text-white">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 relative z-[2] transition-colors duration-300 group-hover:text-cream">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
