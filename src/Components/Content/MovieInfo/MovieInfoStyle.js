import { css } from '@emotion/react';

export const MovieInfoStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;

  & .MovieOverview {
    display: inline-block;
    overflow: hidden;
    text-align: left;
    white-space: normal;
    height: 14.4rem;
    line-height: 1.2rem;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
