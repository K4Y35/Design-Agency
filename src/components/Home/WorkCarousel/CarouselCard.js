import React from "react";
import "./CarouselCard.css";

const CarouselCard = (props) => {
  return (
    <div className="mycard">
      <img className="cardImg" src={props.img} alt="" />
    </div>
  );
};

export default CarouselCard;
