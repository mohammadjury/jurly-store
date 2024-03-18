import React from "react";

export default function SortBy(props) {
  const filteredproductData = props.filteredproductData;
  const setFilteredproductData = props.setFilteredproductData;
  const productData = props.productData;

  const Normal = filteredproductData;

  const sortedByPriceASC = [...filteredproductData].sort((a, b) => {
    return a.price - b.price;
  });

  const sortedByPriceDESC = [...filteredproductData].sort((a, b) => {
    return b.price - a.price;
  });

  const sortedByName = [...filteredproductData].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const sortedByBrand = [...filteredproductData].sort((a, b) => {
    return a.brand.localeCompare(b.brand);
  });

  return (
    <>
      <div class="dropdown d-flex">
        <button
          class="btn dropdown-toggle p-1"
          type="button"
          //   id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <div
              class="dropdown-item"
              onClick={() => {
                setFilteredproductData(sortedByPriceASC);
              }}
            >
              Price(asc)
            </div>
          </li>

          <li>
            <div
              class="dropdown-item"
              onClick={() => {
                setFilteredproductData(sortedByPriceDESC);
              }}
            >
              Price(desc)
            </div>
          </li>

          <li>
            <div
              class="dropdown-item"
              onClick={() => {
                setFilteredproductData(sortedByName);
              }}
            >
              Name
            </div>
          </li>
          <li>
            <div
              class="dropdown-item"
              onClick={() => {
                setFilteredproductData(sortedByBrand);
              }}
            >
              Brand
            </div>
          </li>

          <div
            class="dropdown-item"
            onClick={() => {
              setFilteredproductData(productData);
            }}
          >
            Normal
          </div>
        </ul>
      </div>
    </>
  );
}
