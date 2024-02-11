import React from "react";
import './../../App.css'
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/item/${product?.id}`)} class="displayCards card" key={product?.id}>
      <img className="DC-image" src={product?.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> Price ${product?.Price}</h5>
        <p class="card-text">{product?.Title}</p>
        <div className="bottom-side">
        <p class="card-text">Karachi sindh</p>
        <p>1 day ago</p>
        </div>
        <a onClick={() => {
          alert('hi')
        }} href="#" class="btn btn-outline-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
