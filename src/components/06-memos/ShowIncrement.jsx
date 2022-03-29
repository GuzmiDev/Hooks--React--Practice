import React from "react";
import PropTypes from "prop-types";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volví a generar :(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.protType = {
  increment: PropTypes.func.isRequired,
};
