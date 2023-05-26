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

  colorPrimary: '#0066cc',
  colorSecondary: '#0066cc',
}

const lightTheme: ThemeVars = {
  ...themes.light,
  ...baseTheme,

  // Text colors
  textColor: '#1d1d1f',

  // Toolbar colors
  barTextColor: '#1d1d1f',
}

export default create(lightTheme)
