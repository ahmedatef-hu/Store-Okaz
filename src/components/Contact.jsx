import { useState } from 'react'

const Contact = () => {
  const [notification, setNotification] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.')
    setTimeout(() => {
      setNotification(null)
    }, 3000)
    
    e.target.reset()
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <section className="py-xl bg-white" id="contact">
      <div className="container mx-auto px-md max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <span className="inline-block text-gold font-semibold text-[0.95rem] uppercase tracking-[2px] mb-sm">
            تواصل معنا
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-primary mb-sm leading-tight">
            نسعد بخدمتك
          </h2>
          <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
            تواصل معنا عبر أي وسيلة تناسبك
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-xl">
          {/* Contact Info */}
          <div>
            {/* Phone */}
            <div className="flex gap-md mb-lg">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-1">الهاتف</h4>
                <a
                  href="tel:+97333141066"
                  className="text-gray-600 transition-colors duration-300 hover:text-gold"
                >
                  +973 3314 1066
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-md mb-lg">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-1">واتساب</h4>
                <a
                  href="https://wa.me/97333141066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-gold"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-md mb-lg">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-1">الموقع</h4>
                <p className="text-gray-600">مملكة البحرين 🇧🇭</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-100 p-lg rounded-lg">
            <div className="mb-md">
              <input
                type="text"
                className="w-full p-4 border-2 border-transparent bg-white rounded-sm font-cairo text-base transition-all duration-300 resize-y focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(14,57,48,0.1)]"
                placeholder="الاسم الكامل"
                required
              />
            </div>
            <div className="mb-md">
              <input
                type="email"
                className="w-full p-4 border-2 border-transparent bg-white rounded-sm font-cairo text-base transition-all duration-300 resize-y focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(14,57,48,0.1)]"
                placeholder="البريد الإلكتروني"
                required
              />
            </div>
            <div className="mb-md">
              <input
                type="tel"
                className="w-full p-4 border-2 border-transparent bg-white rounded-sm font-cairo text-base transition-all duration-300 resize-y focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(14,57,48,0.1)]"
                placeholder="رقم الهاتف"
                required
              />
            </div>
            <div className="mb-md">
              <textarea
                rows="5"
                className="w-full p-4 border-2 border-transparent bg-white rounded-sm font-cairo text-base transition-all duration-300 resize-y focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(14,57,48,0.1)]"
                placeholder="رسالتك"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-xs px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-gold to-[#d4a855] text-white shadow-[0_8px_24px_rgba(199,165,91,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(199,165,91,0.5)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-[600ms]"
            >
              <span>إرسال الرسالة</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div
          className="fixed top-[100px] right-[30px] bg-gradient-to-br from-primary-dark to-primary-light text-cream px-8 py-4 rounded-md shadow-[0_8px_32px_rgba(14,57,48,0.3)] z-[10000] font-semibold"
          style={{
            animation: 'slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s'
          }}
        >
          {notification}
        </div>
      )}
    </section>
  )
}

export default Contact
