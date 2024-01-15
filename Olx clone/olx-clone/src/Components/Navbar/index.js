import React from "react";
import OlxLogo from "./../../Olx Logo2.png";
import "./../cards/style.css";
import Mobile from "./../../mobiles.png";
import Vhecle from "./../../cars.png";
import Property from "./../../property.png";
import Rent from "./../../rent.png";
import Camera from "./../../camera elec.png";
import Bike from "./../../bikes.png";
import Industrial from "./../../buisness industrial.png";
import Service from "./../../service.png";
import Jobs from "./../../jobs.png";
import Animal from "./../../animal.png";
import Ferniter from "./../../ferniture.png";
import FAshin from "./../../fashion.png";
import Book from "./../../book sport.png";
import Kids from "./../../kids.png";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();

  const pageChange = () => {
    navigate('/Register');
  };


  return (
    <div>
      <nav class="navbar navbar-dark container navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <img src={OlxLogo} className="logo" />
          <button
            class="navbar-toggler"
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
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Location
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Pakistan
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sindh
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Punjab
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      KPK
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Balochistan
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            <button onClick={() => pageChange()}>Login</button>
            </form>
          </div>
        </div>
      </nav>
      <div class="card-catogeries container">
        <div class="card-body-catogries">
          <div className="catog">
            <img src={Mobile} />
            <p>Mobiles</p>
          </div>
          <div className="catog">
            <img src={Vhecle} />
            <p>Vhecles</p>
          </div>
          <div className="catog">
            <img src={Property} />
            <p>Property For Sale</p>
          </div>
          <div className="catog">
            <img src={Rent} />
            <p>Property For Rent</p>
          </div>
          <div className="catog">
            <img src={Camera} />
            <p>Electronics & Home Applinces</p>
          </div>
          <div className="catog">
            <img src={Bike} />
            <p>Bikes</p>
          </div>
          <div className="catog">
            <img src={Industrial} />
            <p>Buisness Industrial & Agriculture</p>
          </div>
          <div className="catog">
            <img src={Service} />
            <p>Services</p>
          </div>
          <div className="catog">
            <img src={Jobs} />
            <p>Jobs</p>
          </div>
          <div className="catog">
            <img src={Animal} />
            <p>Animals</p>
          </div>
          <div className="catog">
            <img src={Ferniter} />
            <p>Ferniture & Home Decor</p>
          </div>
          <div className="catog">
            <img src={FAshin} />
            <p>Fashion & Beauty</p>
          </div>
          <div className="catog">
            <img src={Book} />
            <p>Books, Sport and Hobies</p>
          </div>
          <div className="catog">
            <img src={Kids} />
            <p>Kids</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
