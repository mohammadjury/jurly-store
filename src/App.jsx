import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

// Components
import CartCanvas from "./Components/CartCanvas";
import SignInModal from "./Components/SignInModal";
import SignUpModal from "./Components/SignUpModal";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Data
import hodiesData from "./hodiesData.json";
import TShirtsData from "./t-shirtsData.json";

export default function App() {
  const allProducts = hodiesData.concat(TShirtsData);
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState(hodiesData);

  console.log(allProducts);

  const addToCart = (clickedItem) => {
    const newItem = cartItems.find((item) => item.id == clickedItem.id);
    if (newItem) {
      newItem.quantity += 1;
      setCartItems([...cartItems]);
      console.log(newItem.quantity);
    } else setCartItems([...cartItems, { ...clickedItem, quantity: 1 }]);
  };

  const IncCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const DecCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    } else return;
  };

  const deleteCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app p-0 m-0">
      <BrowserRouter>
        <Header cartItems={cartItems} allProducts={allProducts} />
        <div className="app-content">
          <CartCanvas
            cartItems={cartItems}
            deleteCartItem={deleteCartItem}
            IncCartItem={IncCartItem}
            DecCartItem={DecCartItem}
          />
          <SignInModal />
          <SignUpModal />

          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={300}>
              <Routes>
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
                      addToCart={addToCart}
                    />
                  }
                />
                <Route
                  path="/Product/:id"
                  element={
                    <ProductDetails
                      allProducts={allProducts}
                      addToCart={addToCart}
                    />
                  }
                />
                <Route
                  path="/Cart"
                  element={
                    <Cart
                      cartItems={cartItems}
                      deleteCartItem={deleteCartItem}
                      IncCartItem={IncCartItem}
                      DecCartItem={DecCartItem}
                    />
                  }
                />
                <Route
                  path="/*"
                  element={
                    <Products
                      hodiesData={hodiesData}
                      TShirtsData={TShirtsData}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      productData={productData}
                      setProductData={setProductData}
                      addToCart={addToCart}
                    />
                  }
                />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
