import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Hero/>
    <Footer />
  </>
)





