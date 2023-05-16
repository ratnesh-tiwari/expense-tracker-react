import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transaction")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transection, dispatch] = useReducer(contextReducer, initialState);

  // Action
  const deleteTransection = id => dispatch({ type: "DELETE", payload: id });
  const AddTransection = transection =>
    dispatch({ type: "ADD", payload: transection });

  const balance = transection.reduce((acc, curr) => {
    return curr.type === "Expense" ? acc - curr.amount : acc + curr.amount;
  }, 0);

  console.log(transection);
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransection, AddTransection, transection, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
