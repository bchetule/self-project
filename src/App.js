// import { useState } from 'react';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';




// function App() {
  
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const handleLogin = () => {
//     // Assuming your authentication logic is here
//     // Set isAuthenticated to true when authentication is successful
//     setIsAuthenticated(true);
//   };
    
//   // }
//   return (
//     <div>
//       {isAuthenticated ? (
//         <LandingPage />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
    
//   );
// }

// export default App;




  // return (
  //   <Router>
  //     <Routes>
  //       <Route exact path="/" Component={Login}>
  //         {isAuthenticated ? <LandingPage /> : <Login onLogin={handleLogin} />}
  //       </Route>
  //       {/* Protected route that requires authentication */}
  //       {/* <PrivateRoute path="/product/:productId" component={ProductDetail} /> */}
  //     </Routes>
  //   </Router>
  // );


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import ProductPage from '../src/components/ProductPage.js'
import Shop from '../src/components/Shop.js';
import Product from '../src/components/Product.js';
import Cart from '../src/components/Cart.js';
import Wishlist from '../src/components/Wishlist.js';
import Account from '../src/components/Account.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, enteredUsername] = useState('');
  const handleLogin = (data) => {
    // Assuming your authentication logic is here
    // Set isAuthenticated to true when authentication is successful
    enteredUsername(data);
    console.log(data);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Route for landing page or login depending on authentication status */}
        <Route path="/" element={isAuthenticated ? <LandingPage /> : <Login onLogin={handleLogin} />} />
        {/* Other protected routes can be added here */}
        {/* <Route path="/product/:productId" element={<ProductDetail />} /> */}
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart currUser = {username}/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;


