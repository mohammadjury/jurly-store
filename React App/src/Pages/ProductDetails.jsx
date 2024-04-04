import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

export default function ProductDetails(props) {
  const productData = props.productData;
  const addToCart = props.addToCart;
  const { id } = useParams();

  const currentProduct = productData.find((product) => product.id == id);

  const handleAddToCart = (clickedItem) => {
    addToCart(clickedItem);
  };
  const listSimilerProducts = productData
    .filter((product) => {
      return product.type == currentProduct.type;
    })
    .map((product, index) => {
      return (
        <Link to={"/Product/" + product.id} style={{ textDecoration: "none" }}>
          <div className="border rounded d-flex flex-column align-items-center m-1">
            <img
              className="secondary-product-img rounded"
              width={200}
              src={product.image}
              alt={product.name}
            ></img>
            <h5 className="card-title w-100 bg-dark d-flex justify-content-center rounded-bottom text-white ">
              {product.name.length < 20
                ? product.name
                : product.name.slice(0, 20) + "..."}
            </h5>
          </div>
        </Link>
      );
    });

  const first10OfListSimilerProducts = listSimilerProducts.slice(0, 6);

  const handleImage = () => {
    const h = "h";
    //setCurrentProduct(currentProduct.image);
  };

  return (
    <>
      <div className="container-xxl d-flex mt-4">
        <div className="container-xxl">
          <div className="container-xxl border-bottom pb-3 main-pd-div d-flex">
            <div className="secondary-img-div d-flex flex-column p-1">
              <img
                className="secondary-product-img "
                width={100}
                src={currentProduct.image}
                onMouseOver={() => handleImage()}
              ></img>

              <img
                className="secondary-product-img "
                width={100}
                src={currentProduct.image}
              ></img>

              <img
                className="secondary-product-img "
                width={100}
                src={currentProduct.image}
              ></img>

              <img
                className="secondary-product-img "
                width={100}
                src={currentProduct.image}
              ></img>

              <img
                className="secondary-product-img"
                width={100}
                src={currentProduct.image}
              ></img>
            </div>

            <img className=" main-img ms-3" src={currentProduct.image}></img>

            <div className="product-body d-flex flex-column m-1 ms-5 p-1 ">
              <div>
                <div className="product-name border-bottom">
                  <h4>{currentProduct.name}</h4>
                </div>
              </div>

              <div className="d-flex align-items-center ms-3 ">
                {currentProduct.discount ? (
                  <div className="card-text d-flex">
                    <h4>
                      Price: <del className="text">{currentProduct.price}</del>
                    </h4>
                    &nbsp;
                    <h4>
                      <strong className="text-danger border border-danger p-1">
                        {" "}
                        {currentProduct.discount}$
                      </strong>
                    </h4>
                  </div>
                ) : (
                  <p className="card-text">Price: {currentProduct.price}$</p>
                )}
              </div>
              <div className=" d-flex border-bottom add2c-btn">
                <button className=" btn btn-success p-3 m-3 w-100 ">
                  Buy Now
                </button>
                <button
                  className=" btn btn-dark p-3 m-3 w-100"
                  onClick={(e) => {
                    handleAddToCart(currentProduct);
                  }}
                >
                  Add to cart
                </button>
              </div>

              <div className="m-1 border-bottom">
                <h6>Brand: {currentProduct.brand}</h6>
                <h6>Category: {currentProduct.category}</h6>
                <h6>Type: {currentProduct.type}</h6>
              </div>
              <div className="description border-bottom mb-3 pb-2 p-1">
                {currentProduct.description}
              </div>
            </div>
          </div>
          <div className="similer-products container-xxl d-flex flex-column m-1 p-1">
            <h3 className="border-start ps-3"> Similer Product</h3>
            <div className="d-flex container-xxl ">
              {first10OfListSimilerProducts}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
