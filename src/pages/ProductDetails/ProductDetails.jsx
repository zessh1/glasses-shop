// ProductDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Import your CSS file
import Header from "../../components/Header/Header";
import { addToCart } from "../../hooks/addToCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulating fetching product details from an API
    const fetchProductDetails = async () => {
      try {
        // Replace this with actual API call using the id parameter
        const response = await fetch(`http://localhost:3031/glasses/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <>
      <Header />
      <div className="product-details">
        {product ? (
          <div className="details-container">
            <img src={product.image_url} alt={product.name} />
            <div className="product-description">
              <h2>{product.name}</h2>
              <p className="brand">Brand: {product.brand}</p>
              <p className="gender">Gender: {product.gender}</p>
              <p className="price">Price: ${product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
              <button onClick={() => addToCart(product)} className="cart-add">
                Add to cart
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
