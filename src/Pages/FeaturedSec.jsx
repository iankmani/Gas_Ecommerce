import "../Stylings/Home.css";
import gaspic from "../assets/Gas_Pics/gas13kg.jpg";

const FeaturedSec = () => {
  return (
    <div>
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={gaspic} alt="Product 1" className="product-image" />
            <h3>Product 1</h3>
            <p>High-quality gas cylinders.</p>
            <p className="price">$40.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={gaspic} alt="Product 2" className="product-image" />
            <h3>Product 2</h3>
            <p>Portable gas stoves for your adventures.</p>
            <p className="price">$60.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={gaspic} alt="Product 3" className="product-image" />
            <h3>Product 3</h3>
            <p>Premium accessories for gas appliances.</p>
            <p className="price">$25.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSec;
