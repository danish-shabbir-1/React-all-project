/////////// all import here /////////////
import {useState} from 'react'
function App() {
  /////////// all state here /////////////

  /////////// all function here /////////////

  function fbClone() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  fbClone() 


  return <div className="App">
    <div>
      <h1>{data().title
}</h1>
    </div>
  </div>;
}

export default App;
