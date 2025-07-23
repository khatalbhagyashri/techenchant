import Header from "../../components/Header";
import About from "../../components/About";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
// import Blogs from "../BlogsPage";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Testimonials from "../../components/Testimonials";

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default HomePage;
