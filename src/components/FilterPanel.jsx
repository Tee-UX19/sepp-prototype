// FilterPanel.jsx
import React from 'react';

const FilterPanel = () => {
  return (
    <div className="bg-light p-3">
      <h5>Filters</h5>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select">
          <option value="">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Price Range</label>
        <input type="range" className="form-range" />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="inStock" />
        <label className="form-check-label" htmlFor="inStock">
          In Stock Only
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
