import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  line-height: 2.5;
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Jedi &copy; {new Date().getFullYear()}
    </StyledFooter>
  );
};

export default Footer;
