// Catalog.jsx
import React from 'react';
import ItemCard from './ItemCard';
import './Catalog.css';

const Catalog = ({ filters }) => {
  const items = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    category: index % 2 === 0 ? 'fruits' : 'vegetables', // Example categories
    price: parseFloat((Math.random() * 10).toFixed(2)),
    brand: index % 3 === 0 ? 'brandA' : 'brandB', // Example brands
    inStock: index % 2 === 0,
    onSale: index % 4 === 0,
    newArrivals: index % 5 === 0,
    image: `https://via.placeholder.com/150?text=Item+${index + 1}`,
  }));

  const filteredItems = items.filter(item => {
    return (
      (filters.category === '' || item.category === filters.category) &&
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1] &&
      (filters.brand === '' || item.brand === filters.brand) &&
      (!filters.inStock || item.inStock) &&
      (!filters.onSale || item.onSale) &&
      (!filters.newArrivals || item.newArrivals)
    );
  });

  return (
    <div className="catalog-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredItems.map(item => (
          <div key={item.id} className="col">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;