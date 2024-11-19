import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import FilterPanel from './components/FilterPanel';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <FilterPanel />
          </div>
          <div className="col-md-9">
            <Catalog />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;