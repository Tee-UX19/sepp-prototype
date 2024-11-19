// FilterPanel.jsx
import React from 'react';
import './FilterPanel.css';

const FilterPanel = () => {
  return (
    <div className="filter-panel bg-light p-3">
      <h5>Filters</h5>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select">
          <option value="">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Price Range</label>
        <input type="range" className="form-range" min="0" max="100" />
      </div>
      <div className="mb-3">
        <label className="form-label">Brand</label>
        <select className="form-select">
          <option value="">All Brands</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="inStock" />
        <label className="form-check-label" htmlFor="inStock">
          In Stock Only
        </label>
      </div>
      <button className="btn btn-primary w-100">Apply Filters</button>
    </div>
  );
};

export default FilterPanel;