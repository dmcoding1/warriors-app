import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import ACTION_TYPES from '../../reducers/actionTypes';
import Button from '../shared/Button';
import { DispatchContext } from '../../providers/ContextProvider';
import useForm from '../../hooks/useForm';

const Container = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
  }

  div {
    width: 100%;
    margin: 1.5rem 0;
    font-size: 2rem;
  }

  div:last-of-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    border: none;
    font-size: 2rem;
    background-color: ${props =>
      props.theme.secondaryBackgroundColor};
  }

  button {
    font-size: 2rem;
    width: 10rem;
  }

  p {
    font-size: 2rem;
    color: ${props => props.theme.accent};
  }
`;

const StyledForm = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = () => {
  const [isWarriorAdded, setisWarriorAdded] = useState(
    false
  );
  const dispatch = useContext(DispatchContext);

  const addWarrior = () => {
    const { name, skill, description } = formState;
    const id = uuid().slice(0, 8).toUpperCase();
    const warrior = {
      description,
      id,
      name,
      skill,
    };

    dispatch({
      type: ACTION_TYPES.ADD_WARRIOR,
      payload: warrior,
    });

    setisWarriorAdded(true);
  };

  const [
    formState,
    handleChange,
    handleSubmit,
    handleCancel,
  ] = useForm(addWarrior);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Container>
        <h1>Dodaj wojownika</h1>
        <div>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            pattern="([^\s][A-z0-9À-ž\s]+)"
            required
            value={formState.name || ''}
          />
        </div>
        <div>
          <label htmlFor="skill">Umiejętność:</label>
          <input
            id="skill"
            name="skill"
            onChange={handleChange}
            pattern="([^\s][A-z0-9À-ž\s]+)"
            required
            type="text"
            value={formState.skill || ''}
          />
        </div>
        <div>
          <label htmlFor="description">Opis:</label>
          <input
            id="description"
            name="description"
            onChange={handleChange}
            pattern="([^\s][A-z0-9À-ž\s]+)"
            required
            type="text"
            value={formState.description || ''}
          />
        </div>
        <div>
          <Button type="submit" primary>
            Dodaj
          </Button>
          <Button onClick={handleCancel}>Anuluj</Button>
        </div>
        {isWarriorAdded && <p>Wojownik został dodany</p>}
      </Container>
    </StyledForm>
  );
};

export default Form;
