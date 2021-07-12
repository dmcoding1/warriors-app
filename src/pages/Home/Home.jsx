import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import ErrorPage from '../ErrorPage';
import Header from '../../components/Header';
import Loader from '../../components/shared/Loader';
import WarriorCard from '../../components/WarriorCard';

import ACTION_TYPES from '../../reducers/actionTypes';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { FETCH_ERR_MSG } from '../../constants';
import {
  DispatchContext,
  StateContext,
} from '../../providers/ContextProvider';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem;

  @media (min-width: 578px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledSubHeader = styled.h2`
  margin: 2rem 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
`;

const StyledInput = styled.input`
  display: block;
  margin: 2rem 0 5rem;
  padding: 1rem;
  font-size: 1.8rem;
  background: ${props => props.theme.secondaryBackgroundColor};
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.textColor};
`;

const StyledLabel = styled.label`
  margin-top: 3rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

const Home = () => {
  const { error, isLoading, warriors } = useContext(
    StateContext
  );

  const dispatch = useContext(DispatchContext);

  const [searchQuery, setSearchQuery] = useState('');

  useDocumentTitle('Wojownicy Jedi');

  const handleClick = (id, isSelected) => {
    dispatch({
      type: ACTION_TYPES.ADD_WARRIOR_TO_LIST,
      payload: { id, isSelected: !isSelected },
    });
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  }

  const content = error ? (
    <ErrorPage msg={FETCH_ERR_MSG} />
  ) : (
    <>
      <Header />
      <StyledSubHeader>Dostępni Wojownicy</StyledSubHeader>
      <StyledLabel for="search">Szukaj wojownika:</StyledLabel>
      <StyledInput type="search" onChange={handleChange} id="search"/>
      <StyledSection>
        {warriors.filter(warrior => warrior?.name.toLowerCase().includes(searchQuery)).map(warrior => (
          <WarriorCard
            key={warrior.id}
            handleClick={() =>
              handleClick(warrior.id, warrior.isSelected)
            }
            warrior={warrior}
          />
        ))}
      </StyledSection>
    </>
  );

  return <>{isLoading ? <Loader /> : content}</>;
};

export default Home;
