import React from 'react';

const DisplayCardData = ( {product} ) => {
  console.log('product', product);

  return (
    <div>
      <div className="card" key={product?._id}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product?.title}</h5>
          <p className="card-text">{product?.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardData;

