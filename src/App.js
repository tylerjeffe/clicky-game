import "./App.css";
import React, { Component } from "react";
import Blocks from "./components/Blocks.js";
import Header from "./components/Header.js";
import logos from "./logos.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
 state = {
   logos
 };

  render() {
    return (
      <Header />
        {this.state.logos.map(logo => (
          <Blocks 
            name={logo.name}
            imagePath={logo.imagePath}
          />
    ))}
  );
}

}

export default App;
