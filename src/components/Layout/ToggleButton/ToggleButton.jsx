import React, { useContext } from 'react';
import styled from 'styled-components';

import {
  DARK_THEME,
  LIGHT_THEME,
} from '../../../constants';
import { StateContext } from '../../../providers/ContextProvider';

const StyledButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border: none;
  border-radius: 50%;
  justify-self: center;
  background: ${props => props.theme.textColor};
  cursor: pointer;
`;

const ToggleButton = () => {
  const { setTheme, theme } = useContext(StateContext);
  const handleClick = () => {
    theme.id === 'LIGHT'
      ? setTheme(DARK_THEME)
      : setTheme(LIGHT_THEME);
  };
  return (
    <StyledButton onClick={handleClick}></StyledButton>
  );
};

export default ToggleButton;
