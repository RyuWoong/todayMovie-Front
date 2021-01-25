import { StyleButton } from 'Components/Common/Button';
import React from 'react';

function SignButton({ onShow }) {
  const showSign = () => {
    onShow(true);
  };

  return (
    <button css={StyleButton('#ff922b', '#fd7e14')} onClick={showSign}>
      로그인
    </button>
  );
}

export default SignButton;
