import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Account = () => {
  return (
    <div>
        <Navbar/>
      <h2>Account Page</h2>
      {/* Nested content will be rendered here */}
      <Outlet />
    </div>
  );
}

export default Account;