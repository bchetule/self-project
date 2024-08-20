// ProductDetail.js
import React from 'react';
import dress_for_websites from '../Assets/women_clothes/dress_for_websites.jpg';
import './ProductDetail.css';

function ProductDetail({ item }) {
  return (
    <div className='Outer-container'>
      <div clasName='Contents'>
        <div className='imgDetails'>
          <img src={dress_for_websites} alt={dress_for_websites.name}></img>
        </div>
        <div className='Detailed_description'>
          <h2>{item.description}</h2>
          <p>Price: ₹{item.amount}</p>
          <p>Ratings: {item.ratings}</p>
        </div>
      </div>
      <h2>{item.description}</h2>
      <p>Price: ₹{item.amount}</p>
      <p>Ratings: {item.ratings}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetail;
