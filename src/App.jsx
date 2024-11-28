import React, { useState } from 'react';
import Header from './components/Header';
import Catalog from './components/Catalog';
import FilterPanel from './components/FilterPanel';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 20],
    brand: '',
    inStock: false,
    onSale: false,
    newArrivals: false,
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="container-fluid mt-2">
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

export default App;