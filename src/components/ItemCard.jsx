// ItemCard.jsx
import React from "react";
import "/src/components/ItemCard.css";
import handleAddToCart from "/src/utils/handleAddToCart.js";

const ItemCard = ({
    setCurrentPage,
    item,
    setCurrentItem,
    handleAddItemCounter,
    orderInfo,
}) => {
    const handleNavigateToProduct = () => {
        setCurrentItem(item);
        setCurrentPage("ProductPage");
    };

    return (
        <div className="card">
            <div onClick={handleNavigateToProduct} style={{ cursor: "pointer" }}>
                <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    loading="lazy"
                />
            </div>
            <div className="card-body">
                <div onClick={handleNavigateToProduct} style={{ cursor: "pointer" }}>
                    <h5 className="card-title">{item.name}</h5>
                </div>
                <div className="card-details">
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            handleAddToCart(
                                item,
                                orderInfo,
                                handleAddItemCounter
                            )
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
