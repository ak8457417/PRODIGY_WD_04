import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import about from '../../assets/about_img2.jpg'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="theme pattern"/>
            </div>
            {/*<div id="my">*/}
            {/*    <h1>𝔸внιK</h1>*/}
            {/*    <img src={theme_pattern}/>*/}
            {/*</div>*/}
            <div className="about-sections">
                <div className="about-left">
                    <img src={about} alt="profile picture"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in th
                            field. Throughout my career, I has the privilege of collaborating with prestigious
                            organizations, contributing to their success and growth.</p>
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in th
                            field. I has the privilege of collaborating with prestigious organizations.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{width: "80%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{width: "65%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Java & DSA</p>
                            <hr style={{width: "55%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Python</p>
                            <hr style={{width: "45%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About