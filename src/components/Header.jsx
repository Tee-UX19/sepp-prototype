import React from 'react';
import './Header.css';
import cartSVG from '../assets/cart.svg';

function Header() {
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartClick = () => {
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
      <button className="logo-button" onClick={handleCartClick}>
        {/* ADD LOGO HERE */}
        <img src="path-to-your-logo.png" alt="Logo" className="logo-image" />
      </button>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <button className="cart-button" onClick={handleProfileClick}>
        <img
          src={cartSVG}
          alt="Cart"
          className="cart-icon"
        />
       <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}

export default Header;
