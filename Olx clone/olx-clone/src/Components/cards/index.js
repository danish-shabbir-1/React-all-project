import React from "react";
import './style.css'

const Card = (props) => {
  return (
      <div className="main-card">
      <div className="card">
        <img src={props.product.thumbnail} className="thumnail1 card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price - ${props.product.price}</h5>
          <p className="card-title">Title : {props.product.title}</p>
          <p className="card-title">category : {props.product.category}</p>
          <h6>{props.product.description}</h6>
          <h6>Posted Ago</h6>
        </div>
        <div>
          
        </div>
      </div>
      </div>
  );
};

export default Card;
