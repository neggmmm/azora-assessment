import Divider from './components/Divider'
import Links from './components/Links'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Reviews from './pages/Reviews'

function App() {

  return (
    <>
    <Navbar />
     <Hero />
     <Divider color={'#AAA'} width={80} />
     <About />
     <Divider color={'#AAA'} width={80} />
     <Reviews />
     <Divider color={'#FEFEFE'} width={100} />
     <Links />
     <Divider color={'#AAA'} width={95} />
     <Footer />
    </>
  )
}

export default App
