import React from "react";
import fimg1 from "../../../assets/customer-1.png";
import fimg2 from "../../../assets/customer-2.png";
import fimg3 from "../../../assets/customer-3.png";
import "./Feedback.css";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  const name1 = "Nash Partrik";
  const name2 = "Miriam Beron";
  const name3 = "Bria Malone";
  const work = "CEO,Manpole";
  const des =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ";
  return (
    <div className="container feedback-div">
      <h3>
        Clients <span className="carousel-title-span">Feedback</span>
      </h3>
      <div className="card-storage-div">
        <FeedbackCard name={name1} work={work} des={des} img={fimg1} />
        <FeedbackCard name={name2} work={work} des={des} img={fimg2} />
        <FeedbackCard name={name3} work={work} des={des} img={fimg3} />
      </div>
    </div>
  );
};

export default Feedback;
