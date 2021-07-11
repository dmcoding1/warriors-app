import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { StateContext } from '../../../providers/ContextProvider';
import ToggleButton from '../ToggleButton';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
  z-index: 10;
`;

const StyledNavWrapper = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

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
      margin-left: 1rem;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      text-align: center;
      padding: 0.5rem;
      border: 1px solid grey;
      border-radius: 50%;
    }
  }
`;

const NavLink = styled(Link)`
  padding: 0 1rem;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.textColor};
  z-index: 1;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background-color: ${props =>
      props.theme.accent};
    transition: opacity 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: block;
  padding: 0 2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  border: none;
  background: inherit;
  color: ${props => props.theme.textColor};
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '<';
    margin-right: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background-color: ${props =>
      props.theme.accent};
    transition: opacity 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }

  span {
    position: absolute;
    left: -1000%;
    @media (min-width: 768px) {
      position: static;
    }
  }

`;

const Nav = () => {
  const [armyCount, setArmyCount] = useState(0);
  const { warriors } = useContext(StateContext);
  const history = useHistory();

  useEffect(() => {
    const count = warriors.reduce((total, warrior) => {
      return warrior.isSelected
        ? (total = total + 1)
        : total;
    }, 0);

    setArmyCount(count);
  }, [warriors, setArmyCount]);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledButton onClick={handleClick}>
          <span>Wróć</span>
        </StyledButton>
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
            <NavLink to="/my-warriors">Moja Lista <span>{armyCount}</span></NavLink>
          </li>
          <li>
            <ToggleButton>Toggle</ToggleButton>
          </li>
        </ul>
        </StyledNavWrapper>
    </StyledNav>
  );
};

export default Nav;
