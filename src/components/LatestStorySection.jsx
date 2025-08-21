import "../components/LatestStorySection.css"

function LatestStorySection(){
    return(
        <div 
        id="latest_section_div"
        className = "latest_section_div">
            <div className = "left_div">

                <h2>Latest Story</h2>

                <h1>"A Tour Through The Konsist Linter"</h1>

                <div id = "read_story_div">
                    <p>Read the story</p>

                    <img src = "/public/next_icon.png" />
                </div>

            </div>

            <div className = "right_div">
                <img src = "/public/reading.png" />
            </div>
        </div>
    )
}

export default LatestStorySection