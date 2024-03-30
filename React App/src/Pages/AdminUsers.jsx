import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import AddProductModal from "../Components/AddProductModal";
import EditUserModal from "../Components/EditUserModal";
import AdminHeader from "../Components/AdminHeader";

import trashIcon from "../Components/images/trash-icon.png";
import editIcon from "../Components/images/edit-icon.svg";
import AuthinticationModal from "../Components/AuthinticationModal";

export default function AdminUsers(props) {
  const modalTitle = "Delete User";
  const DisplayedData = props.DisplayedData;

  const [usersData, setUsersData] = useState([]);
  const [tableData, setTableData] = useState(usersData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);

  const handleDeleteUser = async (User) => {
    try {
      await axios.delete(
        `http://localhost:5104/users/DeleteUser?id=${User.id}`
      );
      alert("Deleted successfully");
      setError("");
      setTableData(tableData.filter((p) => p.id !== User.id));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5104/users/GetAll");
        setTableData(response.data);
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
    <tr className=" text-nowrap" key={index}>
      {keys.map((key, i) => (
        <td
          className="table-row border overflow-auto text-nowrap"
          style={{ width: "fit-content" }}
          key={i}
        >
          {item[key]}
        </td>
      ))}
      <img
        className="btn"
        src={editIcon}
        data-bs-toggle="modal"
        data-bs-target="#EditUserModal"
        onClick={() => setSelectedUser(item)}
      ></img>
      <img
        className="btn"
        src={trashIcon}
        data-bs-toggle="modal"
        data-bs-target="#AuthinticationModal"
        onClick={() => setSelectedUser(item)}
      ></img>
    </tr>
  ));

  return (
    <>
      <AdminHeader />
      <AddProductModal />
      <EditUserModal selectedUser={selectedUser} />
      <AuthinticationModal
        handleDeleteUser={handleDeleteUser}
        selectedItem={selectedUser}
        modalTitle={modalTitle}
      />{" "}
      <div className="main d-flex">
        <div className="m-4 w-100 d-flex container-fluid">
          <table className="table  ">
            <thead>
              <tr>
                {tableHeaders}
                <button
                  className="btn btn-success bg-success text-light w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#SignUpModal"
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
