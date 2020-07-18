import React from 'react';
import styled from 'styled-components';
import { buttonStyle } from '../../styled/partials';

const StyledButton = styled.button`
  ${buttonStyle};
  background-color: ${props => props.theme.primary};
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};

export default Button;
