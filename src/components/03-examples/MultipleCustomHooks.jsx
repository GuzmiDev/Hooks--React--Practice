import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <p>Frase numero: {counter}</p>

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="text-end blockquote">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary m-1" type="button" onClick={decrement}>
        Anterior frase
      </button>
      <button className="btn btn-primary m-1" type="button" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};
