import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard"; // Adjust path as needed
import "./Works.css";
import AllProjects from "../src/assets/WorksData"; // Adjust path as needed
import { getHoverGradient } from "./utils";
import Footer from "./components/Footer";

const projects = AllProjects; // Customize as needed
const defaultBackground = "linear-gradient(to bottom, #0D0D0D, #0D0D0D)"; // Matches ProjectCard default

export default function Works() {
  const [background, setBackground] = useState(defaultBackground);

  const handleHover = (hoverColor) => {
    console.log("Hovering with color:", hoverColor); // Debug
    setBackground(getHoverGradient(hoverColor));
  };

  const handleLeave = () => {
    console.log("Leaving, resetting to default"); // Debug
    setBackground(defaultBackground);
  };

  return (
    <div className="works_div" style={{background: background }}>
      <p
        id="tech_title"
        style={{ marginBottom: "100px", fontWeight: 400, fontSize: "26px" }}
      >
        All Works
      </p>
      <div className="works_column">
        {projects.map((project, i) => (
          <div key={i} className="card_container">
            <ProjectCard
              project={project}
              onHover={() => handleHover(project.hoverColor)}
              onLeave={handleLeave}
            />
          </div>
        ))}
        
        <Footer/>
      </div>
    </div>
  );
}