#!/bin/bash

name="$1"

new_component() {
  cd "./src/components"

  mkdir "$name"
  echo "Created folder: $name"

  touch "$name/index.ts"
  echo "export * from './$name'" >> "$name/index.ts"
  echo "Created file: $name/index.ts"

  touch "$name/$name.tsx"
  echo "export const $name = () => {
  return (
    <></>
  )
}" >> "$name/$name.tsx"
  echo "Created file: $name/$name.tsx"

  touch "$name/$name.stories.tsx"
  echo "import { $name } from './$name'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: $name,
  parameters: {
    title: 'Components/$name',
    componentSubtitle:
      '',
  },
} satisfies Meta<typeof $name>

type Story = StoryObj<typeof $name>

const Template: Story = {
  render: (args: unknown) => {
    return <$name {...args} />
  },
}

export const Default: Story = {
  ...Template,
  args: {},
}" >> "$name/$name.stories.tsx"
  echo "Created file: $name/$name.stories.tsx"

  touch "$name/$name.spec.tsx"
  echo "import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { $name } from './$name'" >> "$name/$name.spec.tsx"
  echo "Created file: $name/$name.spec.tsx"

  touch "$name/$name.module.scss"
  echo "Created file: $name/$name.module.scss"
}

new_component "$name"
