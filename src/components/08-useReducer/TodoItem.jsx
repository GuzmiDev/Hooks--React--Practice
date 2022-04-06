import React from "react";

export const TodoItem = ({ todo, handleToggleTodo, handleDelete, index }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p
        onClick={() => {
          handleToggleTodo(todo.id);
        }}
        className={`text-center m-0 pe-auto ${
          todo.done && "text-decoration-line-through"
        }`}
        role="button"
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        onClick={() => {
          handleDelete(todo.id);
        }}
        className="btn btn-danger"
      >
        Borrar
      </button>
    </li>
  );
};
