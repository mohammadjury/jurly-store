import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//Images
import saleIcon from "./images/saleIcon.png";

export default function Cards(props) {
  const productData = props.productData;
  const handleAddToCartPP = props.handleAddToCartPP;

  const [showAlert, setShowAlert] = useState(false);

  const DataToMap = [...productData];
  let c = 0;
  console.log(c);
  c++;
  const handleAddToCart = (clickedProduct) => {
    handleAddToCartPP(clickedProduct);
    alert("Item added to cart");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="cardss d-flex flex-wrap container ">
      {DataToMap.map((product, index) => (
        <div
          className="card d-flex flex-column justify-content-between m-2 position-relative "
          key={product.id}
          product={product}
        >
          {product.discount && (
            <img
              className="sale-img position-absolute end-0"
              width={70}
              src={saleIcon}
              alt="sale"
            />
          )}
          <div
            className="card-img-top d-flex justify-content-center align-items-center"
            style={{ width: "100%", overflowY: "hidden" }}
          >
            <img
              className="card-img d-flex justify-content-center align-items-center"
              src={product.image}
              alt="Card image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="card-body">
            <div className="mt-auto">
              <h5 className="card-title">{product.name}</h5>
              {product.discount ? (
                <p className="card-text">
                  Price: <del className="text">{product.price}</del>
                  &nbsp;
                  <strong className="text-danger bg-danger text-white rounded p-1 border border-danger">
                    {" "}
                    {product.discount}$
                  </strong>
                </p>
              ) : (
                <p className="card-text">Price: {product.price}$</p>
              )}
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-dark p-2"
                  value="hi"
                  data-bs-trigger="open"
                  // data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                  onClick={(e) => handleAddToCart(product)}
                >
                  Add to cart
                </button>

                <Link
                  className="btn btn-outline-secondary ms-auto p-2"
                  to={"/Product/" + product.id}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Item added to cart
        </div>
      )}
    </div>
  );
}
