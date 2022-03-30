import React from "react";

export const TodoItem = ({
  id,
  handleToggleTodo,
  done,
  desc,
  handleDelete,
  index,
}) => {
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p
        onClick={() => {
          handleToggleTodo(id);
        }}
        className={`text-center m-0 pe-auto ${
          done && "text-decoration-line-through"
        }`}
        role="button"
      >
        {index + 1}. {desc}
      </p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="btn btn-danger"
      >
        Borrar
      </button>
    </li>
  );
};
