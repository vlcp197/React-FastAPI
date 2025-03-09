import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from "./pages/Update";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Crud from './pages/Crud';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/produtos/:id" element={<ProductDetails/>} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </div>
    <Footer/>
  </BrowserRouter >
  );
}


export default App
