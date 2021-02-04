import { useState, useEffect } from 'react';
import AppRouter from './Router';
import { css } from '@emotion/react';
import Cookies from './Cookies';
import 'antd/lib/style/themes/default.less';
import 'antd/dist/antd.less';

const layout = css`
  display: flex;
  flex-direction: column;
`;

function App() {
  const loginState = Cookies();
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    console.log('로그인 확인', loginState);
    setLogin(loginState);
  }, [loginState]);

  return (
    <div id="App" css={layout}>
      <AppRouter isLogin={isLogin} setLogin={setLogin} />
    </div>
  );
}

export default App;
