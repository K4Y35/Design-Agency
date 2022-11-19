import React from "react";
import airbnb from "../../../assets/logos/airbnb.png";
import google from "../../../assets/logos/google.png";
import netflix from "../../../assets/logos/netflix.png";
import slack from "../../../assets/logos/slack.png";
import uber from "../../../assets/logos/uber.png";
import "./Sponsor.css";

const Sponsor = () => {
  return (
    <section className="sponsor-wrapper">
      <div className="row d-flex">
        <div className="col-md-2 d-flex justify-content-center">
          <img className="sponsor" src={slack} alt="" />
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <img className="sponsor" src={google} alt="" />
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <img className="sponsor" src={uber} alt="" />
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <img className="sponsor" src={netflix} alt="" />
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <img className="sponsor" src={airbnb} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
