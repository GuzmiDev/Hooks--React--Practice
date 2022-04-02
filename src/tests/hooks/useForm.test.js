import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("probando useForm", () => {
  const initialForm = {
    name: "Erick",
    email: "guzmi.dev@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [formulario, handleInputChange, reset] = result.current;

    expect(formulario).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe de cambiar el valor del formulario(cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const event = {
      target: {
        name: "name",
        value: "Fernando",
      },
    };

    const nuevoFormulario = {
      name: "Fernando",
      email: "guzmi.dev@gmail.com",
    };

    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange(event);
    });

    const [formulario] = result.current;

    expect(formulario).toEqual(nuevoFormulario);
  });

  test("debe de re-establecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const event = {
      target: {
        name: "name",
        value: "Fernando",
      },
    };

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange(event);
      reset();
    });

    const [formulario] = result.current;

    expect(formulario).toEqual(initialForm);
  });
});
