import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: 'requiredFirst',
    },
    layout: 'centered',
    options: {
      storySort: {
        order: ['Docs', ['Introduction'], 'Components'],
      },
    },
  },
}

export default preview
