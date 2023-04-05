import { getAllByTestId, getByText, render, screen } from "@testing-library/react";
import App from "../../App";
import Header from "../../components/Layout/Header/Header";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { renderWithRouter } from "../../helpers/router/renderWithRouter";

describe("router tests", () => {
  test("main banner render", () => {
    const { getByText } = render(
      <Provider store={store}>
        { renderWithRouter(null, "/") }
      </Provider>
    );

    const mainBannerTitle = getByText(/бытовая химия, косметика и хозтовары/i);

    expect(mainBannerTitle).toBeInTheDocument();
  });

  test("catalog link test", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        { renderWithRouter(null, "/") }
      </Provider>
    );

    const catalogLink = getByTestId("link");

    act(() => {
      userEvent.click(catalogLink);
    });

    expect(getByText("catalog")).toBeInTheDocument();
  })
})