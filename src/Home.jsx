import "../src/Home.css";
import HeroSectionCarousel from "./components/HeroSectionCarousel";
import TechCarousel from "./components/TechCarousel";
import { useEffect, useRef } from "react";
import WorksSection from "./components/WorksSection";
import LatestStorySection from "./components/LatestStorySection";
import Footer from "./components/Footer";
import RequestCV from "./components/RequestCV";
import Testimonials from "./components/Testimonials";
import { useLocation } from "react-router-dom";

function Home() {
    const bottomImagesRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const images = bottomImagesRef.current?.querySelectorAll(".image-wrapper");
            if (!images) return;

            const scrollY = window.scrollY;

            images.forEach((image) => {
                const offset = scrollY * 0.1;
                image.style.transform = `translateY(-${offset}px)`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location.state]);

    return (
        <div id="home">
            <div id="spacer"></div>

            <div id="title_div">
                <h1>
                    Designs that guide, <span id="line_break"><br /></span>works that flows
                </h1>
            </div>

            <div id="subtitle_div">
                <div id="left-div-image">
                    <img src="../../public/phone.png" id="phone" />
                    <img src="public/sarah.png" id="sarah-name-pic" />
                </div>

                <div id="subtitle_center_div">
                    <p id="subtitle">
                        I make Innovative solutions for technology firms and emerging businesses weary of the typical 
                        aesthetic methodology
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px" }}>
                        <button id="btn-works">Works →</button>
                    </div>
                </div>

                <div id="right-div-image">
                    <img src="../../public/Eliah.png" id="eliah-name-pic" />
                    <img src="/watch.png" id="watch" />
                </div>
            </div>
            
            <div id="bottom-images-div" ref={bottomImagesRef}>
                <div className="image-wrapper" style={{ marginTop: "0px" }}>
                    <img src="/dashboard.png" id="dashboard-pic" />
                </div>

                <div className="image-wrapper">
                    <img id="finance-pic" src="/finance.png" alt="finance image" />
                </div>

                <div className="image-wrapper" style={{ marginTop: "0px" }}>
                    <img src="/credentials.png" id="credentials-pic" />
                </div>
            </div>

            <HeroSectionCarousel />

            <div id="technologies_div">
                <p>Technologies often utilised</p>
                <TechCarousel />
            </div>

            <div id="introduction_div">
                <p id="tech_title">INTRODUCING VICTOR KIRUI</p>
                <p id="introduction_description">
                    <span className="highlight-start">Victor is an Android and web developer </span> 
                    with 5 years of experience building software solutions. He also assists the organizers of Android254 and Kotlin Kenya in running and managing community activities.
                    <br />
                    <span className="highlight-end">Always building. Always learning.</span>
                </p>
            </div> 

            <WorksSection />
            <LatestStorySection />
            <Testimonials />
            <RequestCV />
            <Footer />
        </div>
    );
}

export default Home;
