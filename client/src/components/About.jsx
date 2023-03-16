import "../styles/about.css";
import Video from "./Video";

function About() {
    return (
            <div id="about-wrapper">
                <div className="about">
                    <div className="about-vid">
                        {/* <Video/> */}
                    </div>
                    <span className="aboutText">
                        <h1>About Our Hostel</h1>
                        <p>
                        The mission of UOG is to equip the youth in the areas of economy, social policy and research, so as to enable them to compete at the international level; achieve excellence in research and teaching in all disciplines; and develop a world class centre of excellence in the industrial triangle of Gujranwala.
                        </p>
                    </span>
                </div>
            </div>
    );
}

export default About;