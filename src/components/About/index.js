import React from "react";
import "../../assets/css/style.css"
import ItMe from "../../assets/images/bio-pic.png"

const About = () => {
    return (
        <section className="bio">
            <div className="titleContainer">                
                <h2 className="section-title">
                    About me
                </h2>
            </div>    
                <div className="codeBio">
                    <img src={ItMe} alt="It's Still Me" />
                    <div className="bioTech">
                    <div>
                        <h3>Technologies</h3>
                        <ul>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>MySQL</li>
                            <li>GraphQL</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
               </div>
            </div>
                <div className="">
                    <p className="bioPara">
                    Full-Stack Web Developer looking to utilize my many years of experience in customer service to build positive user experiences online. 
                    A recent graduate of the University of Connecticut (UCONN)’s Coding Bootcamp, 
                    receiving certification and education in the web’s current and cutting-edge technologies.
                    I am experienced in working in fast-paced, team-focused environments as well as working independently to find eloquent on-the-fly solutions to potential problems.
                    With every project I work on, I focus on improving my skills and engaging my audience with a fun and professional user experience on the platform.
                    </p>
                </div>
        </section>
    );
    };

    export default About;