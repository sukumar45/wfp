import React from 'react';
//import logo from "../logo-sm.png";

// REACT FONTAWESOME IMPORTS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; //Hamburger Menu style




const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
            
        
        <div className="container-fluid">
           {/* <a className="navbar-brand" href="#"> <img className ="logo" src= {logo} alt = "-logo-"/> </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon = {faCoffee} style = {{color: "#fff"}} />
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Research</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Me</a>
                </li>
                
            </ul>
        </div>
        </div>
        </div>
    </nav>
    )
}

export default Navbar
