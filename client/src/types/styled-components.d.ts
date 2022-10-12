import theme from 'styles/theme'

type Theme = typeof theme

export module 'styled-components' {
  export type DefaultTheme = Theme
}
