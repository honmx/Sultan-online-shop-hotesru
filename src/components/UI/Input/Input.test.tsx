import { fireEvent, render } from "@testing-library/react"
import TextInput from "./TextInput"

describe("input tests", () => {
  test("input renders", () => {
    const { getByRole } = render(<TextInput />);
    const input = getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  test("input placeholder", () => {
    const { getByRole } = render(<TextInput placeholder="abab" />);
    const input = getByRole("textbox");

    expect(input).toHaveProperty("placeholder", "abab");
  })

  test("input onchange", () => {
    const fn = jest.fn();
    const { getByRole } = render(<TextInput setValue={fn} />);
    const input = getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "a" }
    });

    fireEvent.change(input, {
      target: { value: "aa" }
    });

    expect(fn).toBeCalledTimes(2);
  });
})