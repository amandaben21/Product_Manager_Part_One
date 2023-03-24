import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Product_Info from './components/Product_Info';
import Update_Product from './components/Update_Product';

// import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Product_Info/>} path='/products/:id' />
            <Route element={<Update_Product/>} path='/products/edit/:id' />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;