import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleProduct } from "../../Firebase";

// 1. get product id
// 2. get product data
// 3 . display product

function SelectedItem() {
  const param = useParams();
  const [product, setProduct] = useState();
  const { id } = param;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await GetSingleProduct(id);
    setProduct(res);
  }

  console.log('product-->' , product);

  return (
    <div>
        <img src={product?.url} alt="" />
      <h1>{product?.Price}</h1>
      <h1>{product?.Description}</h1>
    </div>
  );
}

export default SelectedItem;
