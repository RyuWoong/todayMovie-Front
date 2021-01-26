import React, { useState } from 'react';
import SignIn from 'Components/Sign/SignIn/SignIn';
import SignUp from 'Components/Sign/SignUp/SignUp';
import { styleSign } from './styleSign';
import { Modal } from 'Components/Common/Modal';

function Sign({ setShow }) {
  const [signState, setSign] = useState(true);

  return (
    <div className="Sign" css={(Modal, styleSign)}>
      {signState ? <SignIn setSign={setSign} setShow={setShow} /> : <SignUp setSign={setSign} setShow={setShow} />}
    </div>
  );
}

export default Sign;
