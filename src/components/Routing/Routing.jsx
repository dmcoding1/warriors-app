import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../shared/Loader/Loader';

const AddWarrior = lazy(() =>
  import('../../pages/AddWarrior')
);
const ErrorPage = lazy(() =>
  import('../../pages/ErrorPage')
);
const Home = lazy(() => import('../../pages/Home'));
const Warrior = lazy(() => import('../../pages/Warrior'));
const WarriorsList = lazy(() =>
  import('../../pages/WarriorsList')
);

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          component={Home}
          exact
          path={['/', '/home']}
        />
        <Route component={AddWarrior} path="/add-warrior" />
        <Route
          component={WarriorsList}
          path="/my-warriors"
        />
        <Route component={Warrior} path="/warriors/:id" />
        <Route component={ErrorPage} path="/" />
      </Switch>
    </Suspense>
  );
};

export default Routing;
