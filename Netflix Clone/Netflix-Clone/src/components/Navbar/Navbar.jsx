import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.png";
import SearchIcon from "./../../assets/search_icon.svg";
import ProfilePic from "./../../assets/profile_img.png";
import BellIcon from "./../../assets/bell_icon.svg"; 
import cheretIcon from "./../../assets/caret_icon.svg"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-body-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Tv Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                New & popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                My List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Browse by Language
              </a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <img className="Icons" src={SearchIcon} alt="" />
            <p>Childern</p>
            <img className="Icons" src={BellIcon} alt="" />
            <img className="prf-img" src={ProfilePic} alt="" />
            <img src={cheretIcon} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
