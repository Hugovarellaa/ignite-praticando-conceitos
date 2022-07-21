import styled from "styled-components";

export type VariantProps = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: VariantProps;
}

const buttonVariant = {
  primary: "purple",
  secondary: "orange",
  success: "green",
  danger: "red",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background: ${({theme}) => theme.colors.danger};
  border-radius: 8px;
  margin: 8px;
  border: 0;
`;
