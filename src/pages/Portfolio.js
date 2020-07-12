import React from "react";


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
      
      <header className="row mt-5">
          <h3 className="text-center mb-5">Portfolio</h3>
      </header>
      <div className="col-md-6 col-lg-4 px-0 px-md-4">
          <img src="assets/password-generator.png" alt="Password-Generator"/>
          <h3>Password Generator</h3>
          <a href="https://github.com/craigfbarry/password-generator"></a>
          <a href="https://craigfbarry.github.io/password-generator/"></a>
      </div>
    </div>
  );
}

export default Portfolio;