import React from "react";
import "./../../App.css";

const Navbar = () => {
  function popUp() {
    const myModal = document.getElementById("myModal");
    const myInput = document.getElementById("myInput");

    myModal.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  }

  function Logout() {
    const myModal = document.getElementById("myModal");
    const myInput = document.getElementById("myInput");

    myModal.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  }

  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            DS STORE
          </a>
          <button
            class=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input
                class="Search form-control me-2"
                type="Search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="search-Btn" type="submit">
                Search
              </button>
              <button
                type="button"
                class="sell-Btn search-Btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={popUp}
              >
                Sell
              </button>
              <i class="fa-solid fa-cart-shopping"></i>
               <i onClick={Logout} class="fa-solid fa-circle-user"></i>
            </form>
          </div>
        </div>
      </nav>

      {/* ///////////// Add cart modale here //////////// */}

      <div
        class="modal fade modal-dark"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body modal-body">
              <h2>DS STORE</h2>
              <input type="text" placeholder="Title" />
              <input type="text" placeholder="Description" />
              <input type="number" placeholder="Price" />
              <input type="file" placeholder="Add Image" />
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="close-btn btn btn-primary">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////// modale here //////////// */}

      
    </div>
  );
};

export default Navbar;
