// Header.jsx
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';
import "./Header.css";

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

Header.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    setItemSearch: PropTypes.func.isRequired,
    cardCounter: PropTypes.number.isRequired,
};

export default Header;
