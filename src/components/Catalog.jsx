// Catalog.jsx
import React from "react";
import ItemCard from "./ItemCard";
import "./Catalog.css";
import items from "/src/data/Items.json";

const Catalog = ({
    filters,
    setCurrentPage,
    setCurrentItem,
    handleAddItemCounter,
    orderInfo,
}) => {
    const filteredItems = items.filter((item) => {
        return (
            (filters.category === "" || item.category === filters.category) &&
            item.price >= filters.priceRange[0] &&
            item.price <= filters.priceRange[1] &&
            (filters.brand === "" || item.brand === filters.brand) &&
            (!filters.inStock || item.inStock) &&
            (!filters.onSale || item.onSale) &&
            (!filters.newArrivals || item.newArrivals)
        );
    });

    return (
        <div className="catalog-container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {filteredItems.map((item) => (
                    <div key={item.ItemID} className="col">
                        <ItemCard
                            setCurrentPage={setCurrentPage}
                            item={item}
                            setCurrentItem={setCurrentItem}
                            handleAddItemCounter={handleAddItemCounter}
                            orderInfo={orderInfo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
