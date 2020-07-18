import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import { StateContext } from '../../providers/ContextProvider';

const Warrior = () => {
  const { warriors } = useContext(StateContext);

  const { id } = useParams();

  const selectedWarrior = warriors.find(
    warrior => warrior.id === id
  );

  return (
    <>
      {selectedWarrior ? (
        <div>Hello from Warrior {selectedWarrior.name}</div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Warrior;
