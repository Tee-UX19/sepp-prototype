import React from 'react';
import CardList from './CardList';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutPage = () => {
  return (
    <div>
      <h1>Checkout Page</h1>
      <div className="card-list-container">
        <CardList />
      </div>
    </div>
  );
}

export default CheckoutPage;