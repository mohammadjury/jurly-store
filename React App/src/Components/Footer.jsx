import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import facebookIcon from "./images/facebookIcon.svg";
import githubIcon from "./images/githubIcon.svg";
import linkedinIcon from "./images/linkedinIcon.svg";
import instagramIcon from "./images/instagramIcon.svg";
import xIcon from "./images/xIcon.svg";
import googleIcon from "./images/googleIcon.svg";

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted mt-5"
    >
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block ">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="d-flex justify-item-center">
          <Link
            to="https://www.facebook.com/mohammadjury00/"
            className="me-4 text-reset"
          >
            <img src={facebookIcon} />
          </Link>
          <Link
            to="https://github.com/mohammadjury/jurly-store"
            className="me-4 text-reset"
          >
            <img src={githubIcon} />
          </Link>
          <Link
            to="https://www.instagram.com/mohammadjury/"
            className="me-4 text-reset"
          >
            <img width={33} src={instagramIcon} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mohammad-jury-94046b226/"
            className="me-4 text-reset"
          >
            <img width={34} src={linkedinIcon} />
          </Link>
          <Link to="" className="me-4 text-reset">
            <img width={37} src={googleIcon} />
          </Link>
          <Link to="https://twitter.com/jurly20" className="me-4 text-reset">
            <img width={33} src={xIcon} />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase text-black fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                JURLY STORE
              </h6>
              <p>
                An e-commerce clothing platform offers trendy apparel and
                hassle-free shopping for fashion enthusiasts worldwide.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">
                Products
              </h6>
              <p>
                <Link to="/Products/Hoodies" className="text-reset">
                  Hoodies
                </Link>
              </p>
              <p>
                <Link to="/Products/T-Shirts" className="text-reset">
                  T-Shirts
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">
                Useful links
              </h6>
              <p>
                <Link to="/home" className="text-reset">
                  Home Page
                </Link>
              </p>
              <p>
                <Link to="/products" className="text-reset">
                  Products Page
                </Link>
              </p>
              <p>
                <Link to="/cart" className="text-reset">
                  Cart
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Nablus, Palestine
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                mohammadjury00@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 970 595 700 706
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 970 599 994 519
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link className="text-reset fw-bold" to="/home">
          JurlyStore.com
        </Link>
      </div>
    </MDBFooter>
  );
}
