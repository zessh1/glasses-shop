import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Glasses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
