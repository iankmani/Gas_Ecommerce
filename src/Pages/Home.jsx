import "../Stylings/Home.css";
import HeroSection from "../Components/HeroSection.jsx";
import FeaturedSec from "./FeaturedSec.jsx";
import Aboutus from "./Aboutus.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "../Components/Navbar.jsx";

const Home = () => {
  return (
    <>
      {/* <Route  path="/aboutus" element={<Aboutus />} />/ */}
      <HeroSection />
      <FeaturedSec />
      <Aboutus />
    </>
  );
};

export default Home;
