import React from "react";
import "../../assets/css/style.css"
import ItMe from "../../assets/images/bio-pic.jpg"

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
                        Hello there! My name is Vaughn Smith! I am currently a student at Coding Bootcamp through UCONN and will be graduating very soon. Presently live in Windham, Connecticut with my beautiful girlfriend and am looking to grow my skills and abilities in web development.
                    </p>
                </div>
        </section>
    );
    };

    export default About;