const DeliveryBanner = () => {
  return (
    <section className="py-xl bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='1' fill='rgba(244,238,214,0.1)'/></svg>")`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-md max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-lg relative z-10 text-center md:text-right">
          {/* Icon */}
          <div className="text-gold animate-[float_3s_ease-in-out_infinite]">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-xs">
              نوصل إلى جميع أنحاء البحرين
            </h2>
            <p className="text-xl text-cream">
              توصيل سريع وآمن لجميع المناطق
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryBanner
