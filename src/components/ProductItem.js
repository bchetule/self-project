import '../App.css';

function ProductItem(props){
    return (
        <li className='product'>
        <img src={props.items.image} alt={props.items.product_name}/>
        <h3>{props.items.product_name}</h3>
        <h4>₹{props.items.price}</h4>
        <h5>{props.items.rating}</h5>
      </li>
    );
}

export default ProductItem;