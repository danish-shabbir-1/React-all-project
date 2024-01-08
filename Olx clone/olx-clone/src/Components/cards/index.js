import React from "react";
import { useEffect } from "react";

useEffect(() => {
  getAllProducts();
}, []);

const getAllProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(console.log);
};
const products = () => {
  return <div></div>;
};

export default products;
