// ItemCard.jsx
import React, { useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-img-top" loading="lazy" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-details">
          <p className="card-text">${item.price.toFixed(2)}</p>
          {quantity === 0 ? (
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          ) : (
            <div className="quantity-controls">
              <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;