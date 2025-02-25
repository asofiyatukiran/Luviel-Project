import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import heroImage from '../assets/hero-image.png'; // Replace with your actual image

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Left Side - Text */}
      <div className='hero-text'>
        <h1>Luviel Reveal Your Beauty</h1>
        <p>Stay consistent, know your skin deeply, and achieve your skincare goals effortlessly with Luviel.</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--signup'
            buttonSize='btn--large'
            onClick={() => console.log('Try Now Clicked')}
          >
            Try Now <i className="fas fa-angle-double-right"></i>
          </Button>
        </div>
      </div>

      {/* Right Side - Image with Annotations */}
      <div className='hero-image'>
        <img src={heroImage} alt="Model" />

        {/* Small Annotations */}
        <div className="annotation annotation-1">
          <strong>Skin type:</strong> Normal skin
        </div>
        <div className="annotation annotation-2">
          <strong>Black spot:</strong> Quite invisible
        </div>
        <div className="annotation annotation-3">
          <strong>Fine lines:</strong> 8 lines detected
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
