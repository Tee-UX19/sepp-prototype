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
                    src={
                        "https://drive.google.com/file/d/1TZaAt4QHiCoxcJWRmS651Jr8uDMPwAAs/view?usp=drive_link"
                    }
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
