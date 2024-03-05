import React from "react";
import "../App.css";
import { useState } from "react";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import FindByMenu from "../Components/FindByMenu";
import PageNum from "../Components/PageNum";

import productData from "../ProductsData.json";
import TShirtsData from "../T-Shirts.json";

export default function Products() {
  const [ProductData, setProductData] = useState(productData);
  const [filteredproductData, setFilteredproductData] = useState(ProductData);

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
      <Header />

      <div className="container-fluid mt-4">
        <div className="content d-flex container-xxl justify-content-center p-0">
          <FindByMenu onSelectBrand={handleSelectedBrands} />
          <Cards productData={filteredproductData} />
        </div>
      </div>

      <PageNum />

      <Footer />
    </>
  );
}
