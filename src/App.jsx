import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import FilterPanel from './components/FilterPanel';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 100],
    brand: '',
    inStock: false,
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
            <Catalog />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;