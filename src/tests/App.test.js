import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name/i);
  const filterButton = screen.getByTestId('button-filter')
  const nameFilter = screen.getByTestId('name-filter')
  expect(nameFilter).toBeInTheDocument()
  userEvent.click(filterButton)
  expect(filterButton).toBeInTheDocument();
  userEvent.click(nameFilter)
  userEvent.keyboard('a')
  userEvent.click(filterButton)
  expect(linkElement).toBeInTheDocument();
});
