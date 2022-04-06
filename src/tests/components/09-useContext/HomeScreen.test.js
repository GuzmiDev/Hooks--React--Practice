import { mount } from "enzyme";
import { HomseScreen } from "../../../components/09-useContext/HomseScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <HomeScreen/>", () => {
  const user = {
    name: "Erick",
    email: "guzmi.dev@gmail.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomseScreen />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
