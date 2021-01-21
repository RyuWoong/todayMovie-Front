import React from 'react';
import { SubMenuStyle } from './SubMenuStyle';

function SubMenu() {
  return (
    <div css={SubMenuStyle}>
      <ul>
        <li>내 설정</li>
        <li>평가 목록</li>
        <li>로그 아웃</li>
      </ul>
    </div>
  );
}

export default SubMenu;
