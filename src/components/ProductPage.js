import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../components/LandingPage.css';
import './page.css';

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
    <div className='child-container'>
      {/* <img src={data.image} alt={data.productId} /> */}
      <h2> this is the page</h2>
      <h3>{data.description}</h3>
      <h4>₹{data.amount}</h4>
      <h5>{data.ratings}</h5>
    </div>
  );
}

export default ProductPage;