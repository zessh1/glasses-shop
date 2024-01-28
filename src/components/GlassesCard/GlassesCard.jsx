import React from "react";
import "./GlassesCard.css";
import { addToCart } from "../../hooks/addToCart";

const GlassesCard = ({ data }) => {
  return (
    <div className="glasses-card">
      <img src={data.image_url} alt={data.title} className="glasses-image" />
      <div className="glasses-details">
        <h3 className="glasses-title">{data.name}</h3>
        <p className="glasses-price">${data.price}</p>
        <button onClick={() => addToCart(data)}>Add to cart</button>
      </div>
    </div>
  );
};

export default GlassesCard;
