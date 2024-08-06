import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
  return (
    <div>
        <Navbar/>
      <h2>Cart Page</h2>
      {/* Nested content will be rendered here */}
      <Outlet />
    </div>
  );
}

export default Cart;