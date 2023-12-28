import { useEffect, useState } from "react";
import "./App.css";

function App() {
  ///////// all state here /////////
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctQuiz, setCorrectQuiz] = useState(0);

  /////// all function here ///////

  function restart() {
    setCurrentIndex(0);
  }

  function next() {
    setCurrentIndex(currentIndex + 1);
  }

  function e() {
    console.log(e);
  }

  useEffect(function () {
    fetchQuestion();
  }, []);

  function fetchQuestion() {
    fetch("https://mocki.io/v1/443df9a7-e317-4dc9-b7a4-904ac0d439b3")
      .then((res) => res.json())
      .then((res) => setQuestions(res));
  }
  console.log(questions);

  const isLastQuestoin = currentIndex === questions.length - 1;

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          {currentIndex + 1}. {questions[currentIndex]?.question}
        </h2>
        <ul>
          <li>
            <input type="radio" name="abc" />{" "}
            {questions[currentIndex]?.options[0]}
          </li>
          <li>
            <input type="radio" name="abc" />{" "}
            {questions[currentIndex]?.options[1]}
          </li>
          <li>
            <input type="radio" name="abc" />{" "}
            {questions[currentIndex]?.options[2]}
          </li>
          <li>
            <input type="radio" name="abc" />{" "}
            {questions[currentIndex]?.options[3]}
          </li>
        </ul>
        <br />
        {isLastQuestoin ? (
          <button onClick={restart}>Restart</button>
        ) : (
          <button onClick={next}>Next</button>
        )}
      </header>
    </div>
  );
}

export default App;
