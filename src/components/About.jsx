import "../styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "../images/about.jpg";

function About() {
    return (
        <ScrollAnimation animateIn="animate__slideInUp">
            <div id="about-wrapper">
                <div class="about">
                    <h1>About</h1>
                    <ScrollAnimation animateIn="animate__bounceInLeft">
                        <img className="aboutImg" src={aboutImage} alt="aboutImag" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__bounceInRight">
                        <span className="aboutText">
                            <h3>Hassan.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                placeat inventore rerum tempore cupiditate, amet adipisci aut eius
                                facilis quisquam magni ratione maxime officiis earum blanditiis
                                magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
                                voluptate similique sunt exercitationem voluptatibus, illo et
                                fugit eveniet provident quo atque, nesciunt explicabo tenetur!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                placeat inventore rerum tempore cupiditate, amet adipisci aut eius
                                facilis quisquam magni ratione maxime officiis earum blanditiis
                                magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
                                voluptate similique sunt exercitationem voluptatibus, illo et
                                fugit eveniet provident quo atque, nesciunt explicabo tenetur!
                            </p>
                        </span>
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
    );
}

export default About;