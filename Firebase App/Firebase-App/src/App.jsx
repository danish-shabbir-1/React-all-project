import "./App.css";
import { Provider } from "react-redux";
import Router from "./Config/index";
import MapIntegrate from "./Components/Map";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <>
        {/* <Router /> */}
        <MapIntegrate />
      </>
    </Provider>
  );
}

export default App;
