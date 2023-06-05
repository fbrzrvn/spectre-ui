import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Loader } from '~/components'

test('render loader with no label', () => {
  render(<Loader />)

  expect(screen.queryByTestId('loader-label')).not.toBeInTheDocument()
})

test('render loader with default label when hasLabel props is true', async () => {
  render(<Loader hasLabel />)

  await screen.findAllByTestId('loader-label')

  expect(screen.getByTestId('loader-label')).toHaveTextContent('Loading...')
})

test('render loader with label when hasLabel props is true and a label is passed as props', async () => {
  render(
    <Loader
      hasLabel
      label="testing..."
    />
  )

  await screen.findAllByTestId('loader-label')

  expect(screen.getByTestId('loader-label')).toHaveTextContent('testing...')
})
