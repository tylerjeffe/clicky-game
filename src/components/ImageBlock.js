import React from "react";
import "../App.css"

function ImageBlock(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}
  
  export default ImageBlock;