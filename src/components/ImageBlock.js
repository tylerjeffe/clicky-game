import React from "react";
import "../App.css"

const imagePaths = [
	'../../public/images/1.png',
	'../../public/images/2.png',
	'../../public/images/3.png',
	'../../public/images/4.png',
	'../../public/images/5.png',
	'../../public/images/6.png',
	'../../public/images/7.png',
	'../../public/images/8.png',
	'../../public/images/9.png',
	'../../public/images/10.png',
	'../../public/images/11.png',
	'../../public/images/12.png',
];





function ImageBlock(props) {
  return (
    
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={props.handleClick()} id={props.id} />
        </div>
      </div>
  
  );
}
  
  export default ImageBlock;