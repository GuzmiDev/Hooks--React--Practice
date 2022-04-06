import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleDelete, handleToggleTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoItem
          todo={todo}
          handleDelete={handleDelete}
          handleToggleTodo={handleToggleTodo}
          key={todo.id}
          index={i}
        />
      ))}
    </ul>
  );
};
