import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
