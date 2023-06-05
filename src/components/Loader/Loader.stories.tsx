import { Loader, LoaderProps } from '~/components'
import { SIZES } from '~/constants'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Loader,
  parameters: {
    title: 'Components/Loader',
    componentSubtitle:
      "Loader is a visual indicator that shows the status of an ongoing process happening in the background. It's often used to communicate that the user has to wait before the interface is ready for interaction.",
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'Sets the border-color of the loader',
    },
  },
  args: {
    color: '#dee2e6',
  },
} satisfies Meta<typeof Loader>

type Story = StoryObj<typeof Loader>

const Template: Story = {
  render: (args: LoaderProps) => {
    return (
      <Loader
        style={{ borderColor: args.color }}
        {...args}
      />
    )
  },
}

export const Default: Story = {
  ...Template,
}

export const HasLabel: Story = {
  ...Template,
  args: {
    hasLabel: true,
  },
}

export const Label: Story = {
  ...Template,
  args: {
    hasLabel: true,
    label: 'Fetching data...',
  },
}

export const Small: Story = {
  ...Template,
  args: {
    size: SIZES.small,
  },
}

export const Medium: Story = {
  ...Template,
  args: {
    size: SIZES.medium,
  },
}

export const Large: Story = {
  ...Template,
  args: {
    size: SIZES.large,
  },
}
