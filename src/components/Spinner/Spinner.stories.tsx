import { Spinner, SpinnerProps } from '~/components'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Spinner,
  parameters: {
    title: 'Components/Spinner',
    componentSubtitle:
      "Spinner is a visual indicator that shows the status of an ongoing process happening in the background. It's often used to communicate that the user has to wait before the interface is ready for interaction.",
  },
} satisfies Meta<typeof Spinner>

type Story = StoryObj<typeof Spinner>

const Template: Story = {
  render: (args: SpinnerProps) => {
    return <Spinner {...args} />
  },
}

export const Default: Story = {
  ...Template,
}
