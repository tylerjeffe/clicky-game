import "./App.css";
import React, { Component } from "react";
import ImageBlock from "./components/ImageBlock.js";
//
import Jumbotron from "./components/Jumbotron.js";
// import Footer from "./components/Footer.js";
import logos from "./logos.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: [
      { id: '/images/1.jpg' },
      { id: '/images/2.jpg' },
      { id: '/images/3.jpg' },
      { id: '/images/4.png' },
      { id: '/images/5.jpg' },
      { id: '/images/6.jpg' },
      { id: '/images/7.png' },
      { id: '/images/8.jpg' },
      { id: '/images/9.jpg' },
      { id: '/images/10.jpeg' },
      { id: '/images/11.jpg' },
      { id: '/images/12.jpg' },
    ],
    score: 0,
    value: '',
    clicked: [],
    logos,
    gameOver: false,
    showImage: false,
  };

  handleClick = (score) => {
    this.setState({
      score: score++
      
    });
    console.log(this.state.score);
  };

  
 

  render() {
    return (
      <div>
       
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
                handleClick={this.handleClick}
                
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
