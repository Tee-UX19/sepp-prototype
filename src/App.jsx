import { useState, useEffect } from "react";
import Header from "/src/components/Header";
import CataloguePage from "./pages/CataloguePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import getCartCount from "/src/utils/getCartCount";
import "./App.css";

const App = () => {
    const [currentPage, setCurrentPage] = useState("CataloguePage");
    const [currentItem, setCurrentItem] = useState();
    const [orderInfo] = useState({
        OrderID: 2,
        UserID: 3,
    });
    const [cardCounter, setCardCounter] = useState(0);
    const [itemSearch, setItemSearch] = useState('');

    const handleAddItemCounter = () => {
        setCardCounter((prevCount) => prevCount + 1);
    };
    

    useEffect(() => {
        const refreshCartCount = async () => {
            try {
                const count = await getCartCount(orderInfo);
                setCardCounter(count);
            } catch (err) {
                console.error("Failed to fetch cart count:", err);
            }
        };
        refreshCartCount();
    }, [orderInfo]);
    

    const renderPage = () => {
        switch (currentPage) {
            case "CataloguePage":
                return (
                    <CataloguePage
                        setCurrentPage={setCurrentPage}
                        setCurrentItem={setCurrentItem}
                        handleAddItemCounter={handleAddItemCounter}
                        orderInfo={orderInfo}
                        itemSearch={itemSearch}
                    />
                );
            case "CartPage":
                return (
                    <CartPage
                        setCurrentPage={setCurrentPage}
                        orderInfo={orderInfo}
                    />
                );
            case "CheckoutPage":
                return (
                    <CheckoutPage
                        orderInfo={orderInfo}
                    />
                );
            case "ProductPage":
                return (
                    <ProductPage
                        setCurrentPage={setCurrentPage}
                        item={currentItem}
                        handleAddItemCounter={handleAddItemCounter}
                        orderInfo={orderInfo}
                    />
                );
            default:
                return (
                    <CataloguePage
                        setCurrentPage={setCurrentPage}
                        setCurrentItem={setCurrentItem}
                        handleAddItemCounter={handleAddItemCounter}
                        orderInfo={orderInfo}
                        itemSearch={itemSearch}
                    />
                );
        }
    };

    return (
        <>
            <Header setCurrentPage={setCurrentPage} setItemSearch={setItemSearch} cardCounter={cardCounter} />
            {renderPage()}
        </>
    );
};

export default App;
