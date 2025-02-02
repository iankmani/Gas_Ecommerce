import "../Stylings/BestSellers.css";
import gas from "../assets/Gas_Pics/gas13kg.jpg"
import gasrefill from "../assets/Gas_Pics/gasrefill.jpeg"
// import gascooker from "../assets/Gas_Pics/gascooker"
import fifteenkggas from "../assets/Gas_Pics/15kg-gas.jpeg"
import grill from "../assets/Gas_Pics/grill.jpeg"
import campingstove from "../assets/Gas_Pics/campingstove.jpeg"
import cooker from "../assets/Gas_Pics/cooker.jpeg"

const BestSellers = () => {
  return (
    <section id="best-sellers" className="bestsellers-section">
      <h2 className="section-title">🔥 Best Sellers 🔥</h2>

      <div className="bestsellers-container">
        {/* Left Column - Discounted Products */}
        <div className="discounted-products">
          <h3>💰 Discounted Products</h3>
          <div className="product-card">
            <span className="discount-badge">20% OFF</span>
            <img src={gas} alt="Gas Cylinder" className="product-image" />
            <h4>6kg Gas Cylinder</h4>
            <p className="old-price">$50</p>
            <p className="new-price">$40</p>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="product-card">
            <span className="discount-badge">15% OFF</span>
            <img src={gasrefill} alt="Gas Refill" className="product-image" />
            <h4>13kg Gas Refill</h4>
            <p className="old-price">$70</p>
            <p className="new-price">$59.50</p>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="product-card">
            <span className="discount-badge">10% OFF</span>
            <img src={cooker} alt="Gas Burner" className="product-image" />
            <h4>Double Burner Gas Stove</h4>
            <p className="old-price">$100</p>
            <p className="new-price">$90</p>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>

        {/* Right Column - Best-Selling Products */}
        <div className="bestselling-products">
          <h3>🏆 Best-Selling Products</h3>
          <div className="product-grid">
            <div className="product-card">
              <img src={fifteenkggas} alt="15kg Gas Cylinder" className="product-image" />
              <h4>15kg Gas Cylinder</h4>
              <p className="price">$85</p>
              <button className="buy-now">Buy Now</button>
            </div>

            <div className="product-card">
              <img src={gasrefill} alt="6kg Gas Refill" className="product-image" />
              <h4>6kg Gas Refill</h4>
              <p className="price">$25</p>
              <button className="buy-now">Buy Now</button>
            </div>

            <div className="product-card">
              <img src={grill} alt="Portable Grill" className="product-image" />
              <h4>Portable Gas Grill</h4>
              <p className="price">$120</p>
              <button className="buy-now">Buy Now</button>
            </div>

            <div className="product-card">
              <img src={campingstove} alt="Camping Stove" className="product-image" />
              <h4>Camping Gas Stove</h4>
              <p className="price">$60</p>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
