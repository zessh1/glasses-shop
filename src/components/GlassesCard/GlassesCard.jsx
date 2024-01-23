import React from "react";
import "./GlassesCard.css"; // Import your CSS file for styling

const GlassesCard = ({ image, title, price }) => {
  return (
    <div className="glasses-card">
      <img src={image} alt={title} className="glasses-image" />

      <div className="glasses-details">
        <h3 className="glasses-title">{title}</h3>
        <p className="glasses-price">${price}</p>
      </div>
    </div>
  );
};

export default GlassesCard;
