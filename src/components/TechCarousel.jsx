import React from "react";
import "../components/TechCarousel.css"

function TechCarousel() {
    return (
      <div className="tech-carousel-container">
        <div className="tech-carousel">
          {[...Array(20)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="tech-carousel-item">
                <img src="/kotlin_logo.png" alt="Kotlin" />
              </div>
              <div className="tech-carousel-item">
                <img src="/JS.png" alt="JavaScript" />
              </div>
              <div className="tech-carousel-item">
                <img src="/react_js.png" alt="React" />
              </div>
              <div className="tech-carousel-item">
                <img src="/figma_logo.png" alt="Figma" />
              </div>
              <div className="tech-carousel-item">
                <img src="/node_js_logo.png" alt="Node.js" />
              </div>
              <div>
                <img src="/compose_logo.png" alt="Jetpack Compose" style={{width: "100px"}}/>
              </div>
              <div className="tech-carousel-item">
                <img src="/firebase_logo.png" alt="Firebase" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
}
  

export default TechCarousel