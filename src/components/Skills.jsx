import "../styles/skills.css"
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Skills() {
    return (
        <ScrollAnimation animateIn="animate__slideInUp">
        <div id="skills-wrapper">
                <div id="skills">
                    <h1>My Skills</h1>
                    <p>HTML</p>
                    <div class="container">
                        <p>90%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                                <div class="html"></div>
                        </ScrollAnimation>
                    </div>
                    <p>CSS</p>
                    <div class="container">
                        <p>85%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                            <div class="css"></div>
                        </ScrollAnimation>
                    </div>
                    <p>JavaScript</p>
                    <div class="container">
                        <p>70%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                            <div class="js"></div>
                        </ScrollAnimation>
                    </div>
                    <p>React</p>
                    <div class="container">
                        <p>60%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                            <div class="react"></div>
                        </ScrollAnimation>
                    </div>
                    <p>C++</p>
                    <div class="container">
                        <p>75%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                            <div class="cpp"></div>
                        </ScrollAnimation>
                    </div>
                    <p>Python</p>
                    <div class="container">
                        <p>70%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                            <div class="python"></div>
                        </ScrollAnimation>
                    </div>
                    <p>Java</p>
                    <div class="container">
                        <p>40%</p>
                        <ScrollAnimation animateIn="animate__slideInLeft">
                            <div class="java"></div>
                        </ScrollAnimation>
                    </div>
                </div>
        </div>
        </ScrollAnimation>
    );
}


export default Skills;