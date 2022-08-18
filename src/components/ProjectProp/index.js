import React from "react";

const ProjectProp = (props) => {
    const { project } = props;

    return (
        <div className="cards">
            <div className="work-card">
                <img src={require(`../../assets/images/projects/${project.name}.png`)} alt={project.display} />
                <div className="card-title-box">
                    <h3>
                        <a href={project.deploy}>{project.name}</a>
                    </h3>
                </div>
                <p>
                    <a className="card-title-box" href={project.deploy} target="_blank" rel="noreferrer">Deployed Site</a>
                </p>    
                <p>
                    <a className="card-title-box" href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
                </p>
            </div>
        </div>
    )
}

export default ProjectProp;