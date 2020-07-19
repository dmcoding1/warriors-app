import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import WarriorInfo from '../../components/WarriorInfo';

import ACTION_TYPES from '../../reducers/actionTypes';
import {
  DispatchContext,
  StateContext,
} from '../../providers/ContextProvider';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Warrior = () => {
  const { warriors } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { id } = useParams();

  const currentWarrior = warriors.find(
    warrior => warrior.id === id
  );

  useDocumentTitle(currentWarrior && currentWarrior.name);

  const handleClick = id => {
    dispatch({
      type: ACTION_TYPES.DELETE_WARRIOR,
      payload: { id },
    });
  };

  return (
    <>
      {currentWarrior ? (
        <WarriorInfo
          {...currentWarrior}
          handleClick={() => handleClick(id)}
        />
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Warrior;
