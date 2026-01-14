import Divider from './components/Divider'
import Links from './components/Footer'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Pricing from './pages/Pricing'
import Reviews from './pages/Reviews'

function App() {

  return (
    <>
    <Navbar />
     <Hero />
     <Divider color={'#E5E5E5'} width={80} />
     <About />
     <Divider color={'#E5E5E5'} width={80} />
     <Reviews />
     <Divider color={'#FEFEFE'} width={100} />
     <Links />
     <Divider color={'#E5E5E5'} width={95} />
    </>
  )
}

export default App
