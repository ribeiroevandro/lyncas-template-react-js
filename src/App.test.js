import { render, screen } from '@testing-library/react';
import { App } from './App';

test('should render correctly', () => {
  render(<App />);
  const linkElement = screen.getByText('Lyncas');
  expect(linkElement).toBeInTheDocument();
});
