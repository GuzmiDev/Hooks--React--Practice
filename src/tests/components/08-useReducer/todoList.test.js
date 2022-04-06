import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demosTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoList />", () => {
  const handleToggleTodo = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demosTodos}
      handleDelete={handleDelete}
      handleToggleTodo={handleToggleTodo}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener dos <TodoListItem>", () => {
    expect(wrapper.find("TodoItem").length).toBe(demosTodos.length);

    expect(wrapper.find("TodoItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
