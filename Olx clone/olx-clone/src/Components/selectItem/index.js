import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body1">
            <img src={product?.thumbnail} />
            <h5 class="card-title">{product?.brand}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectItem;
