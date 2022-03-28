import React from "react";
import { useCounter } from "../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />
      <button
        className="btn btn-primary m-1"
        onClick={() => {
          decrement(2);
        }}
      >
        -1
      </button>

      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>

      <button
        className="btn btn-primary m-1"
        onClick={() => {
          increment(2);
        }}
      >
        +1
      </button>
    </>
  );
};
