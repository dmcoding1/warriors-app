import React, { useContext } from 'react';
import styled from 'styled-components';

import WarriorCard from '../../components/WarriorCard';

import ACTION_TYPES from '../../reducers/actionTypes';
import {DispatchContext, StateContext} from '../../providers/ContextProvider';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
  }
`;

const StyledHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
`;

const WarriorsList = () => {
  const { warriors } = useContext(StateContext); 
  
  const dispatch = useContext(DispatchContext);

  const handleClick = (id) => {
    dispatch({
      type: ACTION_TYPES.ADD_WARRIOR_TO_LIST,
      payload: { id, isSelected: false },
    });
  };

  useDocumentTitle('Moi wojownicy');

  const selectedWarriors = warriors.map(warrior => {
    return warrior.isSelected && (<WarriorCard
      handleClick={() => handleClick(warrior.id)}
      key={warrior.id}
      warrior={warrior}
    />)   
  })

  return (
    <>
      <StyledSection>
        <StyledHeader>Moja armia</StyledHeader>
        {selectedWarriors.every(warrior => !warrior) 
          ? <h3>Nie wybrano żadnych wojowników.</h3> 
          : selectedWarriors}
      </StyledSection>
    </>
  );
};

export default WarriorsList;
