import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demosTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demosTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demosTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp(2)");
    expect(localStorage.setItem).toBeCalledTimes(2);
  });

  test("debe de eliminar un todo", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demosTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demosTodos[0].id);
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp(0)");
  });
});
