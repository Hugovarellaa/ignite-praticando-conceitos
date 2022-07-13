import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>testando</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
