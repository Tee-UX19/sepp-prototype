import { useState } from 'react';
import React from 'react';
import CartPage from './pages/CartPage';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <CartPage />
        <Footer />
    </div>
  );
}

export default App;
