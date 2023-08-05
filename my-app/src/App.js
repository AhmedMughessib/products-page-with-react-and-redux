import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import ProductsPage from './productsPage/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductsPage />}/>
      </Routes>
     
    </div>
  );
}

export default App;
