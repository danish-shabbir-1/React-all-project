/////////// all import here /////////////
import FbPost from "./Components/FbPost";
import { useEffect, useState } from "react";

function App() {
  /////////// all state here /////////////
  const [product, setProduct] = useState([]);

  /////////// all function here /////////////

  const getProduct = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res.products));
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.length) {
    return <div>Loading</div>;
  }

  console.log(product);

  return (
    <div className="Appp">
      <div>
        {product.map((item) => {
          return (<FbPost product={item} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
