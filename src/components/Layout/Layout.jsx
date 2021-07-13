import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Nav from './Nav';

import GlobalStyle from '../styled/GlobalStyle';
import { StateContext } from '../../providers/ContextProvider';

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
`;



const Layout = ({ children }) => {
  const { theme } = useContext(StateContext);
 
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Nav />
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
