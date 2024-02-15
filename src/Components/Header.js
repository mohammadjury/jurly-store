import React from "react";
import "../App.css";

function Header() {
  return (
    <>
      <nav className="navbar d-flex navbar-expand-sm bg-dark navbar-dark">
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
            <ul className="navbar-nav nav-tabs me-3">
              <li className="nav-item">
                <a className="nav-link" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href=""
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/Products">
                      Hodeis
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      T-shirts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cups
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobile Cases
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sales
                </a>
              </li>
            </ul>
          </div>
          <div className="input-group mx-5 ">
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
        </div>
      </nav>
    </>
  );
}

export default Header;
