import { Link, useLocation, useNavigate } from "react-router-dom";
import "../components/NavBar.css";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // already on home → just scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // on another page → go home and pass section ID
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>

      <div id="navbar-links-container">
        <a onClick={() => scrollToSection("works-section")}>Works</a>
        <a onClick={() => scrollToSection("introduction_div")}>About me</a>
        <a onClick={() => scrollToSection("testimonials_section")}>Testimonials</a>
        <a onClick={() => scrollToSection("CV")}>CV</a>
      </div>

      <div id="contact-me-button">
        <Link to="/ContactMe" style={{textDecoration: "none"}}>Contact me</Link>
      </div>

      <button id="menu">☰</button>
    </div>
  );
}

export default NavBar;
