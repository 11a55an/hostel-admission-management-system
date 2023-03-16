import "../styles/work.css";
import ScrollAnimation from "react-animate-on-scroll";

function Work() {
    return (
        <div id="work-wrapper">
            <div className="work">
                <h1>My Work</h1>
                <div className="left">
                <ScrollAnimation animateIn="animate__slideInDown">
                    <div id="card-wrapper">
                        <div className="card">
                            <p className="lang">Language</p>
                            <h1 className="title">Project Title</h1>
                            <p className="desc">Description</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    </div>
                    <div className="left">
                    <ScrollAnimation animateIn="animate__slideInDown">
                    <div id="card-wrapper">
                        <div className="card">
                            <p className="lang">Language</p>
                            <h1 className="title">Project Title</h1>
                            <p className="desc">Description</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    </div>
                    <div className="left">
                    <ScrollAnimation animateIn="animate__slideInDown">
                    <div id="card-wrapper">
                        <div className="card">
                            <p className="lang">Language</p>
                            <h1 className="title">Project Title</h1>
                            <p className="desc">Description</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    </div>
                <div className="left">
                <ScrollAnimation animateIn="animate__slideInDown">
                    <div id="card-wrapper">
                        <div className="card">
                            <p className="lang">Language</p>
                            <h1 className="title">Project Title</h1>
                            <p className="desc">Description</p>
                        </div>
                    </div>
                </ScrollAnimation>
                </div>
                <div className="left">
                <ScrollAnimation animateIn="animate__slideInDown">
                    <div id="card-wrapper">
                        <div className="card">
                            <p className="lang">Language</p>
                            <h1 className="title">Project Title</h1>
                            <p className="desc">Description</p>
                        </div>
                    </div>
                </ScrollAnimation>
                </div>
                <div className="left">
                <ScrollAnimation animateIn="animate__slideInDown">
                    <div id="card-wrapper">
                        <div className="card">
                            <p className="lang">Language</p>
                            <h1 className="title">Project Title</h1>
                            <p className="desc">Description</p>
                        </div>
                    </div>
                </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}

export default Work;