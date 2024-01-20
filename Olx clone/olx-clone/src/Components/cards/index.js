import React from "react";
import "./style.css";


const Card = ({product}) => {

  return (
    <div className="main-card">
      <div className='contaaaner' key={product.id}>
            <img src={product?.thumbnail} alt={product?.title} />
            <p>{product?.title}</p>
          </div>
    </div>
  );
};

export default Card;
