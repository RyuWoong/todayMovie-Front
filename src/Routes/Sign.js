import React, { useState } from 'react';
import SignIn from 'Components/SignIn';
import SignUp from 'Components/SignUp';

function Sign() {
  const [signState, setSign] = useState(true);

  return <>{signState ? <SignIn setSign={setSign} /> : <SignUp setSign={setSign} />}</>;
}

export default Sign;
