import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin-bottom: 1rem;
  object-fit: cover;
  background-color: #333;
  border-radius: 1rem;
`;

const Image = ({ alt, size = 100, width, height }) => {
  return (
    <StyledImage
      alt={alt}
      height={height}
      src={`http://source.unsplash.com/random/${size}x${size}?jedi`}
      width={width}
    />
  );
};

export default Image;
