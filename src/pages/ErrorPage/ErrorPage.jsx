import React from 'react';

import { URL_ERR_MSG } from '../../constants';

const ErrorPage = ({ msg }) => {
  return <div>{msg ? msg : URL_ERR_MSG}</div>;
};

export default ErrorPage;
