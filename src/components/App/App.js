import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Routing from '../Routing';

const App = () => (
  <Router>
    <Layout>
      <Routing />
    </Layout>
  </Router>
);

export default App;
