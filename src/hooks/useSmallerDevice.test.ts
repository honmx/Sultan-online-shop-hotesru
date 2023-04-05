import { renderHook, act } from "@testing-library/react"
import { useSmallerDevice } from "./useSmallerDevice"
import React from "react"

const mockedUseState = jest.spyOn(React, "useState");

describe("use smaller device hook", () => {
  test("returns false", () => {
    mockedUseState.mockReturnValue([false, () => true] );

    const { result } = renderHook(useSmallerDevice);

    const [isSmaller] = result.current;
    
    expect(isSmaller).toBe(false);
  })

  test("set state action was triggered", () => {

    const setStateMock = jest.fn();

    mockedUseState.mockReturnValue([false, setStateMock] );

    const { result } = renderHook(useSmallerDevice);

    setStateMock();

    expect(setStateMock).toHaveBeenCalled();
  })
})