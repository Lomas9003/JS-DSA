import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders heading', () => {
  render(<MyComponent />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});


    test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('async/await', async () => {
  const data = await fetchUser();
  expect(data.name).toBe('Ishan');
});
