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

  const tshirtsData = productData.filter(
    (product) => product.type === "t-shirt"
  );

  const [filteredproductData, setFilteredproductData] = useState(tshirtsData);

  const handleAddToCartPP = (clickedProduct) => {
    addToCart(clickedProduct);
  };

  function handleSelectedBrands(checkedBrands) {
    const filteredByBrand = tshirtsData.filter(
      (product) => checkedBrands[product.brand]
    );
    if (Object.values(checkedBrands).every((value) => value === false)) {
      setFilteredproductData(tshirtsData);
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
