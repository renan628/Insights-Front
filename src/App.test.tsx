import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando Layout', async () => {
  render(<App />);
  const nameElement = screen.getByText(/Olá, Antonio/i);
  expect(nameElement).toBeInTheDocument();
  const EMailElement = screen.getByText(/antonio.pina@g.globo/i);
  expect(EMailElement).toBeInTheDocument();
});
