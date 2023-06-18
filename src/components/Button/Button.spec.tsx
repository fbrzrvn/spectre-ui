import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { testA11y } from '~tests/test-utils'
import { Button } from '~/components'

test('Passes a11y test', async () => {
  await testA11y(<Button>Click me</Button>)
})

test('Shows spinner and have `aria-disabled` attribute when isLoading', async () => {
  render(<Button isLoading>Click me</Button>)

  const button = await screen.findByRole('button')

  expect(screen.getByRole('status')).toBeVisible()
  // children text is hidden
  expect(screen.queryByText(/Click me/i)).not.toBeInTheDocument()
  expect(button).toHaveAttribute('aria-disabled')
})

test('Shows spinner and loading text when isLoading and loadingText', async () => {
  render(
    <Button
      isLoading
      loadingText="Loading"
    >
      Click me
    </Button>
  )

  const button = await screen.findByRole('button')

  expect(screen.getByRole('status')).toBeVisible()
  // children text is replace by `LoadingText`
  expect(button).toHaveTextContent(/Loading/i)
})

test('Should be disabled and have `aria-disabled` attribute when isDisabled', async () => {
  render(<Button isDisabled>Disabled button</Button>)

  const button = await screen.findByRole('button', { name: /Disabled button/i })

  expect(button).toBeDisabled()
  expect(button).toHaveAttribute('aria-disabled')
})

test('Should have the correct type', () => {
  render(<Button type="submit">Submit</Button>)

  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
})

describe('Button functionality', () => {
  it('calls onClick callback when clicked', async () => {
    const onClickMock = jest.fn()

    render(<Button onClick={onClickMock}>Click me</Button>)

    await userEvent.click(screen.getByRole('button', { name: /Click me/i }))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick callback when not clicked', () => {
    const onClickMock = jest.fn()

    render(<Button onClick={onClickMock}>Click me</Button>)

    // this prevents false-positive calls in addition to the false negatives prevented by the first test
    expect(onClickMock).not.toHaveBeenCalled()
  })
})
