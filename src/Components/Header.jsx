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

  return (
    <>
      <header className=" bg-dark">
        <nav className="navbar container-xxl navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid d-flex">
            <Link className="navbar-brand" to="/Home">
              JURLY
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav nav-tabs border-0 me-3 d-md-flex">
                <Link className=" nav-item nav-link rounded" to="/Home">
                  Home
                </Link>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link rounded dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href=""
                  >
                    Products
                  </Link>
                  <ul className="dropdown-menu rounded">
                    <li>
                      <Link className="dropdown-item" to="/Products">
                        Hodies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Products">
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Products">
                        Mugs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Products">
                        more
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link rounded" to="">
                    Sales
                  </Link>
                </li>
              </ul>
              <SearchField />
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
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
