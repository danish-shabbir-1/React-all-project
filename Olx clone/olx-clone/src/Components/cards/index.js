import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.product.thumbnail} className="thumnail  card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
            
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
