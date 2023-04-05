import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import SideBar from "./SideBar";
import * as typedReduxHooks from "../../store/hooks";

jest.mock("react-redux");
const mockedUseSelector = jest.spyOn(typedReduxHooks, "useAppSelector");
const mockedUseDispatch = jest.spyOn(typedReduxHooks, "useAppDispatch");

describe("sidebar tests", () => {
  test("sidebar renders", () => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    mockedUseSelector.mockReturnValue([]);
    
    const component = render(<SideBar products={[]} categoryType={"cosmetics-and-hygiene"} />)
    
    expect(component).toMatchSnapshot();
  });
  
  test("applies all filters", () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    mockedUseSelector.mockReturnValue([]);

    const { getByTestId } = render(<SideBar products={[]} categoryType={"cosmetics-and-hygiene"} />);
  
    const applyBtn = getByTestId("applybtn");

    fireEvent.click(applyBtn);

    expect(dispatch).toHaveBeenCalled();
  });
  
  test("clears all filters", () => {
    mockedUseDispatch.mockReturnValue(jest.fn());
    mockedUseSelector.mockReturnValue([]);

    const { getByTestId } = render(<SideBar products={[]} categoryType={"cosmetics-and-hygiene"} />);
  
    const OnClickFn = jest.fn();

    const applyBtn = getByTestId("clearbtn");
    applyBtn.onclick = OnClickFn; 

    fireEvent.click(applyBtn);

    expect(OnClickFn).toHaveBeenCalled();
  });
});