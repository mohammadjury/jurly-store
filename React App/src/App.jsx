import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import HoodiesProducts from "./Pages/HoodiesProducts";
import TshirtsProducts from "./Pages/TshirtsProducts";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import AdminProducts from "./Pages/AdminProducts";
import AdminUsers from "./Pages/AdminUsers";

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
        const response = await axios.get(
          "http://localhost:5104/Product/GetAll"
        );
        setProductData(response.data);
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
        {window.location.href != "http://localhost:3000/Admin/products" &&
          window.location.href != "http://localhost:3000/Admin" &&
          window.location.href != "http://localhost:3000/Admin/users" && (
            <Header cartItems={cartItems} productData={productData} />
          )}
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
                <Route path="/admin" element={<Admin />} />

                <Route
                  path="/admin/products"
                  element={<AdminProducts DisplayedData={productData} />}
                />

                <Route path="/admin/users" element={<AdminUsers />} />
                <Route
                  path="/home"
                  element={
                    <Home cartItems={cartItems} productData={productData} />
                  }
                />
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
                  path="/Products/Hoodies"
                  element={
                    <HoodiesProducts
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      productData={productData}
                      setProductData={setProductData}
                      addToCart={addToCart}
                    />
                  }
                />

                <Route
                  path="/Products/T-Shirts"
                  element={
                    <TshirtsProducts
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
                <Route path="/*" element={<Home productData={productData} />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
        {window.location.href != "http://localhost:3000/Admin/products" &&
          window.location.href != "http://localhost:3000/Admin" &&
          window.location.href != "http://localhost:3000/Admin/users" && (
            <Footer />
          )}
      </BrowserRouter>
    </div>
  );
}
