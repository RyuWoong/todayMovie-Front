import { css } from '@emotion/react';

export const styleSign = css`
  & .SignCancle {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  & .SignChild {
    position: relative;
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 30vh;
    justify-content: center;
    padding: 14px;
    form {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const LinkButton = css`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;
