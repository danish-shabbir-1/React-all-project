import React from "react";
import "./../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const [AddItem, setAddItem] = useState({
  //   Title: "",
  //   Description: "",
  //   Price: "",
  //   Image: [],
  // });

  // console.log(AddItem.Image);

  const navigate = useNavigate();

  // console.log(AddItem);
  function popUp() {
    const myModal = document.getElementById("myModal");
    const myInput = document.getElementById("myInput");

    myModal?.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  }

  function Logout() {
    const myModal = document.getElementById("myModal");
    const myInput = document.getElementById("myInput");

    myModal?.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  }

  function userLogout() {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    console.log(token);
  
    // Check if token exists
    if (!token) {
      console.error('Token not found');
      return;
    }
  
    // Set up headers with the token
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');
  
    // Make the logout API call
    fetch('http://localhost:3001/users/logout', {
      method: 'PUT',
      headers: headers,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.error('Error:', error));
      localStorage.removeItem('token');
  }
  

  // function addDataInDb() {
  //   fetch("http://localhost:3001/ads/post", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       Title: AddItem.Title,
  //       Description: AddItem.Description,
  //       Amount: AddItem.Price,
  //       Image: AddItem?.Image
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DS STORE
          </a>
          <button
            className=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="Search form-control me-2"
                type="Search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="search-Btn" type="submit">
                Search
              </button>
              <button
                type="button"
                className="sell-Btn search-Btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={popUp}
              >
                Sell
              </button>
              <i
                onClick={() => navigate("/cart")}
                className="fa-solid fa-cart-shopping"
              ></i>
              <i
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={Logout}
                className="fa-solid fa-circle-user"
              ></i>
            </form>
          </div>
        </div>
      </nav>

      {/* ///////////// Add cart modale here //////////// */}

      <div
        className="modal fade modal-dark"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body modal-body">
              <h2>DS STORE</h2>
              <form
                action="/ads/post"
                name="Image"
                enctype="multipart/form-data"
                method="post"
              >
                <input
                  onChange={(e) =>
                    setAddItem((prev) => ({ ...prev, Title: e.target.value }))
                  }
                  type="text"
                  placeholder="Title"
                />
                <input
                  onChange={(e) =>
                    setAddItem((prev) => ({
                      ...prev,
                      Description: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Description"
                />
                <input
                  onChange={(e) =>
                    setAddItem((prev) => ({ ...prev, Price: e.target.value }))
                  }
                  type="number"
                  placeholder="Price"
                />
                <input
                  onChange={(e) =>
                    setAddItem((prev) => ({
                      ...prev,
                      Image: e.target.files[0],
                    }))
                  }
                  type="file"
                  multiple
                  placeholder="Add Image"
                />
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="close-btn btn btn-primary"
                >
                  Publish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////// modale here //////////// */}

      {/* ////////////// profile modale ///////////// */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body prf-modal">
              <div className="left-side">
                <div className="prf-image">
                  <img src="" alt="" />
                </div>
                <h1>Name</h1>
              </div>
              <div className="rigth-side">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="email" />
                <button onClick={userLogout}> SignOut</button>
              </div>
              <div className="prf-controls">
                <button
                  type="button"
                  className="btn btn-secondary modif-btn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////// profile modale ///////////// */}
    </div>
  );
};

export default Navbar;
