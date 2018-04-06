import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="teal darken-1">
            <div className="nav-wrapper">
                <a href="#About" className="brand-logo">GF</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/Gerardofer" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/gerardo-fernandez-3033263b/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://stackoverflow.com/users/8629662/gerardo-fernandez" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/gerardofer" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </nav>    
    )
}
