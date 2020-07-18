import { css } from 'styled-components';

export const buttonStyle = css`
  position: relative;
  display: block;
  margin-top: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.textColor};
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: -10rem;
    top: -100%;
    width: 5rem;
    height: 300%;
    background-color: ${props => props.theme.accent};
    transform: rotate(-45deg);
    opacity: 0.6;
    transition: transform 0.5s ease-in-out;
  }

  &:hover:before {
    transform: translateX(40rem) rotate(-45deg);
  }
`;

export const linkStyle = css`
  ${buttonStyle};
  text-align: center;
  text-decoration: none;
  background-color: ${props => props.theme.secondary};
`;
