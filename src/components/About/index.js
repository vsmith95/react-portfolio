import React from "react";
import "../../assets/css/style.css"
import ItMe from "../../assets/images/bio-pic.jpg"

const About = () => {
    return (
        <section className="bio">                

            <div className="">
                <h2 className="section-title">
                    About me
                </h2>
                <div className="imgContainer">
                    <img src={ItMe} style={{ width: "50%" }} alt="It's Still Me" />
                </div>
                <div className="bioPara">
                    <p className="">
                        Hello there! My name is Vaughn Smith! I am currently a student at Coding Bootcamp through UCONN and will be graduating very soon. Presently live in Windham, Connecticut with my beautiful girlfriend and am looking to grow my skills and abilities in web development.
                    </p>
                </div>
            </div>
            <div className="flex-row codeBio">
                <div className="bioTech">
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
               <div className="bioLang">
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