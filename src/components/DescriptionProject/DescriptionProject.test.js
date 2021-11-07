import { render, screen } from '@testing-library/react';
import { DescriptionProject } from './DescriptionProject';

test('should render description correctly', () => {
  render(<DescriptionProject />);
  const linkElement = screen.getByText('Template base for projects in ReactJS (JavaScript)');
  expect(linkElement).toBeInTheDocument();
});
