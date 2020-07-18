import React, { useContext } from 'react';
import styled from 'styled-components';

import ErrorPage from '../ErrorPage';
import Header from '../../components/Header';
import Loader from '../../components/shared/Loader';
import WarriorCard from '../../components/WarriorCard';

import ACTION_TYPES from '../../reducers/actionTypes';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { FETCH_ERR_MSG } from '../../constants';
import { DispatchContext, StateContext } from '../../providers/ContextProvider';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem;
`;

const StyledSubHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
`;

const Home = () => {
  const { error, isLoading, warriors } = useContext(
    StateContext
  );

  const dispatch = useContext(DispatchContext);

  useDocumentTitle('Wojownicy Jedi');

  const handleClick = (id, isSelected) => {
    dispatch({
      type: ACTION_TYPES.ADD_WARRIOR_TO_LIST,
      payload: { id, isSelected: !isSelected },
    });
  }

  const content = error ? (
    <ErrorPage msg={FETCH_ERR_MSG} />
  ) : (
    <>
      <Header />
      <StyledSection>
        <StyledSubHeader>
          Dostępni Wojownicy
        </StyledSubHeader>
        {warriors.map(warrior => (
          <WarriorCard 
            key={warrior.id} 
            handleClick={() => handleClick(warrior.id, warrior.isSelected)} 
            warrior={warrior} />
        ))}
      </StyledSection>
    </>
  );

  return <>{isLoading ? <Loader /> : content}</>;
};

export default Home;
