import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/NavBar.css";
import logo from "/logo.png"

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setMenuOpen(false); // close menu after click
  };

  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop links */}
      <div id="navbar-links-container" className="desktop-menu">
        <a onClick={() => scrollToSection("works-section")}>Works</a>
        <a onClick={() => scrollToSection("introduction_div")}>About me</a>
        <a onClick={() => scrollToSection("testimonials_section")}>Testimonials</a>
        <a onClick={() => scrollToSection("CV")}>CV</a>
      </div>

      <div id="contact-me-button" className="desktop-menu">
        <Link to="/ContactMe" style={{textDecoration: "none"}}>Contact me</Link>
      </div>

      {/* Mobile menu button */}
      <button id="menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <a onClick={() => scrollToSection("works-section")}>Works</a>
          <a onClick={() => scrollToSection("introduction_div")}>About me</a>
          <a onClick={() => scrollToSection("testimonials_section")}>Testimonials</a>
          <a onClick={() => scrollToSection("CV")}>CV</a>
          <Link to="/ContactMe" style={{textDecoration: "none"}}>Contact me</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
