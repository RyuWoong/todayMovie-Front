import React, { useState } from 'react';
import { css } from '@emotion/react';
import Profile from 'Routes/Profile';
import Sign from 'Routes/Sign';
import { withRouter } from 'react-router-dom';

const bar = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

function Navigation({ history, isLogin }) {
  const [newText, setNewText] = useState('');
  const [signShow, setShow] = useState(false);

  const onChange = (event) => {
    const value = event.target.value;
    setNewText(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    history.push(`/searchMovie?movieNm=${newText}`);
  };

  const onShow = () => {
    setShow(true);
  };
  return (
    <div className="Navigation" css={bar}>
      <img src="../public/logo192.png" alt="logo" />
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력해주세요." value={newText} onChange={onChange} />
        <input type="submit" value="검색" />
      </form>
      {isLogin ? <Profile /> : <button onClick={onShow}>Sign In</button>}
      {signShow && <Sign setShow={setShow} />}
    </div>
  );
}

export default withRouter(Navigation);
