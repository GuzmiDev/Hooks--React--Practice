import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../02-useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-outline-primary"
      >
        Show/Hide
      </button>
    </div>
  );
};
