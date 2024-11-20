// App.jsx
import React, { useState } from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import CataloguePage from './pages/CataloguePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState("CataloguePage");

    const renderPage = () => {
        switch (currentPage) {
            case "CataloguePage":
                return (
                    <>
                        <Header setCurrentPage={setCurrentPage} />
                        <CataloguePage setCurrentPage={setCurrentPage} />
                        <Footer />
                    </>
                );
            case "CartPage":
                return (

                    <>
                        <Header setCurrentPage={setCurrentPage} />
                        <CartPage setCurrentPage={setCurrentPage} />
                        <Footer />
                    </>
                );
            case "CheckoutPage":
                return (
                    <>
                        <Header setCurrentPage={setCurrentPage} />
                        <CheckoutPage setCurrentPage={setCurrentPage} />
                        <Footer />
                    </>

                );
            case "ProductPage":
                return <ProductPage setCurrentPage={setCurrentPage} />;
            default:
                return <CataloguePage />;
        }
    };

    return renderPage();
};

export default App;
