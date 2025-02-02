import "../Stylings/Home.css";

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Welcome to Gas Ecommerce</h1>
        <p>Your one-stop shop for all your gas needs. Reliable, affordable, and fast!</p>
      </div>

      {/* Updated Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#featured-products">Featured Products</a></li>
          <li><a href="#best-sellers">Best Sellers</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeroSection;
