import React, { useState } from "react";
import { Link } from "react-router-dom";

import cartIcon from "../Components/images/cart-icon.ico";
import trashIcon from "../Components/images/trash-icon.png";
import emptyIcon from "../Components/images/empty-box.png";

export default function Cart(props) {
  const cartItems = props.cartItems;
  const deleteCartItem = props.deleteCartItem;

  const handleItemDelete = (index) => {
    deleteCartItem(index);
  };

  let totalPrice = 0;
  let roundedTotalPrice = 0;

  const listCartItems = () => {
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });

    roundedTotalPrice = totalPrice.toFixed(2);
    return cartItems.map((item, index) => (
      <div className="cart-p-item d-flex" key={index}>
        <Link to={"/Product/" + item.id} className="cart-item-img">
          <img className="cart-item-img" src={item.image}></img>
        </Link>
        <Link
          to={"/Product/" + item.id}
          className="text-decoration-none text-black ps-2"
        >
          <h3 className="m-3">{item.name}</h3>
          <br />
          {item.price}
        </Link>
        <div className="ms-auto d-flex">
          <div className="d-flex align-items-center rounded-right bg-gray">
            <button
              className="btn p-0"
              onClick={(e) => handleItemDelete(index)}
            >
              <img className="" src={trashIcon} />
            </button>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      <div className=" cart-page container position-relative d-flex justify-content-center">
        <ul className="cart-list m-3">{listCartItems()}</ul>
        {cartItems.length > 0 ? (
          <div className="checkout m-3 p-3 rounded d-flex flex-column justify-content-center px-10">
            <h4>Total Price:{roundedTotalPrice}</h4>
            <br />
            <button className="btn btn-success d-flex justify-content-center align-items-center">
              <img src={cartIcon} width={50}></img>
              <h4 className="pt-2">Go To Checkout</h4>
            </button>
          </div>
        ) : (
          <div className=" cart-empty d-flex justify-content-center align-items-center p-10">
            <h1 className="d-flex justify-content-center text-black align-items-center">
              <img className="me-4" src={emptyIcon}></img>
              Your cart is empty
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
