import React, { useState } from 'react';
import { css } from '@emotion/react';
import Profile from 'Routes/Profile';
import Sign from 'Routes/Sign';
import { withRouter } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import SignButton from '../SignButton/SignButton';

const bar = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

function Navigation({ history, isLogin }) {
  const [signShow, setShow] = useState(false);

  const onKeyPress = async (event) => {};

  const onShow = () => {
    setShow(true);
  };
  return (
    <div className="HeaderTemplate" css={bar}>
      <img src="public/logo192.png" alt="logo" />
      <SearchBox />
      {isLogin ? <Profile /> : <SignButton />}
      {signShow && <Sign setShow={setShow} />}
    </div>
  );
}

export default withRouter(Navigation);
