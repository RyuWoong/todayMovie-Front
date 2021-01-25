import { css } from '@emotion/react';

export const MovieListStyle = (is) => css`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 400px;
  height: 160px;
  box-shadow: 0 5px 20px #575756;
  border-radius: 5px;
  transition: all 250ms ease-in;

  &:hover {
    transform: translateY(-3px);
  }
  & .MovieInfo {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    cursor: pointer;
  }
  & img {
    height: 160px;
  }
  & div h2 {
    margin: 0;
    font-size: 1.3rem;
  }
  & div h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: #343a40;
  }
  & div span {
    color: #868e96;
  }
  & .ShowReview {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: ${is ? 'space-between' : 'flex-end'};
  }
`;
