import React from "react";
import "../App.css"

handleClick = (score, correctGuess, incorrectGuess) => {
  this.setState({
    score,
    correctGuess,
    incorrectGuess
  });
  console.log("clicked");
};

function ImageBlock(props) {
  return (
    
      <div className="card" onClick={() => props.handleClick()}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
  
  );
}
  
  export default ImageBlock;