import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUpModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5104/users/AddUser", {
        name,
        email,
        username,
        password,
      });
      alert("User created successfully:", response.data);
    } catch (error) {
      if (error.response.status === 409) setError("User already exists");
      else {
        setError("Error creating user. Please try again.", error);
        Error("Error creating user:", error);
      }
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="SignUpModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content SignIn-form d-flex flex-column justify-content-center align-items-center p-4 border rounded shadow">
            <Link className="text-decoration-none text-dark me-auto" to="/Home">
              <h4>
                <strong>JURLY</strong>
              </h4>
            </Link>
            <h5 className="m-2 me-auto">Sign Up</h5>

            <form
              className="SignIn-form d-flex flex-column justify-content-center align-items-center px-2"
              onSubmit={handleSubmit}
            >
              <input
                className="p-2 m-2 rounded border w-100"
                type="name"
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>

              <input
                className="p-2 m-2 rounded border w-100"
                type="email"
                label="Email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>

              <input
                className="p-2 m-2 rounded border w-100"
                type="text"
                label="Username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              ></input>
              <input
                className="p-2 m-2 rounded border w-100"
                type="password"
                label="Password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <input
                className="p-2 m-2 rounded border w-100"
                type="password"
                label="Confirm Password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></input>
              {error && (
                <div className="text-danger d-flex me-auto">{error}</div>
              )}
              <button
                type="submit"
                className="btn btn-dark m-2 px-4 py-2 w-100"
              >
                Create Account
              </button>
            </form>

            <Link
              className="text-black me-auto mx-1"
              data-bs-toggle="modal"
              data-bs-target="#SignInModal"
            >
              Sign in?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
