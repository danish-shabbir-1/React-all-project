import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Image from "./../../5-star-rating-review-star-transparent-free-png.webp"

const Card = (props) => {
  let navigate = useNavigate();
  return (
    <div className="main-card" onClick={() => navigate(`item/${props.product.id}`)}>
      <div className="card">
        <img
          src={props.product.thumbnail}
          className="thumnail1 card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="price">Price - ${props.product.price}</h5>
          <p className="title">Title : {props.product.title}</p>
          <p className="catagery">category : {props.product.category}</p>
          <h6 className="description">{props.product.description}</h6>
          <div className="rh-home">
            <img className="rh" src={Image} />
            <p>{props.product?.rating}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
