import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`   
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #aaa;
    border-color: #aaa transparent #aaa transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <Spinner></Spinner>
    </StyledLoader>
  );
};

export default Loader;
