const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-primary-dark text-cream pt-xl relative">
      {/* Wave */}
      <div className="absolute top-0 left-0 right-0 h-[60px] -translate-y-[99%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-primary-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-md max-w-[1400px]">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-lg">
          {/* About */}
          <div>
            <div className="mb-md">
              <img src="/assets/Okaz-logo.png" alt="Store Okaz" className="h-[60px]" />
            </div>
            <p className="text-beige leading-relaxed">
              متجر البخور والعطور الشرقية والإكسسوارات الفاخرة في البحرين
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-md">روابط سريعة</h4>
            <ul className="space-y-xs">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleLinkClick(e, '#hero')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleLinkClick(e, '#products')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold text-white mb-md">التصنيفات</h4>
            <ul className="space-y-xs">
              <li>
                <a
                  href="#incense"
                  onClick={(e) => handleLinkClick(e, '#categories')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  البخور
                </a>
              </li>
              <li>
                <a
                  href="#perfume"
                  onClick={(e) => handleLinkClick(e, '#categories')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  العطور
                </a>
              </li>
              <li>
                <a
                  href="#men"
                  onClick={(e) => handleLinkClick(e, '#categories')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  إكسسوارات رجالية
                </a>
              </li>
              <li>
                <a
                  href="#women"
                  onClick={(e) => handleLinkClick(e, '#categories')}
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  إكسسوارات نسائية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-md">تواصل معنا</h4>
            <ul className="space-y-xs">
              <li>
                <a
                  href="tel:+97333141066"
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  +973 3314 1066
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/97333141066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  واتساب
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@store.okaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beige transition-all duration-300 inline-block hover:text-gold hover:-translate-x-1"
                >
                  تيك توك
                </a>
              </li>
              <li className="text-beige">مملكة البحرين 🇧🇭</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-beige/20 to-transparent my-lg"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-md pb-lg">
          <p className="text-beige text-center md:text-right">
            © {currentYear} ستور عكاظ. جميع الحقوق محفوظة.
          </p>

          {/* Social Links */}
          <div className="flex gap-sm">
            <a
              href="https://www.tiktok.com/@store.okaz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-beige/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold hover:-translate-y-1"
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/97333141066"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-beige/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
