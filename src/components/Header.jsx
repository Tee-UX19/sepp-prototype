import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ setCurrentPage, cardCounter }) => {
    const handleLogoClick = () => {
        console.log("Logo clicked");
        setCurrentPage("CataloguePage"); // Optionally navigate to the catalogue
    };

    const handleSearchChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <header className="header">
            <button className="logo-button" onClick={handleLogoClick}>
                {/* Logo Image */}
                <img
                    src="src/assets/white_nobg_logo.png"
                    alt="Logo"
                    className="logo-image"
                />
            </button>
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={handleSearchChange}
            />
            <button
                className="profile-button"
                onClick={() => setCurrentPage("CartPage")}
            >
                <FaShoppingCart
                    style={{
                        color: "white",
                        fontSize: "3em",
                        margin: "auto 1em",
                    }}
                />
                <span className="cart-count">{cardCounter}</span>
            </button>
        </header>
    );
};

export default Header;
