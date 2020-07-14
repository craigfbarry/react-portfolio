import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";


function Navbar() {

  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark py-0">
        <a href="/" className="navbar-brand py-0">
            <h3 id="logo" className="pt-2">Craig Barry</h3>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ">
                <li className="nav-item nav-link btn mx-5 mx-sm-0 p-sm-3">
                    <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item nav-link btn mx-5 mx-sm-0 p-sm-3">
                    <Link to="/Resume" className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Link>    
                </li>
                <li className="nav-item nav-link btn mx-5 mx-sm-0 p-sm-3">
                    <Link to="/Technologies" className={location.pathname === "/Technologies" ? "nav-link active" : "nav-link"}>
                        Technologies
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
