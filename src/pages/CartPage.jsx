import React, { useState, useEffect } from "react";
import "./CartPage.css";

const CartPage = ({ setCurrentPage }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Nature's Pick Cherry Tomatoes",
            shelfLife: "3+ days",
            weight: "330g",
            calories: "120 kcal",
            userQuantity: 1,
            totalQuantity: 4,
            pricePerUnit: 0.95,
        },
        {
            id: 2,
            name: "Organic Bananas 6 Pack",
            shelfLife: "3+ days",
            weight: "6 pack",
            calories: "150 kcal",
            userQuantity: 1,
            totalQuantity: 3,
            pricePerUnit: 1.39,
        },
        {
            id: 3,
            name: "Nature's Pick Blueberries",
            shelfLife: "5+ days",
            weight: "150g",
            calories: "300 kcal",
            userQuantity: 0,
            totalQuantity: 2,
            pricePerUnit: 1.69,
        },
    ]);

    const [activeToggle, setActiveToggle] = useState(null);

    const handleRemove = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, userQuantity: 0, totalQuantity: item.totalQuantity - item.userQuantity } : item
            )
        );
    };

    const handleAddItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, userQuantity: item.userQuantity + 1, totalQuantity: item.totalQuantity + 1 }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.userQuantity > 0
                    ? { ...item, userQuantity: item.userQuantity - 1, totalQuantity: item.totalQuantity - 1 }
                    : item
            )
        );
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest(".fraction-toggle")) {
            setActiveToggle(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const calculateTotals = () => {
        let totalShare = 0;
        let totalPrice = 0;

        cartItems.forEach((item) => {
            totalShare += item.userQuantity * item.pricePerUnit;
            totalPrice += item.totalQuantity * item.pricePerUnit;
        });

        return { totalShare: totalShare.toFixed(2), totalPrice: totalPrice.toFixed(2) };
    };

    const totals = calculateTotals();

    return (
        <div className="cart-page">
            <div className="cart-container">
                {cartItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`cart-item ${index === 0 ? "top-rounded" : index === cartItems.length - 1 ? "bottom-rounded" : ""
                            }`}
                    >
                        {/* Fraction with +/- toggle */}
                        <div className="fraction-toggle">
                            <div
                                className={`fraction ${activeToggle === item.id ? "hidden" : ""}`}
                                onClick={() => setActiveToggle(activeToggle === item.id ? null : item.id)}
                            >
                                {item.userQuantity}/{item.totalQuantity}
                            </div>
                            {activeToggle === item.id && (
                                <div id={`toggle-${item.id}`} className="toggle-controls expanded">
                                    <button onClick={() => handleRemoveItem(item.id)}>-</button>
                                    <span>{item.userQuantity}</span>
                                    <button onClick={() => handleAddItem(item.id)}>+</button>
                                </div>
                            )}
                        </div>


                        {/* Image */}
                        <div className="item-image">
                            <img src={`path/to/image/${item.id}.jpg`} alt={item.name} />
                        </div>

                        {/* Name and Details */}
                        <div className="item-details">
                            <h2>{item.name}</h2>
                            <p>{item.shelfLife}</p>
                            <p>
                                {item.weight} | {item.calories}
                            </p>
                        </div>

                        {/* Pricing and Bin */}
                        <div className="item-pricing">
                            <div className="pricing">
                                <p>Your Share: £{(item.userQuantity * item.pricePerUnit).toFixed(2)}</p>
                                <p>Total: £{(item.totalQuantity * item.pricePerUnit).toFixed(2)}</p>
                                <p>{item.pricePerUnit.toFixed(2)}/unit</p>
                            </div>
                            <button className="remove-button" onClick={() => handleRemove(item.id)}>
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="cart-footer">
                <div className="price-summary" style={{ color: "black" }}>
                    <span>Share: £{parseFloat(totals.totalShare).toFixed(2)}</span>
                    <span>Total: £{parseFloat(totals.totalPrice).toFixed(2)}</span>
                </div>
                <button
                    className="checkout-button"
                    onClick={() => setCurrentPage('CheckoutPage')}
                />
            </div>
        </div>
    );
};

export default CartPage;
