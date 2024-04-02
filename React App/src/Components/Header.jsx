import React, { createFactory, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//import Components
import NavBarCart from "./NavBarCart";
import NavBarAccImg from "./NavBarAccImg";
import SearchField from "./SearchField";
import CartCounter from "./CartCounter";
//NavBarAccImg

//import assets

function Header(props) {
  const cartItems = props.cartItems;
  const productData = props.productData;

  return (
    <>
      <header className="header bg-dark position-sticky">
        <nav className="navbar container-xxl d-flex navbar-expand-lg bg-dark navbar-dark p-2">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand ms-2 me-auto" to="/Home">
            <h2 className="pt-2">
              <strong>JURLY</strong>
            </h2>
          </Link>

          <div
            className="collapse navbar-collapse ms-2 "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav nav-tabs border-0 me-3 d-md-flex">
              <Link className=" nav-item nav-link rounded ps-auto" to="/Home">
                <strong>Home</strong>
              </Link>

              <Link className="nav-link  rounded ps-auto" to="/Products">
                <strong>Products</strong>
              </Link>
            </ul>
            <SearchField productData={productData} />
          </div>

          <div className="d-flex ms-auto">
            <div className="cart-counter">
              <NavBarCart />
              {cartItems.length > 0 ? (
                <CartCounter cartItems={cartItems} />
              ) : (
                <div />
              )}
            </div>
            <NavBarAccImg />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
