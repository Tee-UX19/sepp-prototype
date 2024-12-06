// FilterPanel.jsx
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '/src/components/FilterPanel.css';

const FilterPanel = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState({
    category: '',
    priceRange: [0, 100],
    brand: '',
    inStock: false,
    onSale: false,
    newArrivals: false,
    ...filters
  });

  const handleCategoryChange = (e) => {
    setLocalFilters({ ...localFilters, category: e.target.value });
  };

  const handlePriceRangeChange = (values) => {
    setLocalFilters({ ...localFilters, priceRange: values });
  };

  const handleBrandChange = (e) => {
    setLocalFilters({ ...localFilters, brand: e.target.value });
  };

  const handleInStockChange = (e) => {
    setLocalFilters({ ...localFilters, inStock: e.target.checked });
  };

  const handleOnSaleChange = (e) => {
    setLocalFilters({ ...localFilters, onSale: e.target.checked });
  };

  const handleNewArrivalsChange = (e) => {
    setLocalFilters({ ...localFilters, newArrivals: e.target.checked });
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleResetFilters = () => {
    const defaultFilters = {
      category: '',
      priceRange: [0, 20],
      brand: '',
      inStock: false,
      onSale: false,
      newArrivals: false,
    };
    setLocalFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="filter-panel bg-light p-3">
      <h5>Filters</h5>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select" value={localFilters.category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          <option value="bakery">Bakery</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Price Range</label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          min={0}
          max={20}
          value={localFilters.priceRange}
          onChange={handlePriceRangeChange}
        />
        <div className="d-flex justify-content-between">
          <span>${localFilters.priceRange[0]}</span>
          <span>${localFilters.priceRange[1]}</span>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Brand</label>
        <select className="form-select" value={localFilters.brand} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
        </select>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="inStock" checked={localFilters.inStock} onChange={handleInStockChange} />
        <label className="form-check-label" htmlFor="inStock">
          In Stock Only
        </label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="onSale" checked={localFilters.onSale} onChange={handleOnSaleChange} />
        <label className="form-check-label" htmlFor="onSale">
          On Sale
        </label>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="newArrivals" checked={localFilters.newArrivals} onChange={handleNewArrivalsChange} />
        <label className="form-check-label" htmlFor="newArrivals">
          New Arrivals
        </label>
      </div>
      <button className="btn btn-primary w-100 mb-2" onClick={handleApplyFilters}>Apply Filters</button>
      <button className="btn btn-secondary w-100" onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};

export default FilterPanel;