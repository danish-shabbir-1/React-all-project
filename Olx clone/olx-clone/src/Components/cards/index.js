import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GetDataa from "../GetDocs";
import { GetAllProducts } from "../Firebase";


const Card = () => {
  let navigate = useNavigate();


  const [displayProduct, setDisplayProduct] = useState();
  async function fetchAllData() {
    try {
      const products = await GetAllProducts();
      setDisplayProduct(products);
      // console.log(displayProduct);
    } catch (e) {
      alert(e.massage);
    }
  }

  fetchAllData();

  return (
    <div className="main-card">
      <GetDataa products={displayProduct} />
    </div>
  );
};

export default Card;
