import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.backgroundColor};
  background-color: ${({ theme }) => theme.colors.inputColor};
  padding: 1rem;
  margin-bottom: 10px;
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 15px;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.inputColor};
  padding: 1rem;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    color: #000;
  }

  // Se a 'variant' color for igual a 'secondary' então(&&) css(biblioteca do styled components)
  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.secondary};
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
