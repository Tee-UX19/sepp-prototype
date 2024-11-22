// CataloguePage.jsx
import React, { useState } from "react";
import Catalog from "/src/components/Catalog";
import FilterPanel from "/src/components/FilterPanel";
import "./CataloguePage.css";

const CataloguePage = ({ setCurrentPage, setCurrentItem }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 100],
    brand: "",
    inStock: false,
    onSale: false,
    newArrivals: false,
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app-container">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-md-9">
            <Catalog
              filters={filters}
              setCurrentPage={setCurrentPage}
              setCurrentItem={setCurrentItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CataloguePage;
