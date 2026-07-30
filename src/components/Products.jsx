import { useState } from 'react'

const Products = () => {
  const [notification, setNotification] = useState(null)

  const products = [
    {
      id: 1,
      name: 'بخور العود الملكي',
      desc: 'بخور فاخر من خشب العود الطبيعي',
      price: '25.000 د.ب',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop&q=80',
      badge: 'جديد',
      badgeType: 'new'
    },
    {
      id: 2,
      name: 'عطر الأصالة الشرقي',
      desc: 'عطر شرقي فاخر برائحة آسرة',
      price: '35.000 د.ب',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop',
      badge: 'الأكثر طلباً',
      badgeType: 'hot'
    },
    {
      id: 3,
      name: 'ساعة رجالية فاخرة',
      desc: 'ساعة كلاسيكية بتصميم عصري',
      price: '45.000 د.ب',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop',
      badge: null,
      badgeType: null
    },
    {
      id: 4,
      name: 'سوار نسائي راقي',
      desc: 'سوار أنيق مطلي بالذهب',
      price: '28.000 د.ب',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
      badge: null,
      badgeType: null
    }
  ]

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const handleAddToCart = (productName) => {
    showNotification('تمت الإضافة إلى السلة بنجاح!')
  }

  return (
    <section className="py-xl bg-white" id="products">
      <div className="container mx-auto px-md max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <span className="inline-block text-gold font-semibold text-[0.95rem] uppercase tracking-[2px] mb-sm">
            الأكثر مبيعاً
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-primary mb-sm leading-tight">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
            اختيارات خاصة من أرقى المنتجات
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative hover:-translate-y-2 hover:shadow-lg group"
              style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s both` }}
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-md right-md px-sm py-xs rounded-sm text-[0.85rem] font-semibold z-10 ${
                  product.badgeType === 'hot' ? 'bg-gold' : 'bg-primary'
                } text-white`}>
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="w-full h-[300px] bg-gradient-to-br from-beige to-cream flex items-center justify-center overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-md">
                <h3 className="text-[1.35rem] font-bold text-primary mb-xs">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-md text-[0.95rem]">
                  {product.desc}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between gap-sm">
                  <span className="text-2xl font-bold text-gold">
                    {product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product.name)}
                    className="bg-primary text-white px-md py-xs rounded-sm flex items-center gap-xs font-semibold text-[0.9rem] transition-all duration-300 hover:bg-primary-light hover:scale-105 hover:shadow-md"
                  >
                    <span>أضف للسلة</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default Products
