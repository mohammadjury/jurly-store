import React from "react";
import { Link } from "react-router-dom";
export default function SignInModal() {
  return (
    <>
      <div
        class="modal fade"
        id="SignInModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content SignIn-form d-flex flex-column justify-content-center align-items-center p-4 border rounded shadow">
            <h2>Welcome Back</h2>
            <br />

            <h5 className="m-2 me-auto">Sign In</h5>
            <input
              className="p-2 m-2 rounded border w-100"
              type="text"
              label="username"
              placeholder="Enter Username"
            ></input>
            <input
              className="p-2 m-2 rounded border w-100"
              type="password"
              label="password"
              placeholder="Enter Password"
            ></input>
            <Link className="text-black me-auto mx-1 ">
              Forgot your password?
            </Link>
            <button className="btn btn-dark m-2 px-4 py-2 w-100">
              Sign In
            </button>

            <Link
              className="text-black me-auto mx-1"
              to=""
              data-bs-toggle="modal"
              data-bs-target="#SignUpModal"
            >
              Create new account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
