import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./images/cart-icon.ico";
import trashIcon from "./images/trash-icon.png";
import emptyIcon from "../Components/images/empty-box.png";
import AuthinticationModal from "./AuthinticationModal";
export default function Offcanvas(props) {
  const cartItems = props.cartItems;
  const deleteCartItem = props.deleteCartItem;
  const IncCartItem = props.IncCartItem;
  const DecCartItem = props.DecCartItem;

  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleItemDelete = (index) => {
    deleteCartItem(index);
  };

  const handleIncCartItemQuantity = (index) => {
    IncCartItem(index);
  };

  const handleDecCartItemQuantity = (index) => {
    DecCartItem(index);
  };

  let totalPrice = 0;
  let roundedTotalPrice = 0;

  const listCartItems = () => {
    cartItems.forEach((item) => {
      if (item.discount != null) totalPrice += item.quantity * item.discount;
      else totalPrice += item.quantity * item.price;
    });

    roundedTotalPrice = totalPrice.toFixed(2);

    return cartItems.map((item, index) => (
      <div className="cart-list-item d-flex p-0" key={index}>
        <div className="border-end rounded-left px-1 bg-gray d-flex flex-column justify-content-center align-items-center">
          <button
            className="btn p-0"
            onClick={(e) => handleIncCartItemQuantity(index)}
          >
            <img
              className=""
              src={"https://cdn-icons-png.freepik.com/256/14090/14090273.png"}
              width={20}
            />
          </button>
          <div className="d-flex align-items-center pt-1">{item.quantity}</div>

          <button
            className="btn p-0"
            onClick={(e) => handleDecCartItemQuantity(index)}
          >
            <img
              className=""
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flat_minus_icon_-_red.svg/768px-Flat_minus_icon_-_red.svg.png"
              }
              width={17}
            />
          </button>

          <button
            className="btn p-0"
            name="delete button"
            onClick={(e) => setSelectedProduct(index)}
            data-bs-toggle="modal"
            data-bs-target="#AuthinticationModal"
          >
            <img className="" src={trashIcon} width={20} />
          </button>
        </div>
        <div className="cart-item-content d-flex flex-column">
          <div className="m-2">
            {item.name.length < 70 ? item.name : item.name.slice(0, 70) + "..."}
          </div>
          <div className="ms-auto mt-auto m-1">
            {item.discount != null ? (
              <>
                <del className="ms-auto">
                  <strong className="p-1">
                    {(item.price * item.quantity).toFixed(2)}$
                  </strong>
                </del>
                <strong className="ms-auto d-flex justify-content-center border bg-danger text-white rounded border-danger p-1 text-danger">
                  {(item.discount * item.quantity).toFixed(2)}$
                </strong>
              </>
            ) : (
              <strong className="ms-auto">
                {(item.price * item.quantity).toFixed(2)}$
              </strong>
            )}
          </div>
        </div>

        <div className="cart-item-img">
          <img className="cart-item-img" src={item.image}></img>
        </div>
      </div>
    ));
  };
  return (
    <>
      <AuthinticationModal
        modalTitle="Delete Product"
        selectedItem={selectedProduct}
        handleDeleteProduct={handleItemDelete}
      />
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className=" bg-dark d-flex align-items-center p-2">
          <img
            className="rounded-circle"
            width={50}
            src={cartIcon}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          />
          <h3
            className="offcanvas-title text-white"
            id="offcanvasScrollingLabel"
          >
            Cart
          </h3>
          <button
            type="button"
            className="btn-close bg-white text-reset ms-auto p-2 "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="cart-list">{listCartItems()}</ul>
          {cartItems.length > 0 ? (
            <div className="d-flex flex-column justify-content-center px-10">
              <h4>Total Price:{roundedTotalPrice}</h4>
              <br />
              <Link
                to="/Cart"
                className="btn btn-success d-flex justify-content-center align-items-center"
              >
                <img src={cartIcon} width={50}></img>
                <h4 className="pt-2">Go To Cart</h4>
              </Link>
            </div>
          ) : (
            <div className="d-flex justify-content-center text-black align-items-center px-10">
              <img className="me-2" width={50} src={emptyIcon}></img>
              <h3 className="">Your cart is empty</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
