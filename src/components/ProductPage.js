import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import dress_for_websites from '../Assets/women_clothes/dress_for_websites.jpg';
// import '../components/LandingPage.css';
import Navbar from '../Features/Navbar.js';

import '../components/ProductPage.css';
// import './page.css';

function ProductPage() {
    const [data, setData] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        //Fetching data using axios  axios.get("http://localhost:8081/login/" + enteredUName, {});
        axios.get("http://localhost:8081/products/" + productId, {})
        .then(response => {
          setData(response.data);
        })
        .catch(error =>{
          console.error('Error fetching data:', error)
        })
      }, [productId]);
  
//   const product = products.find(product => product.productId === productId);

  if (!data) {
    return <div>Product not found!</div>;
  }



  return (
    
    <div className='main-container'> 
      <Navbar/>
      <div className='Outer-container' >
          <div className='ContentsOfDetail'>
            <div className='imgDetails'>
              <img src={dress_for_websites} alt={dress_for_websites.name}></img>
            </div>
            <div className='nextContainer'>
              <button className='btn1' >ADD TO CART</button>
              <button className='btn2'>BUY NOW</button>
            </div>
          </div>
            <div className='Detailed_description'>
              <h2>{data.description}</h2>
              <h4 className='pricetag'>₹{data.amount}</h4>
              <h4 className='ratingsymbol'>{data.ratings}</h4>
              </div>
      </div>
  </div>
  );
}

export default ProductPage;