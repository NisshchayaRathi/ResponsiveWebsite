import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Blog from "./components/Blog"; 
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

const App = () => {
  // Create refs for smooth scrolling
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);       
  const openSourceRef = useRef(null);  
  const footerRef = useRef(null);

  const handleScroll = (elmRef) => {
    if (elmRef?.current) {
      const navbarHeight = 160;
      window.scrollTo({ top: elmRef.current.offsetTop -navbarHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        handleScroll={handleScroll}
        heroRef={heroRef}
        aboutMeRef={aboutMeRef}
        servicesRef={servicesRef}
        blogRef={blogRef}              
        openSourceRef={openSourceRef}  
        footerRef={footerRef}

      />

      <div className="max-w-7xl mx-auto pt-16 px-6">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        </div>
        <div ref={blogRef}> 
          <Blog />
        </div>
        <div className="max-w-7xl mx-auto pt-16 px-6" ref={openSourceRef}>
          <OpenSource />
        </div>

      <div className="max-w-7xl mx-auto pt-20 px-6" ref={footerRef}>
        <Footer />
        <Footer2 />
      </div>
    </>
  );
};

export default App;
