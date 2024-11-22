// App.jsx
import React, { useState } from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import CataloguePage from "./pages/CataloguePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("CataloguePage");
  const [currentItem, setCurrentItem] = useState();

  const renderPage = () => {
    switch (currentPage) {
      case "CataloguePage":
        return (
          <>
            <Header setCurrentPage={setCurrentPage} />
            <CataloguePage
              setCurrentPage={setCurrentPage}
              setCurrentItem={setCurrentItem}
            />
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
            <Footer />
          </>
        );
      case "ProductPage":
        return (
          <>
            <Header setCurrentPage={setCurrentPage} />
            <ProductPage setCurrentPage={setCurrentPage} item={currentItem} />
            <Footer />
          </>
        );
      default:
        return <CataloguePage />;
    }
  };

  return renderPage();
};

export default App;
