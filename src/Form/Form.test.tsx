import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

it("should show an error message when title field is cleared", async () => {
  render(<Form />);

  expect(screen.queryByText("Title is required")).not.toBeInTheDocument();

  userEvent.clear(screen.getByLabelText("Title"));

  expect(await screen.findByText("Title is required")).toBeInTheDocument();
  await new Promise((r) => setTimeout(() => r(null), 3000));
});
