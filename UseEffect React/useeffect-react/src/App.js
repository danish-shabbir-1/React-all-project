import { useEffect, useState} from 'react'
import './App.css';

function App() {
///////// all state here /////////
const [question, setQuestion] = useState([])
const [currentIndex, setCurrentIndex] = useState(0)

/////// all function here ///////

useEffect(function() {
  fetchQuestion()
}, [])

function fetchQuestion() {
  fetch('https://mocki.io/v1/443df9a7-e317-4dc9-b7a4-904ac0d439b3')
  .then(res => res.json())
  .then(res => setCurrentIndex(res))
}

console.log(currentIndex);

return (
    <div className="App">
      <header className="App-header">
<h2>{currentIndex.question}</h2>
      </header>
    </div>
  );
}

export default App;
