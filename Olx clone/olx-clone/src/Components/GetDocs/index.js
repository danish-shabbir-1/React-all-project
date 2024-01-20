import React from 'react';
import './../cards/style.css'

const GetDataa = ({ displayProduct }) => {
  
  return (
    <div>
      {displayProduct?.map((item) => {
        return (
          <div className='contaaaner' key={item.id}>
            <img src={item?.Image} alt={item?.Title} />
            <p>{item?.Title}</p>
          </div>
        );
      })}
    </div>
  );
};


export default GetDataa;
