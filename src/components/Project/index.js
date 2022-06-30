import { React, useState } from "react";
import ProjectProp from "../ProjectProp";
import "../../assets/css/style.css"

const Project = () => {

    const [projects] = useState([
      {
        name: "JammingBlog",
        category: "HTML/CSS/JS/NodeJS",
        github: "https://github.com/samw281/jamming-blog",
        deploy:
          "https://obscure-sierra-56263.herokuapp.com",
        description:
          "Jamming Blog is an example of a simple forum/social media type website for discussing and sharing music. Tumblr lite",
      },
      {
        name: "Foodio",
        category: "HTML/CSS/JS/NodeJS",
        github: "https://github.com/noreikam/foodio",
        deploy:
          "https://noreikam.github.io/foodio/",
        description:
          "Foodio is a simple to use app for finding new local resturaunts to try out.",
      },
      {
        name: "Basement Dwellers",
        category: "React/Nodejs/Express/Axios",
        github: "https://github.com/vsmith95/gamergang",
        deploy:
          "https://basementdwellers.herokuapp.com",
        description:
          "Placeholder",
      },
    ]);

    return(
        <section className="my-work">
            <div className="titleContainer">                
                <h2 className="section-title">
                    Projects
                </h2>
            </div>
            <div className="cards">
                {projects.map((project) => (
                    <ProjectProp 
                    project={project}
                    key={project.name}
                    />
                ))}
            </div>
        </section>
    )

};

export default Project;