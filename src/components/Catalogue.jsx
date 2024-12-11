// /src/components/Catalogue.jsx

import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import fetchItems from '/src/utils/fetchItems';
import './Catalogue.css';

const Catalogue = ({
    filters,
    setCurrentPage,
    setCurrentItem,
    handleAddItemCounter,
    orderInfo,
    itemSearch,
}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItems = async () => {
            try {
                const itemsData = await fetchItems();
                setItems(itemsData);
                setLoading(false);
            } catch {
                setError("Failed to load items.");
                setLoading(false);
            }
        };

        getItems();
    }, []);

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            // Normalize the search term and item name for case-insensitive comparison
            const normalizedSearch = itemSearch.trim().toLowerCase();
            const normalizedName = item.name.toLowerCase();
            const matchesSearch = normalizedName.includes(normalizedSearch);

            // Normalize the category for comparison
            const normalizedFilterCategory = filters.category.trim().toLowerCase();
            const normalizedItemCategory = item.category.trim().toLowerCase();
            const matchesCategory =
                filters.category === "" || normalizedItemCategory === normalizedFilterCategory;

            // Normalize the brand for comparison
            const normalizedFilterBrand = filters.brand.trim().toLowerCase();
            const normalizedItemBrand = item.brand.trim().toLowerCase();
            const matchesBrand =
                filters.brand === "" || normalizedItemBrand === normalizedFilterBrand;

            // Other filter conditions
            const matchesPrice =
                item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
            const matchesInStock = !filters.inStock || item.inStock;
            const matchesOnSale = !filters.onSale || item.onSale;
            const matchesNewArrivals = !filters.newArrivals || item.newArrivals;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesPrice &&
                matchesBrand &&
                matchesInStock &&
                matchesOnSale &&
                matchesNewArrivals
            );
        });
    }, [items, filters, itemSearch]);

    if (loading) {
        return <div>Loading items...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="catalogue-container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div key={item.ItemID} className="col">
                            <ItemCard
                                setCurrentPage={setCurrentPage}
                                item={item}
                                setCurrentItem={setCurrentItem}
                                handleAddItemCounter={handleAddItemCounter}
                                orderInfo={orderInfo}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col">
                        <p>No items match your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

Catalogue.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        brand: PropTypes.string,
        priceRange: PropTypes.arrayOf(PropTypes.number),
        inStock: PropTypes.bool,
        onSale: PropTypes.bool,
        newArrivals: PropTypes.bool,
    }).isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    setCurrentItem: PropTypes.func.isRequired,
    handleAddItemCounter: PropTypes.func.isRequired,
    orderInfo: PropTypes.shape({
        OrderID: PropTypes.number,
        UserID: PropTypes.number,
    }).isRequired,
    itemSearch: PropTypes.string.isRequired,
};

export default Catalogue;
