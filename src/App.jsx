import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import FilterPanel from './components/FilterPanel';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';




const App = () => {
  return (
    <div>
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
    </div>
  );
};



export default App;
