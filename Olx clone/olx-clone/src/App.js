import Navbar from "./Components/Navbar";
import CardContainer from "./Components/main-cards";
import ShowCardDetail from "./Components/Show Card";
import Router from "./Config/routing";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router />
    </div>
  );
}

export default App;