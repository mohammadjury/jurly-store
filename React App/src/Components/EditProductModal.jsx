import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EditProductModal(props) {
  const selectedProduct = props.selectedProduct;

  const selectedProductName = selectedProduct.name;

  // Initialize state variables with empty strings
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successfull, setSuccessful] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setId(selectedProduct.id || "");
      setName(selectedProduct.name || "");
      setDescription(selectedProduct.description || "");
      setPrice(selectedProduct.price || "");
      setImage(selectedProduct.image || "");
      setBrand(selectedProduct.brand || "");
      setCategory(selectedProduct.category || "");
      setType(selectedProduct.type || "");
      setSuccessful("");
    }
  }, [selectedProduct]);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:5104/Product/Update", {
        id,
        name,
        description,
        price,
        image,
        brand,
        category,
        type,
      });
      setSuccessful(
        "Product: " + selectedProduct.name + "Updated successfully:",
        response.data
      );
      alert("Updated successfully");

      setError("");
      setIsModalOpen(false);
    } catch (error) {
      setError("Error Updating Product. Please try again.", error);
      Error("Error Updating Product:", error);
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
        id="EditProductModal"
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
              <h5 className="m-2 me-auto">Edit Product</h5>

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

                <label className="me-auto">Description:</label>
                <textarea
                  className="p-2 m-2 rounded border w-100"
                  type="description"
                  label="description"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>

                <label className="me-auto">Price:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="text"
                  label="Price"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                ></input>

                <label className="me-auto">Image String:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="text"
                  label="image"
                  placeholder="Product Image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                ></input>

                <label className="me-auto">Brand:</label>
                <input
                  className="p-2 m-2 rounded border w-100"
                  type="Brand"
                  label="Brand"
                  placeholder="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                ></input>

                <label className="me-auto">Category:</label>
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
