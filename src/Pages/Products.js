import React from "react";
import "../App.css";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";

//Images
import myImage from "../Components/images/img_avatar1.png";

export default function Prodacts() {
  return (
    <>
      <Header />

      <div className="container-fluid ms-2 mt-5">
        <div className="content d-flex container-xxl">
          <div className="menu p-2">
            <h4>Brand</h4>
            <form action="">
              <div className="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label" for="check1">
                  Nike
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="check2"
                  name="option2"
                  value="something"
                />
                <label class="form-check-label" for="check2">
                  Adidas
                </label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">The Nourth Face</label>
              </div>
            </form>
            <br></br>
            <h4>Size</h4>
            <form action="">
              <div className="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="check1"
                  name="option1"
                  value="something"
                />
                <label class="form-check-label" for="check1">
                  XS
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="check2"
                  name="option2"
                  value="something"
                />
                <label class="form-check-label" for="check2">
                  S
                </label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">M</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">L</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">XL</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">2XL</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">3XL</label>
              </div>
            </form>
            <button type="submit" class="btn btn-outline-dark mt-2  w-95">
              Find
            </button>
          </div>

          <div className="cardss d-flex flex-wrap">
            {[...Array(20)].map((_, index) => (
              <div className=" me-4 mb-4" key={index}>
                <div className="card ">
                  <img
                    className="card-img-top"
                    src={myImage}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product {index + 1}</h5>
                    <p className="card-text">
                      Product Description Product Description Product
                      Description Product Description Product Description{" "}
                    </p>
                    <p className="card-text">Price: </p>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="btn btn-dark">
                        Add to cart
                      </a>
                      <a
                        href="#"
                        className="btn btn-outline-secondary  ms-auto"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="javascript:void(0);">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:void(0);">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:void(0);">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:void(0);">
            Next
          </a>
        </li>
      </ul>

      <Footer />
    </>
  );
}
