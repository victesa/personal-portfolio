import "../components/Testimonials.css"

function Testimonials() {
    return (
        <div 
        id="testimonials_section"
        className="testimonials_section">
            <div className="divider" />

            <div className="testimonials_container">
                <div className="testimonial_card">
                    <img src="/public/make_me_smile_logo.png" alt="client" />
                    <p className = "recommendation">Make Me Smile-Kenya found in him a very reliable personality, dedicated, couteous</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Simon Peter</p>
                    <p>Director, Make Me Smile - Kenya</p>
                </div>

                <div className="testimonial_card">
                    <img src="/public/amref_logo.png" alt="client" style={{backgroundColor: "white"}}/>
                    <p className = "recommendation">His technical proficiency, strong work ethic, and dedication to delivering exceptional results make him an ideal candidate for any employer</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Samuel Ndung'u</p>
                    <p>HR Business Partner- Amref Health Africa</p>
                </div>

                <div className="testimonial_card">
                    <img src="/public/witeva_logo.png" alt="client" style={{height: "80px", width: "80px"}} />
                    <p className = "recommendation">A person of unquestionable integrity and exceptional professionalism.Attention to detail reliability and ability to translate complex technical needs into  user friendly.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Beatrice Tonui</p>
                    <p>Director, women in tea value chain association</p>
                </div>
            </div>

            <div className="divider" />
        </div>
    );
}

export default Testimonials;
