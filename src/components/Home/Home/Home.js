import React from "react";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Sponsor from "../Sponsor/Sponsor";
import WorkCarousel from "../WorkCarousel/WorkCarousel";

const Home = () => {
  return (
    <>
      <Header />
      <Sponsor />
      <Services />
      <WorkCarousel />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
