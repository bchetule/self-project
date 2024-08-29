import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Features/Navbar';
import './cart.css';

const Cart = () => {
  return (
    <div className='cart-main'>
        <Navbar/>
      <div className='cart-contents'>
        <div className='cart-container1'>
          <div className='address-change'>
            <p>Deliver to: <b>User 1</b></p>
            <button className='InaddChange'>Change</button>
          </div>
          <div className='listOfSelectedProducts'>
            <li> product 1</li>
            <li> prodict 2</li>
          </div>
        </div>
        <div className='cart-container2'>
          <h4> Product Details </h4>
          <p>price</p>
          <p>Discount</p>
          <p>platform fee</p>
          <p>Delivery charges</p>
          <h4> Total Amount </h4>
        </div>
      </div>
      
      {/* Nested content will be rendered here */}
      <Outlet />
    </div>
  );
}

export default Cart;