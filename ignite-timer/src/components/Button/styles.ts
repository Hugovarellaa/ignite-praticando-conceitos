import styled from 'styled-components'

export type VariantProps = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: VariantProps
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  margin: 8px;
  border: 0;
`
