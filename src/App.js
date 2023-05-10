import { useContext } from "react";
import "./App.css";
import Child from "./Child";
import { GlobalContext } from "./GlobalState";

function App() {
  return (
    <GlobalContext.Consumer>
      {(state) => (
        <div className="App">
          <h3 className="counter">{`Current Count : ${state.count}`}</h3>
          <Child />
        </div>
      )}
    </GlobalContext.Consumer>
  );
}

export default App;
