import React, { Component } from 'react';
import { Navbar } from "./components/Navbar";
import { About } from './components/About';
import Portfolio from './components/Portfolio';
import { Footer } from "./components/Footer";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <About />
          <Portfolio />
          <Footer />
      </div>
    );
  }
}

export default App;
