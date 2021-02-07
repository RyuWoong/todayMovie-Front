import { css } from '@emotion/react';

export const MovieListStyle = () => css`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-top: 5px;
  width: 200px;
  height: auto;
  box-shadow: 0 5px 20px #575756;
  border-radius: 5px;
  transition: all 250ms ease-in;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  overflow: hidden;
  font-family: MaruBuri-Regular;

  & .MainTitle {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  & .MainTitle h2 {
    font-size: 0.9rem;
    margin: 0;
    align-items: center;
  }
  &:hover {
    transform: translateY(-3px);
  }

  &:hover > .MovieInfo {
    opacity: 1;
  }
`;
