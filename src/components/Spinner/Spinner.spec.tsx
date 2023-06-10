import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { testA11y } from '~tests/utils'
import { Spinner } from '~/components'

test('Passes a11y test', async () => {
  await testA11y(<Spinner />)
})

test('Render spinner correctly', async () => {
  render(<Spinner />)

  screen.getByRole('status')
})
