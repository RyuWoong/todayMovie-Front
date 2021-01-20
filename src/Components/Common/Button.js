import { css } from '@emotion/react';

export const Button = (mainColor, subColor) => css`
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: ${mainColor};
  color: white;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  &:hover,
  &:active,
  &:focus {
    background-color: ${subColor};
    outline: 0;
  }
  button:disabled {
    opacity: 0.5;
  }
`;
