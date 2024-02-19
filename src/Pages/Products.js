import React from "react";
import "../App.css";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import FindByMenu from "../Components/FindByMenu";
import PageNum from "../Components/PageNum";

export default function Prodacts() {
  return (
    <>
      <Header />

      <div className="container-fluid mt-4">
        <div className="content d-flex container-xxl justify-content-center p-0">
          <FindByMenu />
          <Cards />
        </div>
      </div>
      <PageNum />

      <Footer />
    </>
  );
}
