import { FC, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

export const renderWithRouter = (component: ReactNode, initialRoute: string = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
      { component }
    </MemoryRouter>
  )
}