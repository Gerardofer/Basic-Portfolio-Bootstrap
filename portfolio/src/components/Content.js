import React, { Component } from "react";
import Accordion from "./Accordion";
import PropTypes from "prop-types";
import "./Content.css";

class Content extends Component {
  static defaultProps = {
    myInfo: [
      {
        title: "A Little About Me...",
        about: "This is the part of my bio"
      },
      {
        title: "Things I've Built",
        portfilio: [
          "https://github.com/Gerardofer/liri-node-app",
          "https://gerardofer.github.io/jQuery-Game/",
          " https://gerardofer.github.io/GifTastic/",
          "https://github.com/Gerardofer/friendFinder",
          "https://frozen-tundra-47604.herokuapp.com/",
          "https://gerardofer.github.io/TrainTime/"
        ]
      }
    ]
  };

  static propTypes = {
    myInfo: PropTypes.checkPropTypes(PropTypes.object)
  };

  render() {
    const myInfo = this.props.myInfo.map((info, index) => (
      <Accordion key={index} {...info} />
    ));
    return <div>{myInfo}</div>;
  }
}

export default Content;
