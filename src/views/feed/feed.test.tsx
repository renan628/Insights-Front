import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

function delay(n: number): any {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

test('Button insert', async () => {
  await render(<App />);
  const buttonElement = screen.getByTestId('insertButton');
  await expect(buttonElement).toBeInTheDocument();
});

test('Página de insert', async () => {
  await render(<App />);
  const buttonElement = screen.getByTestId('insertButton') as HTMLButtonElement;
  fireEvent.click(buttonElement);
  const inputInsightElement = screen.getByTestId('new_insight_input');
  await expect(inputInsightElement).toBeInTheDocument();
  const inputTagElement = screen.getByTestId('new_tag_input');
  await expect(inputTagElement).toBeInTheDocument();
});

test('Inserindo novos valores', async () => {
  await render(<App />);
  // const buttonElement = screen.getByTestId('insertButton') as HTMLButtonElement;
  // fireEvent.click(buttonElement);
  const inputInsightElement = screen.getByTestId('new_insight_input');
  fireEvent.change(inputInsightElement, {
    target: { value: 'teste insert insight' },
  });
  const inputTagElement = screen.getByTestId('new_tag_input');
  fireEvent.change(inputTagElement, {
    target: { value: 'teste insert tag' },
  });
  const buttonElement = screen.getByTestId(
    'buttonInsertInsight'
  ) as HTMLButtonElement;
  fireEvent.click(buttonElement);
});
