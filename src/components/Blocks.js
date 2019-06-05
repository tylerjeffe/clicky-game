import React from "react";

function ImageBox(props) {
  return (
    <div className="card" onClick={() => props.shuffleBoard()}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}
  
  export default ImageBox;