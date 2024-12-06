import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ setCurrentPage, setItemSearch, cardCounter }) => {
    const handleLogoClick = () => {
        console.log("Logo clicked");
        setCurrentPage("CataloguePage");
    };

    const handleSearchChange = (event) => {
        setItemSearch(event.target.value);
    };

    return (
        <header className="header">
            <button className="logo-button" onClick={handleLogoClick}>
                <img src={"/"} alt="Logo" className="logo-image" />
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
                        fontSize: "2em",
                        margin: "auto 1em",
                    }}
                />
                {cardCounter}
            </button>
        </header>
    );
};

export default Header;
