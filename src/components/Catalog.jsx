// Catalog.jsx
import React from 'react';
import ItemCard from './ItemCard';
import items from '../../data/items.json'; // Adjust the path as needed
import './Catalog.css';

const Catalog = ({ filters }) => {
  const filteredItems = items.filter(item => {
    return (
      (filters.category === '' || item.category.toLowerCase() === filters.category.toLowerCase()) &&
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1] &&
      (filters.brand === '' || item.brand.toLowerCase() === filters.brand.toLowerCase()) &&
      (!filters.inStock || item.inStock) &&
      (!filters.onSale || item.onSale) &&
      (!filters.newArrivals || item.newArrivals)
    );
  });

  return (
    <div className="catalog-container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="col">
              <ItemCard item={item} />
              setCurrentPage={setCurrentPage}
              setCurrentItem={setCurrentItem}
            </div>
          ))
        ) : (
          <div className="col">
            <p>No items match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
