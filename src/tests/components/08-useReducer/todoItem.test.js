import { shallow } from "enzyme";
import { TodoItem } from "../../../components/08-useReducer/TodoItem";
import { demosTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoItem />", () => {
  const handleToggleTodo = jest.fn();
  const handleDelete = jest.fn();
  let wrapper = shallow(
    <TodoItem
      todo={demosTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggleTodo={handleToggleTodo}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la función handleDelete", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(demosTodos[0].id);
  });

  test("debe de llamar la función handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggleTodo).toHaveBeenCalledWith(demosTodos[0].id);
  });

  test("debe de mostrar el texto correctamente", () => {
    expect(wrapper.find("p").text().trim()).toBe(`1. ${demosTodos[0].desc}`);
  });

  test("debe de mostrar la clase text-decoration-line-thoruh", () => {
    wrapper = shallow(<TodoItem todo={{ ...demosTodos[0], done: true }} />);

    expect(
      wrapper.find("p").hasClass("text-decoration-line-through")
    ).toBeTruthy();
  });
});
