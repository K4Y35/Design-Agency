import React from "react";
import moweb from "../../../assets/icons/service1.png";
import graphic from "../../../assets/icons/service2.png";
import webdev from "../../../assets/icons/service3.png";
import "./Services.css";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const s1Title = "Web & Mobile design";
  const s2Title = "Graphic design";
  const s3Title = "Web development";
  const s1Desc =
    "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.";
  const s2Desc =
    "Amazing flyers, social media posts and brand representations that would make your brand stand out.";
  const s3Desc =
    "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.";
  return (
    <section className="service-wrapper">
      <h3 className="service-title">
        Provide awesome <span className="service-title-span"> services</span>
      </h3>

      <div className="card-row">
        <ServicesCard img={moweb} title={s1Title} des={s1Desc} />
        <ServicesCard img={graphic} title={s2Title} des={s2Desc} />
        <ServicesCard img={webdev} title={s3Title} des={s3Desc} />
      </div>
    </section>
  );
};

export default Services;
