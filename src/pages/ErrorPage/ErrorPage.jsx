import React from 'react';
import styled from 'styled-components';

import { URL_ERR_MSG } from '../../constants';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const ErrorPage = ({ msg }) => {
  useDocumentTitle('Strona błędu');
  return (
    <Container>
      <div>{msg ? msg : URL_ERR_MSG}</div>
    </Container>
  );
};

export default ErrorPage;
