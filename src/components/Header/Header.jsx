import React from 'react';
import styled from 'styled-components';

import StyledLink from '../shared/StyledLink';

const StyledHeader = styled.header`
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props =>
    props.theme.headerBackground};

  h1 {
    width: 80%;
    font-size: 3rem;
    margin-bottom: 2rem;
    line-height: 0.9;
  }

  p {
    width: 80%;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Stwórz własną drużynę wojowników Jedi!</h1>
      <p>Wybierz wojowników z listy lub utwórz własnych.</p>
      <StyledLink to="/add-warrior">
        Dodaj Wojownika
      </StyledLink>
    </StyledHeader>
  );
};

export default Header;
