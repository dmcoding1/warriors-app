import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';

import GlobalStyle from '../styled/GlobalStyle';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div>Hello from Layout</div>
        <Nav />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
