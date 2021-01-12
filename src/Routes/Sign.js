import React, { useState } from 'react';
import { css } from '@emotion/react';
import SignIn from 'Components/SignIn';
import SignUp from 'Components/SignUp';

const modal = css({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

function Sign({ setShow }) {
  const [signState, setSign] = useState(true);

  return <div css={modal}>{signState ? <SignIn setSign={setSign} /> : <SignUp setSign={setSign} />}</div>;
}

export default Sign;
