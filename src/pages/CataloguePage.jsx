import React, { useState } from 'react';
import Header from '/src/components/Header';
import Catalog from '/src/components/Catalog';
import FilterPanel from '/src/components/FilterPanel';
import './CataloguePage.css';

const CataloguePage = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 100],
    brand: '',
    inStock: false,
    onSale: false,
    newArrivals: false,
  });

  const [cartCount, setCartCount] = useState(0);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app-container">
      <Header cartCount={cartCount} />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </div>
          <div className="col-md-9">
            <Catalog filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CataloguePage;