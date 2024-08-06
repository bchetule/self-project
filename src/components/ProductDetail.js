// ProductDetail.js
import React from 'react';
function ProductDetail({ item }) {
  return (
    <div>
      <h2>{item.description}</h2>
      <p>Price: ₹{item.amount}</p>
      <p>Ratings: {item.ratings}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetail;
