import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddProductModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setcategory] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5104/product/Create",
        {
          name,
          description,
          price,
          image,
          brand,
          category,
          type,
        }
      );
      alert("Product Added successfully:", response.data);
    } catch (error) {
      if (error.response.status === 409) setError("product already exists");
      else {
        setError("Error creating user. Please try again.", error);
        Error("Error creating Product:", error);
      }
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
  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={handleClose}>Close</button>
      </div>
    );
  }

  return (
    <>
      <div
        className="modal fade"
        id="AddProductModal"
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
            <h5 className="m-2 me-auto">Add Product</h5>

            <form
              className="SignIn-form d-flex flex-column justify-content-center align-items-center px-2"
              onSubmit={handleSubmit}
            >
              <input
                className="p-2 m-2 rounded border w-100"
                type="name"
                label="Name"
                placeholder="product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>

              <input
                className="p-2 m-2 rounded border w-100"
                type="description"
                label="description"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></input>

              <input
                className="p-2 m-2 rounded border w-100"
                type="text"
                label="Price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              ></input>
              <input
                className="p-2 m-2 rounded border w-100"
                type="text"
                label="image"
                placeholder="Product Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              ></input>
              <input
                className="p-2 m-2 rounded border w-100"
                type="Brand"
                label="Brand"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              ></input>

              <input
                className="p-2 m-2 rounded border w-100"
                type="Type"
                label="Type"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              ></input>
              {error && (
                <div className="text-danger d-flex me-auto">{error}</div>
              )}
              <button
                type="submit"
                className="btn btn-dark m-2 px-4 py-2 w-100"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
