import React from 'react';
import styled from 'styled-components';

import { getRandomInt } from '../../helpers';
import Button from '../shared/Button';
import Image from '../shared/Image/Image';
import StyledLink from '../shared/StyledLink';

const StyledArticle = styled.article`
  max-width: 25rem;
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

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    .map((part, index) => <span key={index}>{part.trim()}</span>);

  const imageSize = getRandomInt(100, 200);

  return (
    <StyledArticle>
      <Image alt={name} height='20rem' size={imageSize} />
      <header>{name}</header>
      <p>Umiejętność: {skill}</p>
      <p>{formattedDescription}</p>
      <StyledButtonContainer>
        <StyledLink to={`/warriors/${id}`}>
          Wyświetl szczegóły
        </StyledLink>
        <Button onClick={handleClick} primary>
          {buttonText}
        </Button>
      </StyledButtonContainer>
    </StyledArticle>
  );
};

export default WarriorCard;
