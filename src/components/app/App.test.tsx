import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API./i);
  expect(linkElement).toBeInTheDocument();
});
