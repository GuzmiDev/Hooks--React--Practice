const { shallow } = require("enzyme");
const {
  RealExampleRef,
} = require("../../../components/04-useRef/RealExampleRef");

describe("pruebas en <RealExampleRef/>", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBeFalsy();
  });

  test("debe de mostrar el componente <MultipleCustomHooks />", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBeTruthy();
  });
});
