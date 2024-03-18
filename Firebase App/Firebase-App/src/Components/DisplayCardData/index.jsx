import React from 'react';
import '../../App.css'

const DisplayCardData = ( {product} ) => {
  console.log('product', product);

  // function deleteItemInDb(params) {
  //   console.log(params._id);
  //   fetch(`http://localhost:3001/ads/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }

  return (
      <div className="card getcardData" key={product?._id}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product?.Title}</h5>
          <p className="card-text">{product?.Description}</p>
          <a href="#" className="btn btn-primary">Delete</a>
        </div>
      </div>
  );
};

export default DisplayCardData;

