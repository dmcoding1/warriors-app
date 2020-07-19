import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../shared/Button';
import Image from '../shared/Image';

const Container = styled.section`
  min-height: calc(100vh - 10rem);
  width: 80%;
  max-width: 300px;
  padding: 2rem;
  font-size: 1.5rem;
  color: ${props => props.theme.textColor};
  overflow-wrap: break-word;
  word-wrap: break-word;

  header,
  p,
  button {
    margin-bottom: 1.5rem;
  }

  button {
    margin: 0 auto;
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
        <Image alt={name} size={300} />
        <header>{name}</header>
        <p>Umiejętność: {skill}</p>
        <p>{description}</p>
        <Button
          onClick={() => setIsModalOpen(true)}
          primary
        >
          Rezerwa
        </Button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={modalStyle}
        >
          <p>
            Czy na pewno chcesz odesłać wojownika do
            rezerwy?
          </p>
          <Button onClick={handleConfirm}>Tak</Button>
          <Button onClick={() => setIsModalOpen(false)}>
            Anuluj
          </Button>
        </Modal>
      </Container>
    </>
  );
};

export default WarriorInfo;
