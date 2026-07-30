const SocialSection = () => {
  return (
    <section className="py-xl bg-gray-100">
      <div className="container mx-auto px-md max-w-[1400px]">
        <div className="max-w-[600px] mx-auto bg-white p-xl rounded-xl text-center shadow-lg relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-gradient-to-br from-primary/5 to-transparent rounded-full"></div>

          {/* Icon */}
          <div className="w-[100px] h-[100px] bg-gradient-to-br from-black to-gray-800 rounded-[20px] flex items-center justify-center mx-auto mb-md text-white transition-all duration-300 hover:scale-110 hover:rotate-[5deg]">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold text-primary mb-sm">
            تابعنا على تيك توك
          </h2>
          <p className="text-lg text-gray-600 mb-lg">
            اكتشف آخر المنتجات والعروض الحصرية
          </p>

          <a
            href="https://www.tiktok.com/@store.okaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-xs px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-gold to-[#d4a855] text-white shadow-[0_8px_24px_rgba(199,165,91,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(199,165,91,0.5)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-[600ms]"
          >
            <span>تابعنا على تيك توك</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialSection
