import React from 'react';
import styled from 'styled-components';
import { buttonStyle } from '../../styled/partials';

const StyledButton = styled.button`
  ${buttonStyle};
  background-color: ${props =>
    props.primary
      ? props.theme.primary
      : props.theme.secondary};
`;

const Button = ({
  children,
  onClick,
  primary,
  text,
  type,
}) => {
  return (
    <StyledButton
      primary={primary}
      onClick={onClick}
      type={type}
    >
      {text}
      {children}
    </StyledButton>
  );
};

export default Button;
