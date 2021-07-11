import React, { useContext } from 'react';
import styled from 'styled-components';

import {ReactComponent as MoonIcon} from '../../../icons/moon.svg';
import {ReactComponent as SunIcon} from '../../../icons/sun.svg';

import {
  DARK_THEME,
  LIGHT_THEME,
} from '../../../constants';
import { StateContext } from '../../../providers/ContextProvider';

const StyledButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  border: none;
  border-radius: 50%;
  background: ${props => props.theme.textColor};
  cursor: pointer;
`;

const StyledMoonIcon = styled(MoonIcon)`
  fill: #fff;
`;

const StyledSunIcon = styled(SunIcon)`
  fill: #000;
`;

const ToggleButton = () => {
  const { setTheme, theme } = useContext(StateContext);
  const handleClick = () => {
    theme.id === 'LIGHT'
      ? setTheme(DARK_THEME)
      : setTheme(LIGHT_THEME);
  };
  return (
    <StyledButton onClick={handleClick}>
      {theme.id === 'LIGHT'
        ? <StyledMoonIcon />
        : <StyledSunIcon />}
    </StyledButton>
  );
};

export default ToggleButton;
