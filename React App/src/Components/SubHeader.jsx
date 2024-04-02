import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

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
              <li className="nav-item">
                <Link className="nav-link rounded" to="/Products">
                  All
                </Link>
              </li>
              <li className="nav-item rounded">
                <Link
                  className="nav-link rounded"
                  name="Hodies"
                  to="/Products/Hoodies"
                >
                  Hodies
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link rounded"
                  name="T-Shirts"
                  to="/Products/T-Shirts"
                >
                  T-Shirts
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
