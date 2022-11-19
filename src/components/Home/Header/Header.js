import React from "react";
import frame from "../../../assets/logos/Frame.png";
import Navbar from "./../../Shared/Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <section className="header">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-text-div">
            <h1 className="header-title mt-4">
              Let's Grow Your <br /> Brand To The <br /> Next Level
            </h1>
            <p className="header-p mt-3">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat
            </p>

            <button className="btn-brand mt-3">Hire us</button>
          </div>
          <div className="col-md-6 hero-img-div">
            <img className="frame mt-4" src={frame} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
