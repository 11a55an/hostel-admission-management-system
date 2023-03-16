import "../styles/slider.css"
import { useState } from "react";
import { useEffect } from "react";
// import "animate.css/animate.min.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";

var list = ["App Developer", "Web Developer", "UI Designer"]
var i = 0
function Slider() { 
    const [text, setCounter] = useState(list[i]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(list[i]);
            i = (i + 1) % 3
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOut="animate__slideInRight">
            <div id="slider-wrapper">
                <div id="slider">
                    <p>Hi! I am Hassan, a
                        <h1 class="fancyStrong"><strong>{text}</strong></h1><br />
                        <button class="sliderBtn" href="">Hire Me!</button></p>
                </div>
            </div>
        </ScrollAnimation>
    );
}


export default Slider;