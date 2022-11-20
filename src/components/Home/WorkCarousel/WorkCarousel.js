import React from "react";
import img1 from "../../../assets/carousel-1.png";
import img2 from "../../../assets/carousel-2.png";
import img3 from "../../../assets/carousel-3.png";
import CarouselCard from "./CarouselCard";
import "./WorkCarousel.css";

const WorkCarousel = () => {
  let box = document.querySelector(".product-container");
  const btnpresprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    let element = document.getElementById("btn-prev");
    element.classList.add("dot-active");
    let nextbtn = document.getElementById("btn-next");
    nextbtn.classList.remove("dot-active");
  };
  const btnpresnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    let nextbtn = document.getElementById("btn-next");
    let prevbtn = document.getElementById("btn-prev");
    nextbtn.classList.add("dot-active");
    prevbtn.classList.remove("dot-active");
  };
  return (
    <div className="product-carousel">
      <h4 className="carousel-title">
        Here are some of{" "}
        <span className="carousel-title-span"> our works </span>
      </h4>

      <div className="product-container">
        <CarouselCard img={img1} />
        <CarouselCard img={img2} />
        <CarouselCard img={img3} />
        <CarouselCard img={img1} />
        <CarouselCard img={img2} />
        <CarouselCard img={img3} />
      </div>
      <div className="button-div">
        <button
          id="btn-prev"
          className="pre-btn dot dot-active"
          onClick={btnpresprev}
        ></button>
        <button
          id="btn-next"
          className="next-btn dot"
          onClick={btnpresnext}
        ></button>
      </div>
    </div>
  );
};

export default WorkCarousel;
