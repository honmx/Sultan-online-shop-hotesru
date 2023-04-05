import { act, getAllByTestId, getByTestId, getByText, render, screen } from "@testing-library/react";
import DesktopHeader from "./DesktopHeader";
import { renderWithRedux } from "../../../../helpers/redux/renderWithRedux";
import { renderWithRouter } from "../../../../helpers/router/renderWithRouter";
import userEvent from "@testing-library/user-event";

describe("desktop header tests", () => {
  test("desktop header renders", () => {
    const { getByText } = render(renderWithRedux(renderWithRouter(<DesktopHeader />)));
    expect(getByText(/корзина/i)).toBeInTheDocument();
  });
  
  test("navigate to about page ", () => {
    const { getByTestId, getAllByTestId } = render(renderWithRedux(renderWithRouter(<DesktopHeader />)));
    
    const link = screen.getByTestId("aboutlink");
    
    act(() => {
      userEvent.click(link);
    })

    expect(getByTestId("about")).toBeInTheDocument();
  })
  
  test("navigate to payment page ", () => {
    const { getByTestId } = render(renderWithRedux(renderWithRouter(<DesktopHeader />)));
    
    const link = screen.getByTestId("paymentlink");
    
    act(() => {
      userEvent.click(link);
    })

    expect(getByTestId("payment-and-delivery")).toBeInTheDocument();
  })
  
  test("navigate to refund page ", () => {
    const { getByTestId } = render(renderWithRedux(renderWithRouter(<DesktopHeader />)));
    
    const link = screen.getByTestId("refundlink");
    
    act(() => {
      userEvent.click(link);
    })

    expect(getByTestId("refund")).toBeInTheDocument();
  })
  
  test("navigate to contacts page ", () => {
    const { getByTestId } = render(renderWithRedux(renderWithRouter(<DesktopHeader />)));
    
    const link = screen.getByTestId("contactslink");
    
    act(() => {
      userEvent.click(link);
    })

    expect(getByTestId("contacts")).toBeInTheDocument();
  })
});