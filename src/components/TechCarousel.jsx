import React from "react";
import "../components/TechCarousel.css"
import kotlin from "/kotlin_logo.png"
import js from "/JS.png"
import react from "/react_js.png"
import figma from "/figma_logo.png"
import node from "/node_js_logo.png"
import compose from "/compose_logo.png"
import firebase from "/firebase_logo.png"

function TechCarousel() {
    return (
      <div className="tech-carousel-container">
        <div className="tech-carousel">
          {[...Array(20)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="tech-carousel-item">
                <img src={kotlin} alt="Kotlin" />
              </div>
              <div className="tech-carousel-item">
                <img src={js} alt="JavaScript" />
              </div>
              <div className="tech-carousel-item">
                <img src={react} alt="React" />
              </div>
              <div className="tech-carousel-item">
                <img src={figma} alt="Figma" />
              </div>
              <div className="tech-carousel-item">
                <img src={node} alt="Node.js" />
              </div>
              <div>
                <img src={compose} alt="Jetpack Compose" style={{width: "100px"}}/>
              </div>
              <div className="tech-carousel-item">
                <img src={firebase} alt="Firebase" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
}
  

export default TechCarousel