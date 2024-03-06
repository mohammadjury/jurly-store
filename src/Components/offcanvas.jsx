import React, { useState } from "react";

export default function Offcanvas(props) {
  const cartItems = props.cartItems;

  const listCartItems = () => {
    return cartItems.map((item, index) => (
      <li className="cart-list-item" key={index}>
        {item.name}
      </li>
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
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="cart-list">{listCartItems()}</ul>
        </div>
      </div>
    </>
  );
}
