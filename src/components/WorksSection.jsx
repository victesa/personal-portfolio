import React, { useRef, useState, useEffect } from "react";
import "./WorksSection.css";
import AllProjects from "../../src/assets/WorksData"; // Adjust path as needed
import ProjectCard from "./ProjectCard";
import { getHoverGradient } from "../utils"; // Adjust path based on your project structure

const projects = AllProjects;
const defaultBackground = "linear-gradient(to bottom, #0D0D0D, #0D0D0D)"; // Matches Works.jsx

export default function WorksSection() {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [background, setBackground] = useState(defaultBackground);

  // Scroll handler for Table of Contents
  useEffect(() => {
    const toc = document.querySelector(".works_toc");
    const section = document.querySelector(".works-section");
    const offset = 20;

    function onScroll() {
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          setActiveIndex(i);
        }
      });

      if (toc && section) {
        const sRect = section.getBoundingClientRect();
        const tHeight = toc.offsetHeight;
        if (sRect.top <= offset && sRect.bottom >= tHeight + offset) {
          toc.classList.add("fixed");
        } else {
          toc.classList.remove("fixed");
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to project on ToC click
  const scrollToProject = (i) => {
    const el = sectionRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Handle hover to change background
  const handleHover = (hoverColor) => {
    setBackground(getHoverGradient(hoverColor));
  };

  // Handle leave to reset background
  const handleLeave = () => {
    setBackground(defaultBackground);
  };

  return (
    <div
    id="works-section"
      className="works-section"
      style={{ marginTop: "80px", background: background }}
    >
      <p
        id="tech_title"
        style={{ marginBottom: "100px", fontWeight: 400, fontSize: "26px" }}
      >
        Featured Works
      </p>

      <div className="works_column">
        {projects.map((project, i) => (
          <div
            key={i}
            className="card_container"
            ref={(el) => (sectionRefs.current[i] = el)}
          >
            <ProjectCard
              project={project}
              onHover={() => handleHover(project.hoverColor)}
              onLeave={handleLeave}
            />
          </div>
        ))}
      </div>

      <div className="works_toc">
        {projects.map((p, i) => (
          <p
            key={i}
            className={`toc_text ${i === activeIndex ? "active_toc" : ""}`}
            onClick={() => scrollToProject(i)}
          >
            {p.title}
          </p>
        ))}
      </div>
    </div>
  );
}