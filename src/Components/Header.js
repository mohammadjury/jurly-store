import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import myImage from "../Components/images/img_avatar5.png";

function Header() {
  return (
    <>
      <header className=" bg-dark">
        <nav className="navbar container-xxl navbar-expand-md bg-dark navbar-dark">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" href="">
              JURLY
            </a>
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
                <li className="nav-item rounded">
                  <Link className="nav-link rounded" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link rounded dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href=""
                  >
                    Products
                  </a>
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
                  <a className="nav-link rounded" href="#">
                    Sales
                  </a>
                </li>
              </ul>
              <div className="seacrh ps-0 container-xxl d-flex">
                <div className="input-group me-5 ">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </div>
                <button className=".effect.effect-5 btn-user btn btn-dark rounded-circle p-0">
                  <img
                    className="account-image "
                    src={myImage}
                    alt="Card image"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;