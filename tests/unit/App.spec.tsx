import { render, screen } from '@testing-library/react'

import App from '~/App'

test('App component display header', () => {
  render(<App />)

  const heading = screen.getByText(/Spectre UI components library/i)

  expect(heading).toBeInTheDocument()
})
