import React, { Component } from "react";
import "./Accordion.css";

class Accordion extends Component {
  render() {
    const { title, about, profile } = this.props;
    return (
      <div className="container">
        <div
          className="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {title}
                </a>
              </h4>
            </div>
            <div
              id="collapseOne"
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div className="panel-body">{about}</div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  {title}
                </a>
              </h4>
            </div>
            <div
              id="collapseTwo"
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <div className="panel-body">{profile}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
