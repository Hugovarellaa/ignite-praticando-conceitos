import { ButtonContainer, VariantProps } from './styles'

interface ButtonProps {
  variant?: VariantProps
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant}>Click me</ButtonContainer>
    </>
  )
}
