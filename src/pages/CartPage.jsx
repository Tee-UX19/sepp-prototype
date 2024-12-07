// src/pages/CartPage.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CartPage.css";
import { FiTrash } from 'react-icons/fi';

const CartPage = ({ setCurrentPage, orderInfo }) => {
    const [cartItems, setCartItems] = useState([]);
    const [activeToggle, setActiveToggle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false); // For the error transition

    const { OrderID, UserID } = orderInfo;

    // Fetch data and calculate quantities
    useEffect(() => {
        const fetchCartData = async () => {
            try {
                // Fetch orderItems and items concurrently
                const [orderItemsResponse, itemsResponse] = await Promise.all([
                    fetch("http://localhost:4141/orderItems"),
                    fetch("http://localhost:4141/items"),
                ]);

                if (!orderItemsResponse.ok) throw new Error("Failed to fetch order items.");
                if (!itemsResponse.ok) throw new Error("Failed to fetch items.");

                const orderItemsData = await orderItemsResponse.json();
                const itemsData = await itemsResponse.json();

                // Filter relevant order items
                const relevantOrderItems = orderItemsData.filter(
                    (orderItem) => orderItem.OrderID === OrderID
                );

                // Aggregate quantities
                const aggregationMap = new Map();

                relevantOrderItems.forEach(({ ItemID, UserID: uid }) => {
                    if (!aggregationMap.has(ItemID)) {
                        aggregationMap.set(ItemID, { userQuantity: 0, totalQuantity: 0 });
                    }
                    const item = aggregationMap.get(ItemID);
                    if (uid === UserID) item.userQuantity += 1;
                    item.totalQuantity += 1;
                });

                // Prepare cart items
                const cartItemsArray = Array.from(aggregationMap.entries()).map(
                    ([ItemID, { userQuantity, totalQuantity }]) => {
                        const itemDetails = itemsData.find((item) => item.ItemID === ItemID);
                        return itemDetails
                            ? {
                                id: ItemID,
                                name: itemDetails.name,
                                shelfLife: itemDetails.subtitle || "N/A",
                                weight: itemDetails.unit,
                                calories: itemDetails.calories || "N/A",
                                userQuantity,
                                totalQuantity,
                                pricePerUnit: parseFloat(itemDetails.price),
                                image: itemDetails.image,
                            }
                            : null;
                    }
                ).filter(item => item !== null);

                setCartItems(cartItemsArray);
                setError(null);
                setVisible(false);
            } catch (error) {
                console.error("Error fetching cart data:", error.message);
                setError(error.message);
                setVisible(true); 
            } finally {
                setIsLoading(false);
            }
        };

        if (OrderID && UserID) {
            fetchCartData();
        } else {
            setError("Invalid order information.");
            setVisible(true);
            setIsLoading(false);
        }
    }, [OrderID, UserID]);

    // Handle error message visibility with fade-out
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setVisible(false); // start transition
                const fadeOutTimer = setTimeout(() => {
                    setError(null);
                }, 1000);

                return () => clearTimeout(fadeOutTimer);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    // Handle Remove: Deletes one instance of the item
    const handleRemoveItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:4141/orderItems`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ OrderID, ItemID: id, UserID }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to remove item.');
            }

            // Update local state by decrementing the quantities
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            userQuantity: Math.max(item.userQuantity - 1, 0),
                            totalQuantity: Math.max(item.totalQuantity - 1, 0),
                        }
                        : item
                ).filter(item => item.totalQuantity > 0)
            );
        } catch (error) {
            console.error(error);
            setError(error.message);
            setVisible(true);
        }
    };

    // Handle Add Item: Adds one unit of the item
    const handleAddItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:4141/orderItems`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ OrderID, ItemID: id, UserID }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to add item.');
            }

            // Update local state by incrementing the quantities
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            userQuantity: item.userQuantity + 1,
                            totalQuantity: item.totalQuantity + 1,
                        }
                        : item
                )
            );
        } catch (error) {
            console.error(error);
            setError(error.message);
            setVisible(true);
        }
    };

    // Handle Click Outside for Toggle
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

    // Calculate Totals
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

    // Handle Checkout
    const handleCheckout = () => {
        setCurrentPage('CheckoutPage');
    };

    if (isLoading) {
        return <div className="cart-page"><p>Loading...</p></div>;
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                {/* Shopping Cart Header */}
                <h2 className="shopping-cart-header">Shopping Cart</h2>

                {error && (
                    <div className={`error-message ${visible ? 'visible' : 'hidden'}`}>
                        {error}
                    </div>
                )}

                {cartItems.length === 0 && !error ? (
                    <div className="empty-cart">Your cart is empty.</div>
                ) : (
                    cartItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`cart-item ${index === 0 ? "top-rounded" : index === cartItems.length - 1 ? "bottom-rounded" : ""} ${activeToggle === item.id ? "active" : ""}`}
                        >
                            <div className="left-section">
                                {/* Fraction with +/- toggle */}
                                <div className="fraction-toggle">
                                    <div
                                        className={`fraction ${activeToggle === item.id ? "hidden" : ""}`}
                                        onClick={() => setActiveToggle(activeToggle === item.id ? null : item.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') setActiveToggle(activeToggle === item.id ? null : item.id);
                                        }}
                                        aria-label={`Toggle quantity controls for ${item.name}`}
                                    >
                                        {item.userQuantity}/{item.totalQuantity}
                                    </div>
                                    {activeToggle === item.id && (
                                        <div id={`toggle-${item.id}`} className="toggle-controls expanded">
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                aria-label={`Remove one ${item.name}`}
                                            >
                                                -
                                            </button>
                                            <span>{item.userQuantity}</span>
                                            <button
                                                onClick={() => handleAddItem(item.id)}
                                                aria-label={`Add one ${item.name}`}
                                            >
                                                +
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="item-image">
                                    <img src={item.image} alt={`${item.name} image`} />
                                </div>

                                {/* Name and Details */}
                                <div className="item-details">
                                    <h2>{item.name}</h2>
                                    <p>Shelf Life: {item.shelfLife}</p>
                                    <p>Weight: {item.weight} | Calories: {item.calories}</p>
                                </div>
                            </div>

                            {/* Pricing and Bin */}
                            <div className="item-pricing">
                                <div className="pricing-container">
                                    <div className="pricing">
                                        <p>Your Share: £{(item.userQuantity * item.pricePerUnit).toFixed(2)}</p>
                                        <p>Total: £{(item.totalQuantity * item.pricePerUnit).toFixed(2)}</p>
                                        <p>£{item.pricePerUnit.toFixed(2)}/unit</p>
                                    </div>
                                    <FiTrash
                                        className="remove-icon"
                                        onClick={() => handleRemoveItem(item.id)}
                                        aria-label={`Remove one ${item.name} from cart`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            <div className="cart-footer">
                <div className="price-summary">
                    <span>Share: £{totals.totalShare}</span>
                    <span>Total: £{totals.totalPrice}</span>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
};

CartPage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    orderInfo: PropTypes.shape({
        OrderID: PropTypes.number.isRequired,
        UserID: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartPage;
