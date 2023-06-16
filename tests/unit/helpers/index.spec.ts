import { cx } from '~/helpers'

test('Should concatenate multiple class names together removing the falsy values', () => {
  const expected = 'button primary'
  const isDisabled = false

  const actual = cx('button', 'primary', isDisabled && 'disabled')

  expect(actual).toBe(expected)
})
