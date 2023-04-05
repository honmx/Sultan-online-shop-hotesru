import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Button from "./Button"

describe("button tests", () => {
  test("button renders", () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("button renders with text", () => {
    const { getByText } = render(<Button>button</Button>);
    const button = getByText(/button/i);
    expect(button).toBeInTheDocument();
  });

  test("button onclick", () => {
    const fn = jest.fn();
    const { getByRole } = render(<Button onClick={fn}>button</Button>);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(fn).toBeCalled();
  });

  test("button onclick several times", () => {
    const fn = jest.fn();
    const { getByRole } = render(<Button onClick={fn}>button</Button>);
    const button = getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(fn).toBeCalledTimes(3);
  });
})