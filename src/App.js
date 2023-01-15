import react from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <react.Fragment>
     <Navbar/>
     <Routes>
     <Route path="/" element={<ProductList/>}/>
     <Route path="/details" element={<Details/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="*" element={<Default/>}/>
     </Routes>
    </react.Fragment>
  )
};

export default App;
