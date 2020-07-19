import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Nav from './Nav';

import GlobalStyle from '../styled/GlobalStyle';
import { StateContext } from '../../providers/ContextProvider';

const Container = styled.main`
  min-height: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
`;

const StyledButton = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: block;
  padding: 0.8rem;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  overflow: hidden;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 568px) {
    top: 1rem;
    bottom: auto;
  }
`;

const Layout = ({ children }) => {
  const { theme } = useContext(StateContext);
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Nav />
          <StyledButton onClick={handleClick}>
            Wróć
          </StyledButton>
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
