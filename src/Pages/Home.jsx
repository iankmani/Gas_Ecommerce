import "../Stylings/Home.css";
import HeroSection from "../Components/HeroSection.jsx";
import FeaturedSec from "./FeaturedSec.jsx";
import Aboutus from "./Aboutus.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSec />
      <Aboutus />
      <Contact />
    </>
  );
};

export default Home;
