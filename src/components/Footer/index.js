import React from "react";
import "./style.css";

function Footer() {
  return (
    <nav className="navbar navbar-expand fixed-bottom navbar-light navbar-dark bg-dark py-0">
        <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item btn">
                    <a className="nav-link" href="https://github.com/craigfbarry/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/github.png" alt="github" width="30" className="pr-1 pb-1"/>
                        Github</a>
                </li>
                <li className="nav-item btn">
                    <a className="nav-link" href="https://www.linkedin.com/in/craig-barry-1aa06b104/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/linkedin.png" alt="linkedin" width="30" className="pr-1 pb-1"/>
                        LinkedIn</a>
                </li>
            </ul>
        </div>            
    </nav>
  );
}

export default Footer;
