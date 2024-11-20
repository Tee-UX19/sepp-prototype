import React, { useState } from 'react';
import CataloguePage from './pages/CataloguePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState("CataloguePage");
  
    const renderPage = () => {
      switch (currentPage) {
        case "CataloguePage":
          return <CataloguePage setCurrentPage={setCurrentPage} />;
        case "CartPage":
          return <CartPage setCurrentPage={setCurrentPage} />;
        case "CheckoutPage":
          return <CheckoutPage setCurrentPage={setCurrentPage} />;
        case "ProductPage":
          return <ProductPage setCurrentPage={setCurrentPage} />;
        default:
          return <CataloguePage />;
      }
    };
  
    return renderPage();
  };

export default App;