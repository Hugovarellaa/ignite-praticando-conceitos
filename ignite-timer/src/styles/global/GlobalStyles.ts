import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button, select {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
  }

`
