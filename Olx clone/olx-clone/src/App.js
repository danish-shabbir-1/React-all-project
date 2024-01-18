import AddItem from "./Components/Add Item";
import Router from "./Config/routing";
import { GetAllProducts } from "./Components/Firebase";
import { useState } from "react";
import GetDataa from "./Components/GetDocs";

function App() {

  const [displayProduct, setDisplayProduct] = useState()
 async function fetchAllData() {
    try {
       const products = await GetAllProducts()
       setDisplayProduct(products)
        // console.log(displayProduct);
    } catch (e) {
      alert(e.massage)
    }

  }

  fetchAllData()

  return (
    <div className="App">
      <Router />
      <GetDataa  products={displayProduct}/>
    </div>
  );
}

export default App;