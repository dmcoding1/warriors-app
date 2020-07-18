import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Button from '../shared/Button';
import Nav from './Nav';
import Footer from './Footer';

import GlobalStyle from '../styled/GlobalStyle';
import { StateContext } from '../../providers/ContextProvider';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.theme.mainBackgroundColor};
  color: ${props => props.theme.textColor};
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
          <div>Hello from Layout</div>
          <Nav />
          <Button text="Wróć" onClick={handleClick} />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
