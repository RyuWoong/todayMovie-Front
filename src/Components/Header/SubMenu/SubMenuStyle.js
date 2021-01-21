import { css } from '@emotion/react';

export const SubMenuStyle = css`
  position: absolute;
  top: -10;
  left: -60px;
  width: 150px;
  background-color: white;
  box-shadow: 0px 0px 10px #495057;
  & ul {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  & ul li {
    padding: 10px 0;
  }
  & ul li:hover {
    background-color: #f1f3f5;
  }
`;
