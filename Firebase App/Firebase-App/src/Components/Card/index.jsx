import React from "react";

const Card = ({ product }) => {
  console.log("Cqrd prd", product);

  return (
    <div class="card" style={{ width: 288 }} key={product?.id}>
      <img src={product?.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product?.Title}</h5>
        <p class="card-text">{product?.Description}</p>
        <a href="#" class="btn btn-primary">
          Go somewere
        </a>
      </div>
    </div>
  );
};

export default Card;
