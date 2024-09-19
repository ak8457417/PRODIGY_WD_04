import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import ak from '../../assets/ak.jpg'

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={ak} alt=" " />
            <h1><span>I'm Abhishek Kadu,</span> frontend developer based in <span id="ind">India</span>.</h1>
            <p>I am a frontend developer from Pune, India with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <a className="anchor-link" href="#contact"><div onClick={() => setMenu("contact")}>Connect With Me</div></a>
                </div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero