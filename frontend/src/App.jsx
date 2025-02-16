import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/create" element={<Create />} />
          <Route path="/produtos/:id" element={<ProductDetails/>} />
        </Routes>
      </div>
    </div>
    <Footer/>
  </BrowserRouter >
  );
}


export default App
