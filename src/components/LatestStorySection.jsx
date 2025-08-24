import "../components/LatestStorySection.css"
import next from "/public/next_icon.png"
import readingimg from "/public/reading.png"

function LatestStorySection(){
    return(
        <div id="latest_section_div" className="latest_section_div">
            
            <h2 className="section_title">Latest Story</h2>

            <div className="content_wrapper">
                <div className="left_div">
                    <h1>"A Tour Through The Konsist Linter"</h1>

                    <div id="read_story_div">
                        <p>Read the story</p>
                        <img src={next} />
                    </div>
                </div>

                <div className="right_div">
                    <img src={readingimg}/>
                </div>
            </div>
        </div>
    )
}

export default LatestStorySection
