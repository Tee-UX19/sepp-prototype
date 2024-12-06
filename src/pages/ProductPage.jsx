import React from "react";
import styles from "./ProductPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import handleAddToCart from "/src/utils/handleAddToCart.js";

const ProductPage = ({
    setCurrentPage,
    item,
    handleAddItemCounter,
    orderInfo,
}) => {
    return (
        <div className={styles.container}>
            {/* Top Container */}
            <div className={styles.topContainer}>
                {/* Left Side - Image */}
                <div className={styles.imageContainer}>
                    <img
                        src={item.image}
                        alt={item.name}
                        className={styles.image}
                    />
                </div>

                {/* Right Side - Information */}
                <div className={styles.infoContainer}>
                    <div className={styles.infoText}>
                        <h1 className={styles.title}>{item.name}</h1>
                        <h3 className={styles.subtitle}>{item.subtitle}</h3>
                        <p className={styles.description}>{item.description}</p>
                        <h3 className={styles.subtitle}>£{item.price} </h3>
                    </div>

                    <button
                        onClick={() =>
                            handleAddToCart(
                                item,
                                orderInfo,
                                handleAddItemCounter
                            )
                        }
                        className={styles.button}
                    >
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Nutritional Table */}
            <div className={styles.tableContainer}>
                {/* Allergens Section */}
                <div>
                    <h2 className={styles.tableHeader}>Allergens</h2>
                    <p className={styles.subtitle}>
                        {item.productInformation.allergens.length > 0
                            ? item.productInformation.allergens.join(", ")
                            : "No known allergens"}
                    </p>
                </div>

                {/* Ingredients Section */}
                <div>
                    <h2 className={styles.tableHeader}>Ingredients</h2>
                    <p className={styles.subtitle}>
                        {item.productInformation.ingredients.length > 0
                            ? item.productInformation.ingredients.join(", ")
                            : "No ingredients listed"}
                    </p>
                </div>

                {/* Nutritional Table Section */}
                <div>
                    <h2 className={styles.tableHeader}>Nutritional Table</h2>
                    {item.productInformation.hasNutrition ? (
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Nutritional Values</th>
                                    <th>per 100 ml</th>
                                    <th>per 150 ml</th>
                                    <th>RI*</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Energy</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .energy?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .energy?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .energy?.RI || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Energy (kcal)</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .energyCal?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .energyCal?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .energyCal?.RI || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fats</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .fats?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .fats?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .fats?.RI || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>of which saturated fatty acids</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .saturatedFat?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .saturatedFat?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .saturatedFat?.RI || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .carbohydrates?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .carbohydrates?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .carbohydrates?.RI || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>of which sugars</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .sugars?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .sugars?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .sugars?.RI || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fibres</td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .fibres?.per100ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .fibres?.per150ml || "N/A"}
                                    </td>
                                    <td>
                                        {item.productInformation.nutritional
                                            .fibres?.RI || "N/A"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p className={styles.subtitle}>
                            No nutritional information available
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
