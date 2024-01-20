import React from "react";
import Card from "../cards";
import "./../../../src/App.css"
import './../cards/style.css'
import { useState, useEffect } from "react"
import { GetAllProducts } from "../Firebase";

const CardContainer = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts =async () => {
    const res = await GetAllProducts();
    setProducts(res)
  };

  console.log(product);

  if (!product.length) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div className="main-container">
        {product.map((item) => {
          return <Card product={item} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
