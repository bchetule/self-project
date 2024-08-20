import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Features/Navbar';


const Product = () => {
  return (
    <div>
        <Navbar/>
      <h2>Product Page</h2>
      {/* Nested content will be rendered here */}
      <Outlet />
    </div>
  );
}

export default Product;