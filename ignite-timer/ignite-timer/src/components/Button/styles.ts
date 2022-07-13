import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface Props {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<Props>`
  width: 100px;
  height: 40px;

  background-color: ${({ theme }) => theme.primary};

  /* background-color: ${({ variant }) => buttonVariant[variant]}; */
`;
