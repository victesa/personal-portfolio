import React, { useState, useRef, useEffect } from "react";
import "./ProjectCard.css";

// Shared cache to prevent redundant preloading across ProjectCard instances
const preloadedFrames = new Map();

function ProjectCard({ project, totalFrames = 204, animationDuration = 3500, onHover, onLeave }) {
  const [isHovered, setIsHovered] = useState(false);
  const [frameIndex, setFrameIndex] = useState(project.hasAnimation ? totalFrames - 1 : null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const singleComponentRef = useRef(null);

  // Preload animation frames only if not already cached
  useEffect(() => {
    if (!project.hasAnimation) {
      setImagesLoaded(true);
      return;
    }

    const animationPath = project.framePath;
    if (preloadedFrames.has(animationPath)) {
      setImagesLoaded(true);
      return;
    }

    let loaded = 0;
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const idx = String(i).padStart(6, "0");
      img.src = `${animationPath}${idx}.png`; // ✅ BASE_URL included already
      img.onload = () => {
        if (++loaded === totalFrames) {
          preloadedFrames.set(animationPath, true);
          setImagesLoaded(true);
        }
      };
    }
  }, [project.hasAnimation, project.framePath, totalFrames]);

  // Animation logic
  const startAnimation = () => {
    if (!project.hasAnimation) return;
    setFrameIndex(0);
    startTimeRef.current = null;
    const animate = (ts) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const progress = ts - startTimeRef.current;
      const newFrame = Math.min(
        totalFrames - 1,
        Math.floor((progress / animationDuration) * totalFrames)
      );
      setFrameIndex(newFrame);
      if (newFrame < totalFrames - 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Hover handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (singleComponentRef.current) {
      singleComponentRef.current.style.background = `
        radial-gradient(ellipse at top center,
          ${project.hoverColor || "#FFFF00"}40 0%,
          ${project.hoverColor || "#CCCC00"}33 40%,
          ${project.hoverColor || "#999900"}26 70%,
          ${project.hoverColor || "#333300"}1A 100%),
        linear-gradient(to bottom, transparent, #0a0a0a)
      `;
    }
    if (project.hasAnimation) startAnimation();
    if (onHover) onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (singleComponentRef.current) {
      singleComponentRef.current.style.background = "linear-gradient(to bottom, #1E1E1E, #0a0a0a)";
    }
    if (project.hasAnimation) {
      cancelAnimationFrame(animationFrameRef.current);
      setFrameIndex(totalFrames - 1);
    }
    if (onLeave) onLeave();
  };

  return (
    <>
      <div className="back_card" />
      <div
        ref={singleComponentRef}
        className={`single_component ${!project.hasAnimation && isHovered ? "hovered_static" : ""}`}
        style={{
          borderTop: "4px solid transparent",
          borderImage: `linear-gradient(to right,
            rgba(255,255,255,0) 0%,
            ${project.borderColor || "#FFFFFF"}66 40%,
            ${project.borderColor || "#FFFFFF"}ff 50%,
            ${project.borderColor || "#FFFFFF"}66 60%,
            rgba(255,255,255,0) 100%
          ) 1`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="details_div">
          <div className="top_div">
            <h2>{project.title}</h2>
            <p>→</p>
          </div>
          <p className="project_description">
            {project.description.split("—")[0]} —{" "}
            <span className="highlighted">{project.description.split("—")[1]}</span>
          </p>
        </div>
        <div className="works_image">
          {project.hasAnimation ? (
            <img
              src={
                imagesLoaded
                  ? `${project.framePath}${String(frameIndex).padStart(6, "0")}.png`
                  : `${project.framePath}${String(totalFrames - 1).padStart(6, "0")}.png`
              }
              alt={`Frame ${frameIndex}`}
            />
          ) : (
            <img
              className={isHovered ? "static_hover_image" : ""}
              src={project.thumbnail}
              alt={`${project.title} preview`}
            />
          )}
        </div>
        {!project.hasAnimation && <div className="reflection_overlay" />}
      </div>
    </>
  );
}

export default ProjectCard;
