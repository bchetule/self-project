import './App.css';
import firstImage from './Assets/tops_and_tunics.jpg';
import secondImage from './Assets/Second_tops.jpg';
import thirdImage from './Assets/party-gown-dress.jpg';
import forthImage from './Assets/forth_tops.jpg';
import fifthImage from './Assets/fifth_tops.jpg';
import sixthImage from './Assets/sixth_tops.jpg';
import seventhImage from './Assets/seveth_tops.jpg';
import eightImage from './Assets/firstJeans.jpg';
import promotionImage from './Assets/promotion2.jpg';

import ProductItem from './components/ProductItem';

function App() {
  const shoplist = [
    {
      product_name: 'Classic Fashionable Women Tops & Tunic',
      image: firstImage,
      rating: 3.8,
      price: 306,
    },
    {
      product_name: 'Tops women',
      image: secondImage,
      rating: 3.8,
      price: 400,
    },
    {
      product_name: 'Party Gowns Women',
      image: thirdImage,
      rating: 3.8,
      price: 899,
    },
    {
      product_name: 'Casuals Women',
      image: forthImage,
      rating: 3.8,
      price: 456,
    },
    {
      product_name: 'Casuals Women',
      image: fifthImage,
      rating: 3.8,
      price: 456,
    },
    {
      product_name: 'Casuals Women',
      image: sixthImage,
      rating: 3.8,
      price: 456,
    },
    {
      product_name: 'Casuals Women',
      image: seventhImage,
      rating: 3.8,
      price: 456,
    },
    {
      product_name: 'Casuals Women',
      image: eightImage,
      rating: 3.8,
      price: 456,
    },
  ];

  return (
    <div>
      <div className='navbar'>
        <a href='#home'>Home</a>
        <a href='#shop'>Shop</a>
        <a href='#product'>Product</a>
        <a href='#cart' className='split'>Cart</a>
        <a href='#wishlist' className='split'>Wishlist</a>
        <a href='#account' className='split'>Account</a>
      </div>
      <div className='image'>
        <img src={promotionImage} alt={promotionImage.name}></img>
      </div>
      
      <ul id='concepts'>
        <ProductItem items = {shoplist[0]}/>
        <ProductItem items = {shoplist[1]}/>
        <ProductItem items = {shoplist[2]}/>
        <ProductItem items = {shoplist[3]}/>
        <ProductItem items = {shoplist[4]}/>
        <ProductItem items = {shoplist[5]}/>
        <ProductItem items = {shoplist[6]}/>
        <ProductItem items = {shoplist[7]}/>

      </ul>
    </div>
  );
}

export default App;
