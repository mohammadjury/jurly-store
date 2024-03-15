import React from "react";
import "../App.css";
import { useState } from "react";

//Components
import SubHeader from "../Components/SubHeader";

import Cards from "../Components/Cards";
import FindByMenu from "../Components/FindByMenu";
import PageNum from "../Components/PageNum";

export default function Products(props) {
  const hodiesData = props.hodiesData;
  const TShirtsData = props.TShirtsData;
  const setCartItems = props.setCartItems;
  const cartItems = props.cartItems;
  const productData = props.productData;
  const setProductData = props.setProductData;
  const filteredproductData = props.filteredproductData;
  const setFilteredproductData = props.setFilteredproductData;
  const addToCart = props.addToCart;

  const handleAddToCartPP = (clickedProduct) => {
    addToCart(clickedProduct);
  };

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

  return (
    <>
      <SubHeader onHeaderItemClicked={handleHeaderItem} />

      <div className="container-xxl mt-4">
        <div className="content d-flex container-xxl justify-content-center p-0">
          <FindByMenu onSelectBrand={handleSelectedBrands} />
          <Cards
            productData={filteredproductData}
            handleAddToCartPP={handleAddToCartPP}
          />
        </div>
      </div>
      <PageNum />
    </>
  );
}
