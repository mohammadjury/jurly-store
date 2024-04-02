import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
//Components
import SubHeader from "../Components/SubHeader";

import Cards from "../Components/Cards";
import FindByMenu from "../Components/FindByMenu";
import PageNum from "../Components/PageNum";

export default function Products(props) {
  const productData = props.productData;
  const setProductData = props.setProductData;
  const addToCart = props.addToCart;

  const hoodiesData = productData.filter(
    (product) => product.type === "hoodie"
  );

  const [filteredproductData, setFilteredproductData] = useState(hoodiesData);

  const handleAddToCartPP = (clickedProduct) => {
    addToCart(clickedProduct);
  };

  function handleSelectedBrands(checkedBrands) {
    const filteredByBrand = hoodiesData.filter(
      (product) => checkedBrands[product.brand]
    );
    if (Object.values(checkedBrands).every((value) => value === false)) {
      setFilteredproductData(hoodiesData);
    } else {
      setFilteredproductData(filteredByBrand);
    }

    console.log(filteredByBrand);
    console.log(checkedBrands);
  }

  return (
    <>
      <SubHeader />

      <div className="container-xxl mt-4">
        <div className="content d-flex container-xxl justify-content-center p-0">
          <FindByMenu
            onSelectBrand={handleSelectedBrands}
            productData={hoodiesData}
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
