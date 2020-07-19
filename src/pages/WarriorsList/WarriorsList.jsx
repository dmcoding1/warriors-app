import React, { useContext } from 'react';
import styled from 'styled-components';

import WarriorCard from '../../components/WarriorCard';

import ACTION_TYPES from '../../reducers/actionTypes';
import {
  DispatchContext,
  StateContext,
} from '../../providers/ContextProvider';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const StyledSection = styled.section`
  min-height: calc(100vh - 10rem);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem;

  @media (min-width: 578px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  p {
    font-size: 1.5rem;
  }
`;

const StyledHeader = styled.header`
  margin: 2rem 0;
  text-align: center;
  font-size: 2rem;
`;

const WarriorsList = () => {
  const { warriors } = useContext(StateContext);

  const dispatch = useContext(DispatchContext);

  const handleClick = id => {
    dispatch({
      type: ACTION_TYPES.ADD_WARRIOR_TO_LIST,
      payload: { id, isSelected: false },
    });
  };

  useDocumentTitle('Moi wojownicy');

  const selectedWarriors = warriors.map(warrior => {
    return (
      warrior.isSelected && (
        <WarriorCard
          handleClick={() => handleClick(warrior.id)}
          key={warrior.id}
          warrior={warrior}
        />
      )
    );
  });

  return (
    <>
      <StyledHeader>Moja armia</StyledHeader>
      <StyledSection>
        {selectedWarriors.every(warrior => !warrior) ? (
          <p>Nie wybrano żadnych wojowników.</p>
        ) : (
          selectedWarriors
        )}
      </StyledSection>
    </>
  );
};

export default WarriorsList;
