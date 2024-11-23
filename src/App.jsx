// App.jsx
import React, { useState, useEffect } from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import CataloguePage from "./pages/CataloguePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import getCartCount from "/src/utils/getCartCount";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = useState("CataloguePage");
    const [currentItem, setCurrentItem] = useState();
    const [orderInfo, setOrderInfo] = useState({
        OrderID: 2,
        UserID: 3,
    });
    const [cardCounter, setCardCounter] = useState(0);

    const handleAddItemCounter = () => {
        setCardCounter(cardCounter + 1);
    };

    // Function to fetch and update the cart count
    const refreshCartCount = async () => {
        try {
            const count = await getCartCount();
            setCardCounter(count);
        } catch (err) {
            console.error("Failed to fetch cart count:", err);
        }
    };

    useEffect(() => {
        refreshCartCount();
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case "CataloguePage":
                return (
                    <>
                        <CataloguePage
                            setCurrentPage={setCurrentPage}
                            setCurrentItem={setCurrentItem}
                            handleAddItemCounter={handleAddItemCounter}
                            orderInfo={orderInfo}
                        />
                    </>
                );
            case "CartPage":
                return (
                    <>
                        <CartPage setCurrentPage={setCurrentPage} />
                    </>
                );
            case "CheckoutPage":
                return (
                    <>
                        <Header setCurrentPage={setCurrentPage} />
                    </>
                );
            case "ProductPage":
                return (
                    <>
                        <ProductPage
                            setCurrentPage={setCurrentPage}
                            item={currentItem}
                            handleAddItemCounter={handleAddItemCounter}
                            orderInfo={orderInfo}
                        />
                    </>
                );
            default:
                return <CataloguePage />;
        }
    };

    return (
        <>
            <Header setCurrentPage={setCurrentPage} cardCounter={cardCounter} />
            {renderPage()}
            <Footer />
        </>
    );
};

export default App;
