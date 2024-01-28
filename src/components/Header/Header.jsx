import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="nav-list">
          <Link to="/" className="nav-link">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/glasses" className="nav-link">
            <li className="nav-item">Glasses</li>
          </Link>
          <Link to="/Cart" className="nav-link">
            <li className="nav-item">Cart</li>
          </Link>
          <Link to="/login" className="nav-link">
            <li className="nav-item">Profile</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
