// ItemCard.jsx
import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-img-top" loading="lazy" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-details">
            <p className="card-text">${item.price.toFixed(2)}</p>
            <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;