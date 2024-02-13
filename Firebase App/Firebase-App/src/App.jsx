import "./App.css";
import { Provider } from "react-redux";
import Router from "./Config/index";
import DraggableMarker from "./Components/Map";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <>
        {/* <Router /> */}
        <DraggableMarker />
      </>
    </Provider>
  );
}

export default App;
