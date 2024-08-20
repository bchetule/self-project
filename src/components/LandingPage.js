import './LandingPage.css';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from "axios";
import Navbar from '../Features/Navbar';
import promotionImage from "../Assets/women_clothes/promotion2.jpg";
import ProductItem from './ProductItem';
import banner1 from '../Assets/Categories/banner01.jpg';
import banner2 from '../Assets/Categories/banner02.jpg';
import Carouselbar from '../Features/Carouselbar';




function LandingPage(){
  const [data, setData] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const images = [
    banner1,
    banner2,
    promotionImage,
  ];

  useEffect(() => {
    //Fetching data using axios
    axios.get("http://localhost:8081/products")
    .then(response => {
      setData(response.data);
    })
    .catch(error =>{
      console.error('Error fetching data:', error)
    })
  }, []);


  return (
    <div> 
      <Navbar/>
      <div className='Outerofelements'>
      <div className='elements' style={{'--sm-max-width': '100%', '--md-max-width': '996px', '--lg-max-width': '1600px', '--sm-col-gap': '8px', '--md-col-gap': '12px', '--lg-col-gap': '16px', 
    '--full-span-val': '12', 'marginTop': '8px'}}
>

        <div className='img-slider-container'>
        <Carouselbar images={images} />
        </div>
        
        <div className='listOfProducts'>
          {data.map((item, index) => (
            <li key={index}>
              <Link to={`/products/${item.product_id}`}>
                <ProductItem item={item} />
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
