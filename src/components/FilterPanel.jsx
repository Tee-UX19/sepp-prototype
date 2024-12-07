// FilterPanel.jsx
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import '/src/components/FilterPanel.css';
import fetchItems from '/src/utils/fetchItems';

const FilterPanel = ({ filters, onFilterChange }) => {
    const [localFilters, setLocalFilters] = useState({
        category: '',
        priceRange: [0, 20],
        brand: '',
        inStock: false,
        onSale: false,
        newArrivals: false,
        ...filters
    });

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const itemsData = await fetchItems();
                setItems(itemsData);
            } catch (error) {
                console.log("Error: ", error)
            }
        };

        getItems();
    }, []);

    // Dynamically generate categories and brands from fetched items
    const categories = useMemo(() => {
        return Array.from(new Set(items.map(item => item.category))).sort();
    }, [items]);

    const brands = useMemo(() => {
        return Array.from(new Set(items.map(item => item.brand))).sort();
    }, [items]);

    // Determine price range based on items
    const prices = useMemo(() => items.map(item => item.price), [items]);
    const minPrice = Math.min(...prices, 0);
    const maxPrice = Math.max(...prices, 20);

    // Update localFilters when the parent filters prop changes
    useEffect(() => {
        setLocalFilters(prevFilters => ({
            ...prevFilters,
            ...filters
        }));
    }, [filters]);

    // Handler functions for each filter option
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

    // Apply the selected filters
    const handleApplyFilters = () => {
        onFilterChange(localFilters);
    };

    // Reset filters to default values
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

            {/* Category Filter */}
            <div className="mb-3">
                <label className="form-label" htmlFor="category-select">Category</label>
                <select
                    id="category-select"
                    className="form-select"
                    value={localFilters.category}
                    onChange={handleCategoryChange}
                >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-3">
                <label className="form-label">
                    Price Range (${localFilters.priceRange[0]} - ${localFilters.priceRange[1]})
                </label>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    min={minPrice}
                    max={maxPrice}
                    value={localFilters.priceRange}
                    onChange={handlePriceRangeChange}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                />
                <div className="d-flex justify-content-between">
                    <span>${localFilters.priceRange[0]}</span>
                    <span>${localFilters.priceRange[1]}</span>
                </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-3">
                <label className="form-label" htmlFor="brand-select">Brand</label>
                <select
                    id="brand-select"
                    className="form-select"
                    value={localFilters.brand}
                    onChange={handleBrandChange}
                >
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>

            {/* In Stock Filter */}
            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="inStock"
                    checked={localFilters.inStock}
                    onChange={handleInStockChange}
                />
                <label className="form-check-label" htmlFor="inStock">
                    In Stock Only
                </label>
            </div>

            {/* On Sale Filter */}
            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="onSale"
                    checked={localFilters.onSale}
                    onChange={handleOnSaleChange}
                />
                <label className="form-check-label" htmlFor="onSale">
                    On Sale
                </label>
            </div>

            {/* New Arrivals Filter */}
            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="newArrivals"
                    checked={localFilters.newArrivals}
                    onChange={handleNewArrivalsChange}
                />
                <label className="form-check-label" htmlFor="newArrivals">
                    New Arrivals
                </label>
            </div>

            {/* Apply and Reset Buttons */}
            <button
                className="btn btn-primary w-100 mb-2"
                onClick={handleApplyFilters}
            >
                Apply Filters
            </button>
            <button
                className="btn btn-secondary w-100"
                onClick={handleResetFilters}
            >
                Reset Filters
            </button>
        </div>
    );
};

FilterPanel.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        priceRange: PropTypes.arrayOf(PropTypes.number),
        brand: PropTypes.string,
        inStock: PropTypes.bool,
        onSale: PropTypes.bool,
        newArrivals: PropTypes.bool,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default FilterPanel;
