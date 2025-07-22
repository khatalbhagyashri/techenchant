import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./testimonials/Testimonials";
import Blogs from "../Pages/BlogsPage";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Blogs />
    </>
  );
}

export default Home;
