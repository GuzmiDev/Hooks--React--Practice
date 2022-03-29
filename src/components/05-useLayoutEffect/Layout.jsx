import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <p>Frase numero: {counter}</p>

      <blockquote className="blockquote d-flex">
        <p ref={pTag}>{quote}</p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary m-1" type="button" onClick={decrement}>
        Anterior frase
      </button>
      <button className="btn btn-primary m-1" type="button" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};
