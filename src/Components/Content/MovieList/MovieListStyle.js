import { css } from '@emotion/react';

export const MovieListStyle = () => css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 200px;
  height: auto;
  box-shadow: 0 5px 20px #575756;
  border-radius: 5px;
  transition: all 250ms ease-in;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  overflow: hidden;
  font-family: MaruBuri-Regular;

  &:hover {
    transform: translateY(-3px);
  }
  & .MovieInfo {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  & img {
    width: 200px;
    height: 200px;
  }
  & h2 {
    margin: 0;
    font-size: 1.3rem;
  }
  & h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: #343a40;
  }
  & .MovieYear {
    color: #868e96;
  }
`;
