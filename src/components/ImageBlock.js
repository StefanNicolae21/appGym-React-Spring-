import React from "react";
import "./ImageBlock.css";

function ImageBlock(props) {
    let className = "image-block ";
    if(props.className){
        className+=props.className;
    }


  return (
    <div className={className}>
      <div className="image-block-content">
        <img className="image-block-img" src={props.imgSrc} alt="" />
        <h3 className="image-block-title">{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          consectetur sequi at nihil dolorem corporis error, laborum eum
          recusandae sed debitis possimus dicta quibusdam? Ipsa porro recusandae
          vero corporis maiores.
        </p>
      </div>
    </div>
  );
}

export default ImageBlock;
