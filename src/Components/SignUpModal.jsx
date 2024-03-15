import React from "react";
import { Link } from "react-router-dom";
export default function SignUpModal() {
  return (
    <>
      <div
        class="modal fade"
        id="SignUpModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content SignIn-form d-flex flex-column justify-content-center align-items-center p-4 border rounded shadow">
            <Link className="text-decoration-none text-dark me-auto" to="/Home">
              <h4>
                <strong>JURLY</strong>
              </h4>
            </Link>
            <h5 className="m-2 me-auto">Sign Up</h5>
            <input
              className="p-2 m-2 rounded border w-100"
              type="email"
              label="Email"
              placeholder="enter email"
            ></input>

            <input
              className="p-2 m-2 rounded border w-100"
              type="text"
              label="username"
              placeholder="enter username"
            ></input>
            <input
              className="p-2 m-2 rounded border w-100"
              type="password"
              label="password"
              placeholder="enter password"
            ></input>
            <input
              className="p-2 m-2 rounded border w-100"
              type="password"
              label="password"
              placeholder="enter password again"
            ></input>
            <button className="btn btn-dark m-2 px-4 py-2 w-100">
              Create Account
            </button>

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
