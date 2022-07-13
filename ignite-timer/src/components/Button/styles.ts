import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin: 8px;

  background-color: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.secondary};
`
