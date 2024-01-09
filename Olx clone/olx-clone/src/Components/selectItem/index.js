import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../cards/style.css";

function SelectItem() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(id);
  const getAllProducts = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  };

  console.log("single item", product);
  return (
    <div className="card-container">
      <div className="card card-selected">
        <div className="card-body1">
          <img src={product?.thumbnail} />
        </div>
      </div>
      {/* /////// side card ////////// */}
      <div class="card selected-card2">
        <div class="card-body">
          <img className="profile" src={product?.thumbnail} />
          <h6>{product?.brand }</h6>
        </div>
      </div>
    </div>
  );
}

export default SelectItem;
