import React, { useState } from 'react';
import defaultUser from 'default.png';
import { UserIconStyle } from 'Components/Header/UserIcon/UserIconStyle';
import SubMenu from '../SubMenu/SubMenu';

function UserIcon() {
  const [onSubMenu, setSubMenu] = useState(false);

  const handleSubMenu = () => {
    setSubMenu(!onSubMenu);
  };
  return (
    <div css={UserIconStyle} onClick={handleSubMenu}>
      <img src={defaultUser} alt="User" />
      {onSubMenu && <SubMenu />}
    </div>
  );
}

export default UserIcon;
