import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import "./App.css";

//Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

//Components
import CartCanvas from "./Components/CartCanvas";
import SignInModal from "./Components/SignInModal";
import SignUpModal from "./Components/SignUpModal";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//data
import hodiesData from "./hodiesData.json";
import TShirtsData from "./t-shirtsData.json";

export default function App() {
  const allProducts = hodiesData.concat(TShirtsData);
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState(hodiesData);
  const [filteredproductData, setFilteredproductData] = useState(productData);

  console.log(allProducts);

  const addToCart = (clickedItem) => {
    setCartItems([...cartItems, clickedItem]);
  };

  const deleteCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className=" p-0 m-0">
      <BrowserRouter>
        <Header cartItems={cartItems} />

        <CartCanvas cartItems={cartItems} deleteCartItem={deleteCartItem} />
        <SignInModal />
        <SignUpModal />

        <Routes>
          <Route
            index
            element={
              <Products
                hodiesData={hodiesData}
                TShirtsData={TShirtsData}
                cartItems={cartItems}
                setCartItems={setCartItems}
                productData={productData}
                setProductData={setProductData}
                filteredproductData={filteredproductData}
                setFilteredproductData={setFilteredproductData}
                addToCart={addToCart}
              />
            }
          />

          <Route path="/home" element={<Home cartItems={cartItems} />} />
          <Route
            path="/Products"
            element={
              <Products
                hodiesData={hodiesData}
                TShirtsData={TShirtsData}
                cartItems={cartItems}
                setCartItems={setCartItems}
                productData={productData}
                setProductData={setProductData}
                filteredproductData={filteredproductData}
                setFilteredproductData={setFilteredproductData}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/Product/:id"
            element={
              <ProductDetails allProducts={allProducts} addToCart={addToCart} />
            }
          />
          <Route
            path="/Cart"
            element={
              <Cart cartItems={cartItems} deleteCartItem={deleteCartItem} />
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
