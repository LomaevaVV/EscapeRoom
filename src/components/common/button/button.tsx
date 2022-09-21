import React from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children: JSX.Element | string;
  onClick?: () => void;
  type?: string
}

const Button = ({ children, onClick, type, ...props }: ButtonProps) => {
  return <S.Button {...props} onClick={onClick} type={type === "submit" ? "submit" : undefined}>{children}</S.Button>
};

export default Button;
