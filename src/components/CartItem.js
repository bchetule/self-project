import dress_for_websites from '../Assets/women_clothes/dress_for_websites.jpg';
// import React, {useState, useEffect} from 'react';
// import axios from "axios";
import './CartItem.css';

function CartItem({item}) {

    // const [productCart, setProductCart] = useState([]);
    // const [error, setError] = useState(null);

    // const fetchProductItems = async () => {
    //     try{
    //         const response = await axios.get("http://localhost:8081/products/${Item.product_id}");
    //         setProductCart(response.data);
    //         // console.log(productCart);
    //     }
    //     catch (err){
    //         setError("Failed  to fetch cart items");
    //         console.error(err)
    //     }
    // }

    // useEffect(() => {
    //     // console.log("Current product:", key);
    //     if (key) {
    //       fetchProductItems(); // Fetch items only if currUser exists
    //     }
    //   }, [key]);  

    return (
        <div className='listOfProduct'>
            <div className='Item1'>
            <img src={dress_for_websites} alt={dress_for_websites.name} className='ItemImg'></img>
            </div>
            <div className='Item2'>
            {/* <h1>Hi! This is your Cart</h1> */}
            <h3>{item.productId.description}</h3>
            <h4>₹{item.productId.amount}</h4>
            <h5>{item.ratings}</h5>
            </div>
        </div>
    );
}

export default CartItem;