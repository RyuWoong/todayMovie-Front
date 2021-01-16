import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Profile from 'Routes/Profile';
import Sign from 'Routes/Sign';
import SearchBox from '../SearchBox/SearchBox';
import SignButton from '../SignButton/SignButton';

import { HeaderStyle } from './HederTemplateStyle';

function HeaderTemplate({ history, isLogin }) {
  const [signShow, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };
  return (
    <div className="HeaderTemplate" css={HeaderStyle}>
      <img src="../public/logo192.png" alt="logo" />
      <SearchBox />
      {isLogin ? <Profile /> : <SignButton onShow={onShow} />}
      {signShow && <Sign setShow={setShow} />}
    </div>
  );
}

export default withRouter(HeaderTemplate);
