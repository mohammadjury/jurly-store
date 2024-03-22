import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  const allProducts = props.allProducts;
  const [value, setValue] = useState("");

  const listSearched = allProducts.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase());
  });

  const test = listSearched.map((item, index) => {
    if (value != "")
      return (
        <li>
          <Link
            className="text-decoration-none text-dark"
            to={"/Product/" + item.id}
          >
            <div
              className="search-list-item container d-flex p-0"
              key={index}
              onClick={() => setValue("")}
            >
              <div className="search-item-content d-flex flex-column">
                <div className="product-name-search m-2 ">
                  {item.name.length < 150 ? (
                    <h4>{item.name}</h4>
                  ) : (
                    <h4>{item.name.slice(0, 150) + "..."}</h4>
                  )}
                </div>
                <div className="d-flex mt-auto m-1">
                  <strong className="ms-auto">
                    <h5>{item.price}$</h5>
                  </strong>
                </div>
              </div>

              <div className="search-item-img ">
                <img className="search-item-img" src={item.image}></img>
              </div>
            </div>
          </Link>
        </li>
      );
  });

  return (
    <>
      <div className="search position-relative ps-0 container-xxl d-flex flex-column">
        <div className="input-group me-1 ">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </div>
        {value && test.length > 0 && (
          <div className="search-list-div border shadow">
            <ul className="container search-list p-0">{test}</ul>
          </div>
        )}
      </div>
    </>
  );
}
