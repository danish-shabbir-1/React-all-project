import React, { useState, useEffect } from 'react';
import DisplayCardData from '../DisplayCardData/index';

const CardDataGet = () => {
  const [Data, setData] = useState([]);

  function fetchData() {
    fetch('http://localhost:3001/ads')
    .then(res => res.json())
    .then(res => setData(res.Data))
    .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    fetchData()
  }, []); 

  console.log('db data', Data);

  if (!Data?.length) {
    return <div>Loading....</div>
  }


  return (
    <div>
      {Data.map((item) => {
        return <DisplayCardData product={item} />
      })}
    </div>
  )
};

export default CardDataGet;

