import React, { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import handleAddToCart from "/src/utils/handleAddToCart.js";

const ProductPage = ({
    setCurrentPage,
    item,
    handleAddItemCounter,
    orderInfo,
}) => {
    const handleButtonClick = () => {
        console.log("button clicked");
    };

    /*   const item = {
    ItemID: "1",
    name: "Mild Semi-skimmed Yogurt 1 L",
    subtitle: "Fresh and Juicy",
    category: "Dairy",
    price: 1.99,
    image:
      "https://jumbo.com/dam-images/fit-in/360x360/Products/04092024_1725460582324_1725460597594_8718452753444_596.png",
    unit: "1 lb",
    description: "its yogurt idk.",
    brand: "Brand A",
    inStock: true,
    onSale: false,
    newArrivals: false,
    productInformation: {
      hasNutrition: true,
      ingredients: ["milk", "water"],
      allergens: ["milk"],
      nutritional: {
        energy: { per100ml: "210 kJ", per150ml: "316 kJ", RI: "4%" },
        energyCal: { per100ml: "50 kcal", per150ml: "75 kcal", RI: "4%" },
        fats: { per100ml: "1.5 g", per150ml: "2.3 g", RI: "3%" },
        saturatedFat: { per100ml: "1.0 g", per150ml: "1.5 g", RI: "8%" },
        carbohydrates: { per100ml: "4.3 g", per150ml: "6.5 g", RI: "3%" },
        sugars: { per100ml: "4.3 g", per150ml: "6.5 g", RI: "7%" },
        fibres: { per100ml: "0.0 g", per150ml: "0.0 g", RI: "" },
      },
    },
  }; */

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
            {item.productInformation.hasNutrition && (
                <div className={styles.tableContainer}>
                    <div>
                        <h2 className={styles.tableHeader}>Allergens</h2>
                        <p className={styles.subtitle}>
                            {item.productInformation.allergens.join(", ")}
                        </p>
                    </div>
                    <div>
                        <h2 className={styles.tableHeader}>Ingredients</h2>
                        <p className={styles.subtitle}>
                            {item.productInformation.ingredients.join(", ")}
                        </p>
                    </div>
                    <h2 className={styles.tableHeader}>Nutritional Table</h2>
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
                                    {
                                        item.productInformation.nutritional
                                            .energy.per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .energy.per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .energy.RI
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Energy (kcal)</td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .energyCal.per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .energyCal.per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .energyCal.RI
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Fats</td>
                                <td>
                                    {
                                        item.productInformation.nutritional.fats
                                            .per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional.fats
                                            .per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional.fats
                                            .RI
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>of which saturated fatty acids</td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .saturatedFat.per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .saturatedFat.per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .saturatedFat.RI
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Carbohydrates</td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .carbohydrates.per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .carbohydrates.per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .carbohydrates.RI
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>of which sugars</td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .sugars.per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .sugars.per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .sugars.RI
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Fibres</td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .fibres.per100ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .fibres.per150ml
                                    }
                                </td>
                                <td>
                                    {
                                        item.productInformation.nutritional
                                            .fibres.RI
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
