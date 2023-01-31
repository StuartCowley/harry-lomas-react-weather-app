import { render, screen } from '@testing-library/react';
import App from "./tests/App";

test('renders weather app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
