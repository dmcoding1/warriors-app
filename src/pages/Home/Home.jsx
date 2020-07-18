import React, { useContext } from 'react';
import styled from 'styled-components';

import ErrorPage from '../ErrorPage';
import Header from '../../components/Header';
import Loader from '../../components/shared/Loader';
import WarriorCard from '../../components/WarriorCard';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import { FETCH_ERR_MSG } from '../../constants';
import { StateContext } from '../../providers/ContextProvider';

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

  useDocumentTitle('Wojownicy Jedi');

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
          <WarriorCard key={warrior.id} warrior={warrior} />
        ))}
      </StyledSection>
    </>
  );

  return <>{isLoading ? <Loader /> : content}</>;
};

export default Home;
