import React, { useState } from 'react';
import SignIn from 'Components/Sign/SignIn/SignIn';
import SignUp from 'Components/Sign/SignUp/SignUp';

function Sign({ setShow }) {
  const [signState, setSign] = useState(true);

  return <>{signState ? <SignIn setSign={setSign} setShow={setShow} /> : <SignUp setSign={setSign} setShow={setShow} />}</>;
}

export default Sign;