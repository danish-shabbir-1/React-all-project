import React from "react";
import OlxLogo from './../../Olx Logo2.png'
import './../cards/style.css'

const navbar = () => {
  return (
    <div>
<nav class="navbar navbar-dark container navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <img src={OlxLogo} className="logo"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select Location
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pakistan</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sindh</a></li>
            <li><a class="dropdown-item" href="#">Punjab</a></li>
            <li><a class="dropdown-item" href="#">KPK</a></li>
            <li><a class="dropdown-item" href="#">Balochistan</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
  );
};

export default navbar;
