import React, { Component } from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand active" href="#">
                <p id="logo">GF</p>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            />
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/Gerardofer"
                  target="_blank"
                >
                  <i className="fa fa-github-alt" aria-hidden="true" />
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/gerardo-fernandez-3033263b/"
                  target="_blanked"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://stackoverflow.com/users/8629662/gerardo-fernandez"
                  target="_blanked"
                >
                  <i className="fa fa-stack-overflow" aria-hidden="true" />
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://twitter.com/gerardofer"
                  target="_blanked"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
