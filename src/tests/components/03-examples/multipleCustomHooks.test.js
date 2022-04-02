import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {},
      decrement: () => {},
    });
  });

  test("debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Fernando",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find("#quote").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("#author").text().trim()).toBe("Fernando");
  });
});
