import React from "react";
import "./InfoButton.css"

const style = {
    marginTop: "45px;",
    
}

export const InfoButton = () => {
    return (
        <div className="text-center">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">About</a>
                <a className="dropdown-item" href="#">Portfolio</a>
                <a className="dropdown-item" href="#">Contact</a>
              </div>
            </div>
        </div>
    );
}

