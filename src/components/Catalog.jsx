// Catalog.jsx
import React from 'react';
import ItemCard from './itemCard';
import './Catalog.css';

const Catalog = () => {
  const items = Array.from({ length: 32 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    price: parseFloat((Math.random() * 10).toFixed(2)),
    image: `https://img.gs/pmrjffcqck/full/https://via.placeholder.com/150?text=Item+${index + 1}`
  }));

  return (
    <div className="catalog-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {items.map(item => (
          <div key={item.id} className="col">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;