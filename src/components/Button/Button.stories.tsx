import { Button, ButtonProps } from '~/components'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  component: Button,
  parameters: {
    title: 'Components/Button',
    componentSubtitle:
      'Button is a clickable interactive element that triggers a response. You can place text and icons inside of a button. Buttons are often used for form submissions and to toggle elements into view.',
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

const Template: Story = {
  render: (args: ButtonProps) => {
    return <Button {...args} />
  },
}

export const Default: Story = {
  ...Template,
  args: {
    children: 'Ghost button',
    variant: 'ghost',
  },
}

export const Disabled: Story = {
  ...Template,
  args: {
    children: 'Disabled button',
    disabled: true,
    variant: 'outline',
  },
}

export const Loading: Story = {
  ...Template,
  args: {
    children: 'Loading button',
    isLoading: true,
    variant: 'solid',
  },
}

export const LoadingWithText: Story = {
  ...Template,
  args: {
    children: 'Loading button',
    isLoading: true,
    loadingText: 'Saving',
    spinnerPlacement: 'end',
    variant: 'solid',
  },
}

export const WithIcon: Story = {
  ...Template,
  args: {
    children: (
      <>
        Call us
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
          />
        </svg>
      </>
    ),
    variant: 'outline',
  },
}

export const IconButton: Story = {
  ...Template,
  args: {
    children: (
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        />
      </svg>
    ),
    isIconButton: true,
    size: 'sm',
  },
}
