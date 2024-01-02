/////////// all import here /////////////
import { useEffect, useState } from "react";
import fbPost from './Components/FbPost/index'

function App() {
  /////////// all state here /////////////
  const [product, setProduct] = useState([]);

  /////////// all function here /////////////

  const getProduct = () => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then((res) => setProduct(res.products));
  };
console.log(product);
  useEffect(() => {
    getProduct();
  },[]);

  console.log(product);

  if(!product?.length) {
return <div>Loading</div>
  }

  return (
    <div className="App">
      <div>
        <h1>FBN CLONE</h1>
       {product.map((item) =>  {
        return <fbPost product={item} />
       })}
        
      </div>
    </div>
  );
}

export default App;
