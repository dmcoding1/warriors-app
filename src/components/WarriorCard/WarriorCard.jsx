import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import ACTION_TYPES from '../../reducers/actionTypes';
import Button from '../shared/Button';
import { DispatchContext } from '../../providers/ContextProvider';
import { linkStyle } from '../styled/partials';
import Image from '../shared/Image/Image';

const StyledArticle = styled.article`
  max-width: 20rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.2rem;
  background-color: ${props =>
    props.theme.secondaryBackgroundColor};
  border-radius: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  p,
  span {
    line-height: 1.2;
  }

  span {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  ${linkStyle};
`;

const WarriorCard = ({
  warrior: { description, id, name, skill, isSelected },
}) => {
  const dispatch = useContext(DispatchContext);

  const buttonText = isSelected ? 'Usuń z' : 'Dodaj do';

  const handleClick = () => {
    dispatch({
      type: ACTION_TYPES.ADD_WARRIOR_TO_LIST,
      payload: { id, isSelected: !isSelected },
    });
  };

  const formattedDescription = description
    .split(';')
    .map(part => <span key={uuid()}>{part.trim()}</span>);

  return (
    <StyledArticle>
      <Image alt={name} size={200} />
      <h3>{name}</h3>
      <p>Umiejętność: {skill}</p>
      <p>{formattedDescription}</p>
      <StyledLink to={`/warriors/${id}`}>
        Wyświetl szczegóły
      </StyledLink>
      <Button
        onClick={handleClick}
        text={`${buttonText} mojej listy`}
      />
    </StyledArticle>
  );
};

export default WarriorCard;
