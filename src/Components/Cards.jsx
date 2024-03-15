import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//Images

export default function Cards(props) {
  const productData = props.productData;
  const handleAddToCartPP = props.handleAddToCartPP;

  const handleAddToCart = (clickedProduct) => {
    handleAddToCartPP(clickedProduct);
  };

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
