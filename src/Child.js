import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const Child = () => {
  const { increaseCount, decreaseCount } = useContext(GlobalContext);
  return (
    <div>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
};

export default Child;
