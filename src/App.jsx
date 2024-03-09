import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Offcanvas from "./Components/offcanvas";
import Header from "./Components/Header";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const deleteCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Offcanvas cartItems={cartItems} deleteCartItem={deleteCartItem} />
        <Routes>
          <Route
            index
            element={
              <Products setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route path="/home" element={<Home cartItems={cartItems} />} />
          <Route
            path="/Products"
            element={
              <Products setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route path="/Product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
