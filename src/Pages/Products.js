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
        <div className="row">
          <div class="col-sm-1">
          <h4>Brand</h4>
            <form action="/action_page.php">
            
              <div class="form-check">
                
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
              <button type="submit" class="btn btn-outline-dark px-5 mt-3">
                Find
              </button>
            </form>
          </div>
          <div className="d-flex flex-wrap col-sm-11">
            {[...Array(20)].map((_, index) => (
              <div className="flex-fill mb-4" key={index}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={myImage}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product {index + 1}</h5>
                    <p className="card-text">
                      Products Description Products Description Products
                      Description Products Description{" "}
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
