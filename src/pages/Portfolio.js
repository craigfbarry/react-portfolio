import React from "react";
import Projects from "../components/Projects";


const projectDetails = [
  {imageSource:"assets/wuber.png",imageAlt:"Wuber",description:"Wuber database Project",
  githubURL:"https://github.com/craigfbarry/WUber",
  projectURL:"https://wuber-wines.herokuapp.com/"},
  {imageSource:"assets/nasa-slack.png",imageAlt:"NASA-slack",description:"NASA/Slack API Project",
  githubURL:"https://github.com/craigfbarry/patient0",
  projectURL:"https://lnxsa.com"},            
  {imageSource:"assets/day-planner.png",imageAlt:"Day-planner",description:"Day Planner",
  githubURL:"https://github.com/craigfbarry/day-planner",
  projectURL:"https://craigfbarry.github.io/day-planner/"},
  {imageSource:"assets/weather-dashboard.png",imageAlt:"Weather-Dashboard",description:"Weather API Dashboard",
  githubURL:"https://github.com/craigfbarry/weather-dashboard",
  projectURL:"https://craigfbarry.github.io/weather-dashboard"},
  {imageSource:"assets/note-taker.png",imageAlt:"Note-Taker",description:"Note Taker",
  githubURL:"https://github.com/craigfbarry/note-taker",
  projectURL:"https://immense-springs-98803.herokuapp.com/"},
  {imageSource:"assets/password-generator.png",imageAlt:"Password-Generator",description:"Password Generator",
  githubURL:"https://github.com/craigfbarry/password-generator",
  projectURL:"https://craigfbarry.github.io/password-generator/"}
];


function Portfolio() {
  return (
    <div className="container">
      
      <header className="row py-sm-5 mt-5 text-center text-align-middle">
          <h3 className="col my-4">Portfolio</h3>
      </header>


        <Projects
          projectDetails = {projectDetails}
        />
    </div>
  );
}

export default Portfolio;