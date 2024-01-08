import Navbar from './Components/Navbar';
import Card from './Components/cards';
import './App.css';
import './Components/cards/style.css'
import { useState, useEffect } from 'react';

function App() {

  const [product, setProducts] = useState([])

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(res => setProducts(res.products));
  };

  console.log(product);

  if(!product.length){
    return <div>
      loading
    </div>
  }

  return (
    <div className="App">
  <Navbar />
  <div className='main-container'>
  {product.map(item => {
    return <Card product={item} /> 
    })}
  </div>

    </div>
  )
}

export default App;
