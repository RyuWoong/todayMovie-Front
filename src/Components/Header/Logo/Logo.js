import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/logo.svg';
import { css } from '@emotion/react';

function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        css={css`
          width: 64px;
          height: 64px;
        `}
      />
    </Link>
  );
}

export default Logo;
