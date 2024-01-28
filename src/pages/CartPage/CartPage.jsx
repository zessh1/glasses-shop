// CartPage.js

import React from "react";
import "./CartPage.css"; // Import your CSS file
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { removeItem } from "../../hooks/removeItem";

const CartPage = () => {
  // DummyData.js
  const [data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3031/cart_list")
      .then((data) => setData(data.data));
  }, [dataChanged]);

  const cartItems = data;
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <div>
      <Header />

      <div className="cart-page">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image_url}
                  alt={`product ${item.id}`}
                  className="cart-product-image"
                />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <span className="quantity">Quantity: {item.quantity}</span>
                  <button
                    type="submit"
                    onClick={async () => {
                      const success = await removeItem(item.id);
                      if (success) {
                        setDataChanged(!dataChanged);
                      }
                    }}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="total-price">
          <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
