import Navbar from './Components/Navbar';
import Card from './Components/cards';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(res => setProducts(res));
  };
console.log(Products);
  return (
    <div className="App">
  <Navbar />
  {/* {Products.map(item => {
    
  })} */}
    </div>
  );
}

export default App;
