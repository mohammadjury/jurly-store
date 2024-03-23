import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState, useEffect } from "react";
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

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5104/Product/GetAll");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const addToCart = (clickedItem) => {
    const newItem = cartItems.find((item) => item.id === clickedItem.id);
    if (newItem) {
      newItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...clickedItem, quantity: 1 }]);
    }
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
    }
  };

  const deleteCartItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app p-0 m-0">
      <BrowserRouter>
        <Header cartItems={cartItems} productData={productData} />
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
                      productData={productData}
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
