import React from 'react';
// import { useState } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import './Navbar.css';
// import DropdownMenu from './AccountDropDown';


function Navbar(){
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownVisible(false);
  // };
  
    return(
        <div className='navbar'>
          <div className='bar'>
            <Sidebar/>
          </div>
          <div className='first'>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/product">Product</Link>
          </div>
        
          <div className='middle'>
            <input type="text" placeholder="Search"></input>
          </div>

          <div className='last'>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
    );
}

export default Navbar;