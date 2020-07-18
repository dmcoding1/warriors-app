import React from 'react';

import { URL_ERR_MSG } from '../../constants';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const ErrorPage = ({ msg }) => {
  useDocumentTitle('Strona błędu');
  return <div>{msg ? msg : URL_ERR_MSG}</div>;
};

export default ErrorPage;
