import React from "react";
import "./BestProduct.css";

function BestProduct() {
  return (
    <section className="best-products">
      <h2>Our Best Products</h2>

      <div className="product-carousel">
        {/* Left Arrow Button */}
        <button className="carousel-btn prev">&#8592;</button>

        {/* Product List */}
        <div className="product-list">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="product-card">
              {/* Image Placeholder */}
              <div className="product-image"></div>

              {/* Product Name */}
              <span className="product-name">Serum</span>

              {/* Small Rounded Button */}
              <div className="product-btn"></div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button className="carousel-btn next">&#8594;</button>
      </div>

{/* Explore More Button */}
<div className="explore-container">
  <button className="explore-more">
    Explore more <span>&#10132;</span>
  </button>
</div>

    </section>
  );
}

export default BestProduct;
