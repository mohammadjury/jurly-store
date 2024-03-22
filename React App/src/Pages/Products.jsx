import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
//Components
import SubHeader from "../Components/SubHeader";

import Cards from "../Components/Cards";
import FindByMenu from "../Components/FindByMenu";
import PageNum from "../Components/PageNum";

export default function Products(props) {
  const hodiesData = props.hodiesData;
  const TShirtsData = props.TShirtsData;
  const productData = props.productData;
  const setProductData = props.setProductData;
  const addToCart = props.addToCart;

  const [filteredproductData, setFilteredproductData] = useState(productData);

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
          <FindByMenu
            onSelectBrand={handleSelectedBrands}
            productData={productData}
            filteredproductData={filteredproductData}
            setFilteredproductData={setFilteredproductData}
          />
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
