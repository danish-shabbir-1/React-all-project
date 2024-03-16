import React from 'react';
import '../../App.css'

const DisplayCardData = ( {product} ) => {
  console.log('product', product);

  return (
      <div className="card getcardData" key={product?._id}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product?.Title}</h5>
          <p className="card-text">{product?.Description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  );
};

export default DisplayCardData;

