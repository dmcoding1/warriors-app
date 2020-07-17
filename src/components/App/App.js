import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ContextProvider from '../../providers/ContextProvider';
import Layout from '../Layout/Layout';
import Routing from '../Routing';

const App = () => (
  <ContextProvider>
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  </ContextProvider>
);

export default App;
