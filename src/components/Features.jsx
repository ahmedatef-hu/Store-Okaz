const Features = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'توصيل سريع',
      desc: 'نوصل إلى جميع أنحاء البحرين'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'جودة مضمونة',
      desc: 'منتجات عالية الجودة فقط'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
          <path d="M22 11l-3 3-2-2"/>
        </svg>
      ),
      title: 'منتجات أصلية',
      desc: 'ضمان الأصالة 100%'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h8M8 14h4"/>
        </svg>
      ),
      title: 'دعم سريع',
      desc: 'فريق دعم متواجد دائماً'
    }
  ]

  return (
    <section className="py-xl bg-white">
      <div className="container mx-auto px-md max-w-[1400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-lg bg-gray-100 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-md text-white transition-all duration-300 hover:rotate-y-360 hover:bg-gold">
                {feature.icon}
              </div>
              <h3 className="text-[1.35rem] font-bold text-primary mb-xs">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
