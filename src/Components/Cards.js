import React from "react";
import "../App.css";

//Images
import myImage from "../Components/images/img_avatar1.png";

//data
import productData from "../ProductsData.json";

export default function Cards() {
  return (
    <div className="cardss d-flex flex-wrap">
      {productData.map((product, index) => (
        <div key={product.id} className="mx-4 mb-4">
          <div className="card" product={product}>
            <img
              className="card-img-top"
              src={product.image}
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>

              <p className="card-text">Price: {product.price}</p>
              <div className="d-flex justify-content-between">
                <button href="#" className="btn btn-dark">
                  Add to cart
                </button>
                <button href="#" className="btn btn-outline-secondary ms-auto">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
