import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demosTodos } from "../../fixtures/demoTodos";

describe("pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demosTodos, {});

    expect(state).toEqual(demosTodos);
  });

  test("debe de agregar un TODO", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Angular",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(demosTodos, action);

    expect(state).toEqual([...demosTodos, newTodo]);
  });

  test("debe de borrar un todo", () => {
    const action = {
      type: "delete",
      payload: 2,
    };

    const state = todoReducer(demosTodos, action);

    const todos = state.filter((todo) => todo.id !== action.payload);

    expect(state).toEqual(todos);
  });

  test("debe de hacer el toggle del todo", () => {
    const action = {
      type: "done",
      payload: 1,
    };

    const state = todoReducer(demosTodos, action);

    expect(state[0].done).toBeTruthy();
  });
});
