import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleDelete, handleToggleTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map(({ id, desc, done }, i) => (
        <TodoItem
          desc={desc}
          done={done}
          handleDelete={handleDelete}
          handleToggleTodo={handleToggleTodo}
          key={id}
          id={id}
          index={i}
        />
      ))}
    </ul>
  );
};
