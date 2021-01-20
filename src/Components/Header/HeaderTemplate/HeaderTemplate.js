import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Profile from 'Routes/Profile';
import Sign from 'Components/Sign/Sign';
import SearchBox from '../SearchBox/SearchBox';
import SignButton from '../SignButton/SignButton';

import { HeaderStyle } from './HederTemplateStyle';
import Logo from '../Logo/Logo';

function HeaderTemplate({ history, isLogin }) {
  const [signShow, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };
  return (
    <div className="HeaderTemplate" css={HeaderStyle}>
      <Logo />
      <SearchBox />
      {isLogin ? <Profile /> : <SignButton onShow={onShow} />}
      {signShow && <Sign setShow={setShow} />}
    </div>
  );
}

export default withRouter(HeaderTemplate);
