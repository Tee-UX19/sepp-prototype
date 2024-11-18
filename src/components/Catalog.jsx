// Catalog.jsx
import React from 'react';
import ItemCard from './itemCard';

const Catalog = () => {
  const items = [
    { id: 1, name: 'Apple', price: 0.5 },
    { id: 2, name: 'Banana', price: 0.3 },
    { id: 3, name: 'Carrot', price: 0.2 },
  ];

  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className="col-md-4 mb-4">
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Catalog;
