import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import AdminHeader from "../Components/AdminHeader";
import AddProductModal from "../Components/AddProductModal";

import trashIcon from "../Components/images/trash-icon.png";
import editIcon from "../Components/images/edit-icon.svg";

export default function Admin(props) {
  const productData = props.productData;

  const [usersData, setUsersData] = useState([]);
  const [tableData, setTableData] = useState(productData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleHeaderChoice = (choice) => {
    if (choice === "users") setTableData(usersData);
    else if (choice === "products") setTableData(productData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5104/users/GetAll");
        setUsersData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const keys = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  const tableHeaders = keys.map((key, index) => (
    <th className="border bg-dark text-white" key={index} scope="col">
      {key}
    </th>
  ));

  const tableRows = tableData.map((item, index) => (
    <tr className="text-nowrap" key={index}>
      {keys.map((key, i) => (
        <td
          className="border overflow-auto text-nowrap"
          style={{ width: "fit-content" }}
          key={i}
        >
          {item[key]}
        </td>
      ))}
      <img className="btn" src={editIcon}></img>
      <img className="btn" src={trashIcon}></img>
    </tr>
  ));

  return (
    <>
      <AdminHeader handleHeaderChoice={handleHeaderChoice} />
      <AddProductModal />

      <div className="main d-flex">
        <div className="m-4 w-100 d-flex container-fluid">
          <table className="table  ">
            <thead>
              <tr>
                {tableHeaders}
                <button
                  className="btn btn-success bg-success text-light w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#AddProductModal"
                >
                  Add
                </button>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
