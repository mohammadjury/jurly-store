import React from "react";

export default function SortBy(props) {
  return (
    <>
      <div class="dropdown d-flex">
        <button
          class="btn dropdown-toggle p-1"
          type="button"
          //   id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
