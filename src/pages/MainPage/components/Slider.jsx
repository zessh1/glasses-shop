// Slider.js

import React from "react";
import "./styles.css"; // Import your CSS file

const Slider = ({ slides }) => {
  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img
              src={slide.image_url}
              className="slider-img"
              alt={`Slide ${slide.id}`}
            />
            <div className="slide-details">
              <h3>{slide.title}</h3>
              <p className="price">${slide.price.toFixed(2)}</p>
              <a href={`/product-details/${slide.id}`} className="slide-link">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
