import React from 'react';
// import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './shop.css';

const Shop = () => {
  return (
    <div>
      <Navbar/>
    
    <div className='whole'>
        
      <h2>Shop Page</h2>
      {/* Nested content will be rendered here */}
      {/* <Outlet /> */}
    </div>
    </div>
  );
}

export default Shop;