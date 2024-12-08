// /src/pages/CataloguePage.jsx

import { useState } from "react";
import Catalogue from "/src/components/Catalogue";
import FilterPanel from "/src/components/FilterPanel";
import PropTypes from "prop-types";
import "./CataloguePage.css";

const CataloguePage = ({
    setCurrentPage,
    setCurrentItem,
    handleAddItemCounter,
    orderInfo,
    itemSearch,
}) => {
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [0, 20],
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
                        <Catalogue
                            filters={filters}
                            setCurrentPage={setCurrentPage}
                            setCurrentItem={setCurrentItem}
                            handleAddItemCounter={handleAddItemCounter}
                            orderInfo={orderInfo}
                            itemSearch={itemSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

CataloguePage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    setCurrentItem: PropTypes.func.isRequired,
    handleAddItemCounter: PropTypes.func.isRequired,
    orderInfo: PropTypes.shape({
        OrderID: PropTypes.number.isRequired,
        UserID: PropTypes.number.isRequired,
    }).isRequired,
    itemSearch: PropTypes.string.isRequired,
};

export default CataloguePage;
