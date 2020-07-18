import { css } from 'styled-components';

export const buttonStyle = css`
  position: relative;
  display: block;
  margin-top: 0.5rem;
  padding: 1rem;
  text-transform: uppercase;
  border: none;
  border-radius: 0.5rem;
  color: ${props => props.theme.textColor};
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: -50px;
    top: -50%;
    width: 20px;
    height: 200%;
    background-color: ${props => props.theme.accent};
    transform: rotate(-45deg);
    opacity: 0.6;
    transition: transform 0.5s ease-in-out;
  }

  &:hover:before {
    transform: translateX(300px) rotate(-45deg);
  }
`;

export const linkStyle = css`
  ${buttonStyle};
  text-align: center;
  text-decoration: none;
  background-color: ${props => props.theme.secondary};
`;
