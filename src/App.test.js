import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Aquild heading', () => {
  const { getByText } = render(<App />);
  const aquildHeading = getByText(/Aquild/i);
  expect(aquildHeading).toBeInTheDocument();
});
