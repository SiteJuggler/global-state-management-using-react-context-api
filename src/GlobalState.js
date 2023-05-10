import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// encryption soon

const initialState = {
  count: 0,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state

  function setCount(count) {
    dispatch({
      type: "SET_COUNT",
      payload: count,
    });
  }

  function increaseCount() {
    dispatch({
      type: "INCREASE_COUNT",
      payload: 1,
    });
  }
  function decreaseCount() {
    dispatch({
      type: "DECREASE_COUNT",
      payload: 1,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        count: state.count,
        setCount,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
