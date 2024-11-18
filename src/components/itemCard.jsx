// ItemCard.jsx
import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price: ${item.price.toFixed(2)}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
