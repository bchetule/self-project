import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Features/Navbar';
import './cart.css';
import axios from "axios";
import CartItem from './CartItem';

const Cart = ({currUser}) => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  const fetchCartItems = async () => {
    try{
      const response = await axios.get("http://localhost:8081/cart/" + currUser);
      setCartItems(response.data);
      console.log(cartItems.length);
      console.log(cartItems);
    }
    catch (err){
      setError("failed to fetch cart items");
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("Current user:", currUser);
    if (currUser) {
      fetchCartItems(); // Fetch items only if currUser exists
    }
  }, [currUser]); 

  return (
    <div className='cart-main'>
        <Navbar/>
      <div className='cart-contents'>
        <div className='cart-container1'>
          <div className='address-change'>
            <p>Deliver to: <b>{currUser}</b></p>
            <button className='InaddChange'>Change</button>
          </div>
          <div className='listOfSelectedProducts'>
            {/* <li> product 1</li>
            <li> prodict 2</li> */}
            {cartItems.length === 0 ? (
              <h3> Your cart is empty :</h3>
            ) :(
              <div className='YourCart'>
                {/* <h1> Got the items</h1> */}
              {cartItems.map((item, key) => (
                <li index={key}>
                <CartItem item ={item} />
                </li>
              ))}
              </div>
            )}
          </div>
        </div>
        <div className='cart-container2'>
          <h4> Product Details </h4>
          <div className='PriceContent'>
            <p>price</p>
            <p>Discount</p>
            <p>platform fee</p>
            <p>Delivery charges</p>
          </div>
          <div className='PriceValue'>
            <p>{}</p>
          </div>
          <h4> Total Amount </h4>
        </div>
      </div>
      
      {/* Nested content will be rendered here */}
      <Outlet />
    </div>
  );
}

export default Cart;