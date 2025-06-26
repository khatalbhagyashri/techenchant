import React from "react";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./testimonials/Testimonials";
import HeroSection from "./HeroSection";
import Blogs from "./Blogs";

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
