import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StateContext } from '../../../providers/ContextProvider';
import ToggleButton from '../ToggleButton';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
  z-index: 10;

  ul {
    width: 100%;
    max-width: 70rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    height: 100%;
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      font-size: 1.2rem;
      text-align: center;
      padding: 0.5rem;
      border: 1px solid grey;
      border-radius: 50%;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 5.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.textColor};

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    box-shadow: 0 0 0.5rem 0.12rem #fff,
      0 0 0.6rem 0.25rem #f0f, 0 0 0.75rem 0.5rem #0ff;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const Nav = () => {
  const [armyCount, setArmyCount] = useState(0);
  const { warriors } = useContext(StateContext);

  useEffect(() => {
    const count = warriors.reduce((total, warrior) => {
      return warrior.isSelected
        ? (total = total + 1)
        : total;
    }, 0);

    setArmyCount(count);
  }, [warriors, setArmyCount]);

  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/home">Strona Główna</NavLink>
        </li>
        <li>
          <NavLink to="/add-warrior">
            Dodaj Wojownika
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-warriors">Moja Lista</NavLink>
          <span>{armyCount}</span>
        </li>
        <li>
          <ToggleButton>Toggle</ToggleButton>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
