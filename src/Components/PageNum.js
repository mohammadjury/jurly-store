import React from "react";
import "../App.css";

export default function PageNum() {
  return (
    <>
      <ul className="pagination justify-content-center">
        <li className="page-item outline-0">
          <a className="page-link outline-0" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </>
  );
}
