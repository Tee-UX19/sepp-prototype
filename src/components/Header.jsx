import React from 'react';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
  };

  const handleProfileClick = () => {
    console.log('Profile icon clicked');
  };

  return (
    <header className="header">
      <button className="logo-button" onClick={handleLogoClick}>
        {/* ADD LOGO HERE */}
        <img src="path-to-your-logo.png" alt="Logo" className="logo-image" />
      </button>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <button className="profile-button" onClick={handleProfileClick}>
        <FaShoppingCart style={{ color: "white", fontSize: "2em", margin: "auto 1em" }} />
      </button>
    </header>
  );
}

export default Header;