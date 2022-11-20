import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ img, title, des }) => {
  return (
    <div class="card">
      <div className="card-img-div">
        <img src={img} class="card-img-top" alt="imageofweb" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <small class="card-text">{des}</small>
      </div>
    </div>
  );
};

export default ServicesCard;
