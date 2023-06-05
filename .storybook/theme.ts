import { ThemeVars, create, themes } from '@storybook/theming'

const baseTheme: Omit<ThemeVars, 'base'> = {
  // Typography
  fontBase: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: 'Spectre UI',
  brandUrl: 'https://github.com/fab-rvn/spectre-ui',
  brandImage: '',
  brandTarget: '_blank',

  colorPrimary: '#805AD5',
  colorSecondary: '#805AD5',
}

const lightTheme: ThemeVars = {
  ...themes.light,
  ...baseTheme,

  // Text colors
  textColor: '#212529',

  // Toolbar colors
  barTextColor: '#101418',
}

export default create(lightTheme)
