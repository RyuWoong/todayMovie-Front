import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Sign from 'Components/Sign/SignTemplate/Sign';
import SearchBox from '../SearchBox/SearchBox';
import SignButton from '../SignButton/SignButton';

import { HeaderStyle } from './HederTemplateStyle';
import Logo from '../Logo/Logo';
import UserIcon from '../UserIcon/UserIcon';

function HeaderTemplate({ history, isLogin }) {
  const [signShow, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };
  return (
    <div className="HeaderTemplate" css={HeaderStyle}>
      <Logo />
      <SearchBox />
      {isLogin ? <UserIcon /> : <SignButton onShow={onShow} />}
      {signShow && <Sign setShow={setShow} />}
    </div>
  );
}

export default withRouter(HeaderTemplate);
