import "./App.css";
import { Provider } from "react-redux";
import Router from "./Config/index";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Router />
      </>
    </Provider>
  );
}

export default App;
