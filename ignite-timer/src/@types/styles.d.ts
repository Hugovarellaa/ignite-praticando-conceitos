import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

declare module 'styled-components' {
  type ThemeDefault = typeof defaultTheme
  export interface DefaultTheme extends ThemeDefault {}
}
