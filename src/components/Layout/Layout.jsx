import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';

import GlobalStyle from '../styled/GlobalStyle';
import { StateContext } from '../../providers/ContextProvider';

const Container = styled.main`
  min-height: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
`;

const StyledButton = styled.button`
  position: fixed;
  top: 7rem;
  left: 0;
  display: block;
  padding: 0.8rem;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
  overflow: hidden;
  cursor: pointer;
  z-index: 10;
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
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
