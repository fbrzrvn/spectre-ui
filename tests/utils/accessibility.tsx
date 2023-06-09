import '@testing-library/jest-dom'
import { render, RenderOptions } from '@testing-library/react'
import { axe, JestAxeConfigureOptions, toHaveNoViolations } from 'jest-axe'
import React from 'react'

expect.extend(toHaveNoViolations)

export async function testA11y(
  ui: React.ReactElement | HTMLElement,
  options: RenderOptions & { axeOptions?: JestAxeConfigureOptions } = {}
) {
  const { axeOptions, ...rest } = options

  const container = React.isValidElement(ui) ? render(ui, rest).container : ui

  const results = await axe(container as HTMLElement, axeOptions)

  expect(results).toHaveNoViolations()
}
