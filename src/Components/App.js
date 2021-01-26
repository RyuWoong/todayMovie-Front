import { useState, useEffect } from 'react';
import AppRouter from './Router';
import { css } from '@emotion/react';
import Cookies from './Cookies';

const layout = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & .Page {
    margin-top: 70px;
  }
`;

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const loginState = Cookies();
    console.log('로그인 확인', loginState);
    setLogin(loginState);
  }, [isLogin]);

  return (
    <div css={layout}>
      <AppRouter isLogin={isLogin} setLogin={setLogin} />
    </div>
  );
}

export default App;
