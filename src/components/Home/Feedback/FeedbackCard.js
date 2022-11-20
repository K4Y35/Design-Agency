import React from "react";
import "./FeedbackCard.css";
const FeedbackCard = ({ name, work, des, img }) => {
  return (
    <div className="card-container">
      <div className="card-header-div">
        <div>
          <img className="customer-img" src={img} alt="customerPhoto" />
        </div>
        <div className="name-work">
          <h5>{name}</h5>
          <p>{work}</p>
        </div>
      </div>

      <div className="card-body">
        <small>{des}</small>
      </div>
    </div>
  );
};

export default FeedbackCard;
