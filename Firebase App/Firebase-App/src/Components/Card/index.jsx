import React from "react";
import './../../App.css'

const Card = ({ product }) => {
  console.log("Card Products", product?.url);

  return (
    <div class="displayCards card" key={product?.id}>
      <img className="DC-image" src={product?.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product?.Title}</h5>
        <p class="card-text">{product?.Description}</p>
        <a href="#" class="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
