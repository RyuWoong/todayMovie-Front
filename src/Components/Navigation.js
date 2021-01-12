import React, { useState } from 'react';
import { css } from '@emotion/react';
import Profile from 'Routes/Profile';
import Sign from 'Routes/Sign';

const bar = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

function Navigation({ isLogin, setShow }) {
  const [newText, setNewText] = useState('');

  const onChange = (event) => {
    const value = event.target.value;
    setNewText(value);
  };

  const onSubmit = async (event) => {
    //redirect로 처리하게 만들기.
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
    </div>
  );
}

export default Navigation;
