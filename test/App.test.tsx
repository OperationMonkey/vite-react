import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { App } from '../src/App';

test("should be true", () => {
  expect(true).toBe(true)
})

test("render test", async () => {
  render(<App />)
  const buttonCount = await screen.findByRole('button')

  expect(buttonCount.innerHTML).toBe('count is 0')
  await act(async () => {
    await user.click(buttonCount)
    await user.click(buttonCount)
  })
  expect(buttonCount.innerHTML).toBe('count is 2')
})

