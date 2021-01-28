import { StyleButton } from '@/Components/Common/Button';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function SignButton({ onShow }) {
  const showSign = () => {
    onShow(true);
  };

  return (
    <Button type="primary" onClick={showSign}>
      로그인
    </Button>
  );
}

export default SignButton;
