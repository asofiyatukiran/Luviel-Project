import React from "react";
import "./ProductRange.css";

function ProductRange() {
  return (
    <div className="product-range-container">
      <h2 className="section-title">Our Product Range</h2>
      
      {/* Top row of product cards */}
      <div className="product-cards-top">
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
      </div>
      
      {/* Bottom section with small cards and text */}
      <div className="product-cards-bottom">
        <div className="small-card">
          <p>Types of products for the care of your skin</p>
          <span className="circle-icon"></span>
        </div>
        <div className="small-card faded">
          <p>Body care and wellness products</p>
        </div>
        <div className="product-description">
          <p>
            Ready to elevate your skincare routine and achieve your skin goals?
            Browse our selection of skincare products and discover the perfect
            solutions for your unique needs.
          </p>
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </div>
  );
}
export default ProductRange;
