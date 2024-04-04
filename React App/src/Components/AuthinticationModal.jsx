import axios from "axios";
import { useState } from "react";

export default function AuthinticationModal(props) {
  const handleDeleteUser = props.handleDeleteUser;
  const handleDeleteProduct = props.handleDeleteProduct;
  const selectedItem = props.selectedItem;
  const modalTitle = props.modalTitle;

  return (
    <>
      <div
        class="modal fade"
        id="AuthinticationModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="AuthinticationModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="AuthinticationModalLabel">
                {modalTitle}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-target="#AuthinticationModal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                Are you sure you want to delete this item
                {selectedItem.name && <strong>"{selectedItem.name}"</strong>}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  if (modalTitle == "Delete User")
                    handleDeleteUser(selectedItem);
                  else if (modalTitle == "Delete Product")
                    handleDeleteProduct(selectedItem);
                }}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-dark"
                data-target="#AuthinticationModal"
                data-bs-dismiss="modal"
              >
                Keep
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
