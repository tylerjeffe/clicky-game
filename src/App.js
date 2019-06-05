import "./App.css";
import React, { Component } from "react";
import ImageBlock from "./components/ImageBlock.js";
import Header from "./components/Header.js";
import Jumbotron from "./components/Jumbotron.js";
import Footer from "./components/Footer.js";
import logos from "./logos.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    logos
  };

  handleClick = (score, correctGuess, incorrectGuess) => {
    this.setState({
      score,
      correctGuess,
      incorrectGuess
    });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Jumbotron {...this.state} />
        <div className="bigContainer">
          <div className="container">
            {this.state.logos.map(logo => (
              <ImageBlock
                className="content"
                id={logo.id}
                name={logo.name}
                key={logo.id}
                image={logo.image}
              />
            ))}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
