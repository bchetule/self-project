import '../components/LandingPage.css';
import './page.css'
import dress_for_websites from '../Assets/women_clothes/dress_for_websites.jpg';

function ProductItem({ item, onClick }){

  const handleItemClick = () =>{
    if(onClick){
      onClick(item);
    }
  }
  
    return (
      <div>
      <ul id='concepts'>
        <li className='product' onClick={handleItemClick}>
        <div className='list_of_img'>
          <img src={dress_for_websites} alt={dress_for_websites.name}></img>
        </div>
        {/* <img src={props.items.image} alt={props.items.product_id}/> */}
        <h3>{item.description}</h3>
        <h4>₹{item.amount}</h4>
        <h5>{item.ratings}</h5>
      </li>
      </ul>
      </div>
    );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import FirstClothe from '../Assets/women_clothes/party-gown-dress.jpg';
// import './page.css';

// function ProductItem(props){
//     return(
//         <div className='wrapper'>
//           <Link to={`/product/${props.product_id}`}>
//             <img src={FirstClothe} alt={props.product_id}/>
//           </Link>
//             <h3>{props.Description}</h3>
//             <h2>₹{props.price}</h2>
//             {/* <Outlet /> */}
//         </div>
//     );
// }


export default ProductItem;