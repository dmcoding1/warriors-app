import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import Button from '../shared/Button';
import Image from '../shared/Image/Image';
import StyledLink from '../shared/StyledLink';

const StyledArticle = styled.article`
  max-width: 20rem;
  min-height: 42rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.2rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  background-color: ${props =>
    props.theme.secondaryBackgroundColor};
  border-radius: 2rem;

  header {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  p,
  span {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  span {
    display: block;
  }
`;

const WarriorCard = ({
  handleClick,
  warrior: { description, id, name, skill, isSelected },
}) => {
  const buttonText = isSelected
    ? 'Usuń z mojej listy'
    : 'Dodaj do mojej listy';

  const formattedDescription = description
    .split(';')
    .map(part => <span key={uuid()}>{part.trim()}</span>);

  return (
    <StyledArticle>
      <Image alt={name} size={200} />
      <header>{name}</header>
      <p>Umiejętność: {skill}</p>
      <p>{formattedDescription}</p>
      <StyledLink to={`/warriors/${id}`}>
        Wyświetl szczegóły
      </StyledLink>
      <Button onClick={handleClick} primary>
        {buttonText}
      </Button>
    </StyledArticle>
  );
};

export default WarriorCard;
