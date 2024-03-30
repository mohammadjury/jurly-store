import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EditUserModal(props) {
  const selectedUser = props.selectedUser;

  const selectedUserName = selectedUser.name;

  // Initialize state variables with empty strings
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successfull, setSuccessful] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setId(selectedUser.id || "");
      setName(selectedUser.name || "");
      setEmail(selectedUser.email || "");
      setPassword(selectedUser.password || "");
      setUsername(selectedUser.username || "");
      setSuccessful("");
    }
  }, [selectedUser]);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5104/Users/UpdateUser",
        {
          id,
          name,
          email,
          password,
          username,
        }
      );
      setSuccessful(
        "User: " + selectedUser.name + "Updated successfully:",
        response.data
      );
      alert("Updated successfully");

      setError("");
      setIsModalOpen(false);
    } catch (error) {
      setError("Error Updating User. Please try again.", error);
      Error("Error Updating User:", error);
    }
  };

  const handleClose = () => {
    setError("");
  };

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="EditUserModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content SignIn-form d-flex flex-column justify-content-center align-items-center p-4 border rounded shadow">
            <div>
              <Link
                className="text-decoration-none text-dark me-auto"
                to="/Home"
              >
                <h4>
                  <strong>JURLY</strong>
                </h4>
              </Link>
              <h5 className="m-2 me-auto">Edit User</h5>

              <form
                className="SignIn-form d-flex flex-column justify-content-center align-items-center px-2"
                onSubmit={handleSubmit}
              >
                <label className="me-auto">name:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="text"
                  label="Name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>

                <label className="me-auto">email:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="email"
                  label="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>

                <label className="me-auto">password:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="text"
                  label="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>

                <label className="me-auto">username:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="text"
                  label="username"
                  placeholder="User username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                ></input>

                {error && (
                  <div className="text-danger d-flex me-auto">{error}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-dark m-2 px-4 py-2 w-100"
                >
                  Submit Edits
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
