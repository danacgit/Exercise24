import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import ComingSoon from './components/ComingSoon';
import Game from './components/Game';


function App() {
  return (
    <div >
    <MyNav/>

     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="game" element={<Game/>}/>
    <Route path="about" element={<AboutUs/>}/>
    <Route path="contact" element={<ContactUs/>}/>
    <Route path="faq" element={<FAQ/>}/>
    <Route path="soon" element={<ComingSoon/>}/>
    <Route path="*" element={<h1>no page found</h1>}/>
    </Routes> 
    
    <MyFooter/>
    </div>
  );
}

export default App;
