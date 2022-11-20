import "./App.css";
import Feedback from "./components/Home/Feedback/Feedback";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Services from "./components/Home/Services/Services";
import Sponsor from "./components/Home/Sponsor/Sponsor";
import WorkCarousel from "./components/Home/WorkCarousel/WorkCarousel";

function App() {
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
}

export default App;
