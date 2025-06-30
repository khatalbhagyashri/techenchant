import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Services from '../../components/Services'
import Projects from '../../components/Projects'
import Testimonials from '../../components/testimonials/Testimonials'
import Blogs from '../../Pages/Blogs'
import Footer from '../../components/Footer'

function index() {
  return (
    <div>
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Blogs />
        <Footer />
    </div>
  )
}

export default index