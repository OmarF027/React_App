import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App component", () => {
  it("renders the main heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /vite \+ react/i })).toBeInTheDocument();
  });

  it("increments the counter when button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    await user.click(button);
    expect(button).toHaveTextContent(/count is 1/i);
  });
});
