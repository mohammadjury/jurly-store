import React, { useState } from "react";
import cartIcon from "./images/cart-icon.ico";
import trashIcon from "./images/trash-icon.png";
export default function Offcanvas(props) {
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
      <div className="cart-list-item d-flex" key={index}>
        <div className="cart-info d-flex">
          <div className="d-flex align-items-center">
            <button
              className="btn p-0"
              onClick={(e) => handleItemDelete(index)}
            >
              <img className="" src={trashIcon} />
            </button>
          </div>
          <div className="ps-2">
            {item.name}
            <br />
            {item.price}
          </div>
        </div>
        <div className="cart-item-img">
          <img className="cart-item-img" src={item.image}></img>
        </div>
      </div>
    ));
  };
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header bg-dark">
          <img
            className="cart-image rounded-circle"
            src={cartIcon}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          />
          <h5
            className="offcanvas-title text-white"
            id="offcanvasScrollingLabel"
          >
            Cart
          </h5>
          <button
            type="button"
            className="btn-close bg-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="cart-list">{listCartItems()}</ul>
          {cartItems.length > 0 ? (
            <div className="d-flex flex-column justify-content-center px-10">
              <h4>Total Price:{roundedTotalPrice}</h4>
              <br />
              <button className="btn btn-success">Purchase</button>
            </div>
          ) : (
            <div className="d-flex justify-content-center px-10">
              <h3 className="">Your cart is empty</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
