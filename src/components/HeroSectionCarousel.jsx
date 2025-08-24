import "../components/HeroSectionCarousel.css"

function HeroSectionCarousel(){
    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-item">
                    <img src={`${import.meta.env.BASE_URL}phone.png`} alt="Phone"/>
                </div>
                <div className="carousel-item">
                    <img src={`${import.meta.env.BASE_URL}watch.png`} alt="Watch"/>
                </div>
                <div className="carousel-item">
                    <img src={`${import.meta.env.BASE_URL}finance.png`} alt="Finance"/>
                </div>
                <div className="carousel-item">
                    <img src={`${import.meta.env.BASE_URL}dashboard.png`} alt="Dashboard"/>
                </div>
            </div>
        </div>
    );
}


export default HeroSectionCarousel;
