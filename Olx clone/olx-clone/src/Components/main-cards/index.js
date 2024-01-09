import React from "react";
import Card from "../cards";
import "./../../../src/App.css"
import './../cards/style.css'
import { useState, useEffect } from "react";

const CardContainer = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
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
