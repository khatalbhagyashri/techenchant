import Header from "../../components/Header";
import About from "../../components/About";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Blogs from "../BlogsPage";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Testimonials from "../../components/testimonials";

function HomePage() {
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
  );
}

export default HomePage;
