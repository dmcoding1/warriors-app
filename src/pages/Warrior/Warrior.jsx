import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import { StateContext } from '../../providers/ContextProvider';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Warrior = () => {
  const { warriors } = useContext(StateContext);

  const { id } = useParams();

  const selectedWarrior = warriors.find(
    warrior => warrior.id === id
  );

  useDocumentTitle(selectedWarrior.name);
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
