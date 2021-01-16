import React from 'react';

function SignButton({ onShow }) {
  const showSign = () => {
    onShow(true);
  };

  return <button onClick={showSign}>로그인</button>;
}

export default SignButton;
