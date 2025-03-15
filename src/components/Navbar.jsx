import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = ({ handleScroll, heroRef, aboutMeRef, servicesRef, blogRef, openSourceRef, footerRef }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleNavbar = () => setMobileOpen(!mobileOpen);

  // Section refs mapping
  const sectionRefs = { heroRef, aboutMeRef, servicesRef, blogRef, openSourceRef, footerRef };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref?.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(key.replace("Ref", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="px-4 flex justify-between items-center">
        {/* Logo */}
        <img className="h-15 w-15 lg:ml-8 lg:mt-10 " src={logo} alt="Logo" />

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex pl-16 pr-52 mt-10 space-x-8">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleScroll(sectionRefs[id + "Ref"])}
                style={{
                  cursor: "pointer",
                  color: activeSection === id ? "black" : "gray",
                  fontWeight: activeSection === id ? "bold" : "normal",
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* "Work With Me" Button */}
        <button 
          onClick={() => handleScroll(footerRef)}
          className="hidden lg:flex py-2 px-5 border rounded-md items-center cursor-pointer mt-10 mr-20"
        >
          <ArrowRight className="pr-2" />
          WORK WITH ME
        </button>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={toggleNavbar}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col items-center lg:hidden">
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id} className="py-4">
                <button
                  onClick={() => {
                    handleScroll(sectionRefs[id + "Ref"]);
                    toggleNavbar();
                  }}
                  style={{
                    color: activeSection === id ? "black" : "white",
                    fontWeight: activeSection === id ? "bold" : "normal",
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => {
              handleScroll(footerRef);
              toggleNavbar();
            }} 
            className="py-2 px-4 border border-white text-white rounded-md mt-4"
          >
            WORK WITH ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
