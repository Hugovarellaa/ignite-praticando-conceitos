import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

declare module 'styled-components' {
  type themeType = typeof defaultTheme
  export interface DefaultTheme extends themeType {}
}
