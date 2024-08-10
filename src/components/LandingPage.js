import './LandingPage.css';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from "axios";
// import Sidebar from './Sidebar';
import Navbar from './Navbar';
import promotionImage from "../Assets/women_clothes/promotion2.jpg";
import ProductItem from './ProductItem';
// import dress_for_websites from '../Assets/women_clothes/dress_for_websites.jpg';
// import { CCarouselItem } from '@coreui/react';
// import { CCarousel, CImage } from '@coreui/react';
import banner1 from '../Assets/Categories/banner01.jpg';
import banner2 from '../Assets/Categories/banner02.jpg';
import Carouselbar from './Carouselbar';
// import Page from './Page.js';
// import ProductDetail from './ProductDetail';
// import Page from './Page';




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

  

  // const renderCustomComponents = () => {
  //   return data.map((item, index) => (
  //     <li key={index}>
  //       <Link to={`/product/${item.product_id}`}>
  //         <ProductItem item={item} onClick={() => handleProductClick(item)}/>
  //       </Link>
  //     </li>
  //   ));
  // };

  // const handleProductClick = (item) => {
  //   setSelectedProduct(item);
  // };

  return (
    <div> 
      <Navbar/>
      <div className='Outerofelements'>
      <div className='elements' style={{'--sm-max-width': '100%', '--md-max-width': '996px', '--lg-max-width': '1600px', '--sm-col-gap': '8px', '--md-col-gap': '12px', '--lg-col-gap': '16px', 
    '--full-span-val': '12', 'marginTop': '8px'}}
>


        {/* <div className='image'>
          <div className='img-container'>
          <img src={promotionImage} alt={promotionImage.name}></img>
          </div>
        </div> */}

        <div className='img-slider-container'>
        <Carouselbar images={images} />
        </div>
        
        {/* <div className='carouselele'>
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100" src={promotionImage} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={banner1} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={banner2} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
        </div> */}

        

          {/* {renderCustomComponents()}
          {selectedProduct && <Page item={selectedProduct} />}  */}
        <div className='listOfProducts'>
          {data.map((item, index) => (
            <li key={index}>
              {/* <div className='list'> */}
              <Link to={`/products/${item.product_id}`}>
                <ProductItem item={item} />
              </Link>
              {/* </div> */}
            </li>
          ))}
        </div>
          {/* <Routes>
          <Route path="/product/:productId" element={<Page product={selectedProduct} />} />
        </Routes> */}
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
