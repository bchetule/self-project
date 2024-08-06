import '../components/LandingPage.css';

function CategoriesItem(props){
    return(
        <li className="product">
            <img src={props.items.image} alt={props.items.product_name}/>
            <h3>{props.items.category_name}</h3>
        </li>
    );
}

export default CategoriesItem;