import React, { Component } from "react";
import Navbar from "./Navbar";
import { Accordion } from "./Accordion";
import { InfoButton } from "./InfoButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Accordion />
      </div>
    );
  }
}

export default Home;
