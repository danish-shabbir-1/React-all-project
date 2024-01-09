import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SelectItem from "../selectItem";

const ShowCardDetail = () => {
  const [showProduct, setShowProduct] = useState();
  const { productId } = useParams;

  useEffect(() => {
    getSingleProduct()
  }, []);

  function getSingleProduct() {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then(res => setShowProduct(res));
  }

  if (!showProduct) {
    return <div>
        Loading
    </div>
  }
// console.log('showProduct-->', showProduct);

  return <div>
    <SelectItem />
  </div>;
};

export default ShowCardDetail;
