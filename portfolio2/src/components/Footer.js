import React from "react";
import "./Footer.css";
export const Footer = () => {
    return (
        <footer className="page-footer teal darken-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Gerardo Fernandez</h5>
              </div>
              <div className="col l4 s12">
                <h5 className="white-text">More Links!</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/watch?v=5qJnB3ZURIA&t=169s" target="_blank" rel="noopener noreferrer">My Master's Recital (part 1)</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
            © 2018 Copyright
            </div>
          </div>
        </footer>    
    )
}