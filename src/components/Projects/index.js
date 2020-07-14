import React from "react";


function Projects(props){

    return(
        <div className="row text-center mb-5">
            {props.projectDetails.map(item => (
                <div className="col-md-6 col-lg-4 px-0 px-md-4 mb-5">
                <a href={item.projectURL} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageSource} alt={item.imageAlt} width="100%"/>   
                    <p className="pt-4">{item.description}</p>                
                 </a>
                <a href={item.githubURL} target="_blank" rel="noopener noreferrer">Github LInk</a>
            </div>
            ))}
        </div>
    )
}
export default Projects;
