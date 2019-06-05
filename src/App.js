import "./App.css";
import React, { Component } from "react";
import Blocks from "./components/Blocks.js";
import Header from "./components/Header.js";
import Jumbotron from "./components/Jumbotron.js"
import logos from "./logos.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
		score: 0
  };
  
	shuffleBoard = (score, correctGuess, incorrectGuess) => {
		this.setState({
			score,
			correctGuess,
			incorrectGuess
		});
  };
  
	render() {
		return (
			<div>
				<Header />
				<Jumbotron {...this.state} />
				<Blocks handleClickChange={this.handleClickChange} />
				
			</div>
		);
	}
}

export default App;
