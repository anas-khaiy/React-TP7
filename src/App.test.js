import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders TP JSX et Composition title", () => {
  render(<App />);
  const titleElement = screen.getByText(/TP JSX et Composition/i);
  expect(titleElement).toBeInTheDocument();
});
