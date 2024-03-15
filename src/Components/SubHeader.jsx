import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import myImage from "./images/img_avatar5.png";

function SubHeader({ onHeaderItemClicked }) {
  const [subHeaderSelection, setSubHeaderSelection] = useState();

  const handleItemClicked = (item) => {
    setSubHeaderSelection(item);
    onHeaderItemClicked(item);
  };
  //console.log(subHeaderSelection);

  return (
    <>
      <header className="SubHeader bg-gray ">
        <nav className="navbar container-xxl navbar-expand d-flex justify-content-center p-0">
          <div className="d-flex justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav border-0">
              <li className="nav-item rounded">
                <button
                  className="nav-link rounded"
                  name="Hodies"
                  onClick={(e) => handleItemClicked(e.target.name)}
                >
                  Hodies
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link rounded"
                  name="T-Shirts"
                  onClick={(e) => handleItemClicked(e.target.name)}
                >
                  T-Shirts
                </button>
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
