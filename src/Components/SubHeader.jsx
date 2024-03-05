import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import myImage from "./images/img_avatar5.png";

function SubHeader() {
  function handleHodies() {}

  function handleTShirts() {}

  return (
    <>
      <header className=" bg-light ">
        <nav className="navbar container-xxl navbar-expand d-flex justify-content-center p-0">
          <div className="d-flex justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav border-0">
              <li className="nav-item rounded">
                <Link className="nav-link rounded" onClick={handleHodies}>
                  Hodies
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link rounded" onClick={handleTShirts}>
                  T-Shirts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link rounded" to="/Products">
                  Mugs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link rounded" to="/Products">
                  More
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default SubHeader;
