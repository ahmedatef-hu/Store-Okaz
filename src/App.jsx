import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Features from './components/Features'
import About from './components/About'
import Reviews from './components/Reviews'
import DeliveryBanner from './components/DeliveryBanner'
import SocialSection from './components/SocialSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Features />
      <About />
      <Reviews />
      <DeliveryBanner />
      <SocialSection />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
