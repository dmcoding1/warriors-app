import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../shared/Button';
import Image from '../shared/Image';

const Container = styled.section`
  max-width: 80%;
  height: 80vw;
  padding: 2rem;
  font-size: 1.5rem;
  color: ${props => props.theme.textColor};

  header,
  p,
  button {
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.5;
  }

  header {
    font-size: 2.2rem;
  }
`;

Modal.setAppElement('#root');

const modalStyle = {
  overlay: {
    zIndex: '100',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.5rem',
    zIndex: '100',
  },
};

const WarriorInfo = ({
  description,
  handleClick,
  name,
  skill,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = useHistory();

  const handleConfirm = () => {
    handleClick();
    history.goBack();
  };

  return (
    <>
      <Container>
        <Image alt={name} size={400} />
        <header>{name}</header>
        <p>Umiejętność: {skill}</p>
        <p>{description}</p>
        <Button
          text="Rezerwa"
          onClick={() => setIsModalOpen(true)}
        />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={modalStyle}
        >
          <p>
            Czy na pewno chcesz odesłać wojownika do
            rezerwy?
          </p>
          <Button text="Tak" onClick={handleConfirm} />
          <Button
            text="Nie"
            onClick={() => setIsModalOpen(false)}
          />
        </Modal>
      </Container>
    </>
  );
};

export default WarriorInfo;
