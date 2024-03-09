import React from "react";
import "../App.css";
import { useState } from "react";

//Components
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import FindByMenu from "../Components/FindByMenu";
import PageNum from "../Components/PageNum";

//data
import hodiesData from "../hodiesData.json";
import TShirtsData from "../t-shirtsData.json";

export default function Products(props) {
  const [productData, setProductData] = useState(hodiesData);
  const [filteredproductData, setFilteredproductData] = useState(productData);
  const setCartItems = props.setCartItems;
  const cartItems = props.cartItems;

  const addToCart = (clickedItem) => {
    setCartItems([...cartItems, clickedItem]);
  };

  function handleHeaderItem(clickedItem) {
    if (clickedItem == "T-Shirts") {
      setProductData(TShirtsData);
      setFilteredproductData((prevProductData) =>
        prevProductData === hodiesData ? TShirtsData : prevProductData
      );
    } else if (clickedItem == "Hodies") {
      setProductData(hodiesData);
      setFilteredproductData((prevProductData) =>
        prevProductData === TShirtsData ? hodiesData : prevProductData
      );
    }
  }

  function handleSelectedBrands(checkedBrands) {
    const filteredByBrand = productData.filter(
      (product) => checkedBrands[product.brand]
    );
    if (Object.values(checkedBrands).every((value) => value === false)) {
      setFilteredproductData(productData);
    } else {
      setFilteredproductData(filteredByBrand);
    }

    console.log(filteredByBrand);
    console.log(checkedBrands);
  }

  return (
    <>
      <SubHeader onHeaderItemClicked={handleHeaderItem} />

      <div className="container-fluid mt-4">
        <div className="content d-flex container-xxl justify-content-center p-0">
          <FindByMenu onSelectBrand={handleSelectedBrands} />
          <Cards productData={filteredproductData} addToCart={addToCart} />
        </div>
      </div>
      <PageNum />
      <Footer />
    </>
  );
}
