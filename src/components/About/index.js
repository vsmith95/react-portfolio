import React from "react";

const About = () => {
    return (
        <section className="aboutComponent">
            <div className="aboutTitle">
                <h1 className="aboutHead">
                    About me
                </h1>
                <p className="aboutPara">
                    Hello there! My name is Vaughn Smith! I am currently a student at Coding Bootcamp through UCONN and will be graduating very soon. Presently live in Windham, Connecticut with my beautiful girlfriend and am looking to grow my skills and abilities in web development.
                </p>
            </div>
            <div className="aboutBorder">
                <div className="aboutTech">
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
               <div className="aboutLang">
                    <h3>Languages</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
               </div>
            </div>
        </section>
    );
    };

    export default About;