

import "../Stylings/Home.css";
import HeroSection from "../Components/HeroSection.jsx"
import FeaturedSec from "../Components/FeaturedSec.jsx";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
     <HeroSection/>
      {/* Featured Section */}
     <FeaturedSec/>
      
    </div>
  );
};

export default Home;
