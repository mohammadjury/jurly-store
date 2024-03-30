import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//Images

export default function Cards(props) {
  const productData = props.productData;
  const handleAddToCartPP = props.handleAddToCartPP;

  //const [DataToMap, setDataToMap] = useState([...productData]);

  const DataToMap = [...productData];

  const handleAddToCart = (clickedProduct) => {
    handleAddToCartPP(clickedProduct);
  };

  return (
    <div className="cardss d-flex flex-wrap">
      {DataToMap.map((product, index) => (
        <div
          className="card d-flex flex-column justify-content-between mx-4 mb-4"
          key={product.id}
          product={product}
        >
          <div className="card-image d-flex justify-content-center align-items-center">
            <img
              className="card-img-top d-flex justify-content-center align-items-center"
              src={product.image}
              alt="Card image"
            />
          </div>
          <div className="card-body">
            <div className="mt-auto">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: {product.price}$</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-dark"
                  value="hi"
                  data-bs-trigger="open"
                  //data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                  onClick={(e) => handleAddToCart(product)}
                >
                  Add to cart
                </button>

                <Link
                  className="btn btn-outline-secondary ms-auto"
                  to={"/Product/" + product.id}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
