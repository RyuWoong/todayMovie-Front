import { useState } from 'react';
import { getCookie, setCookie } from 'utils/BrowserId';
import AppRouter from './Router';
import { css } from '@emotion/react';

(function () {
  if (getCookie('tid') === null) {
    setCookie('tid');
  }
  console.log('TID', getCookie('tid'));
})();

const layout = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div css={layout}>
      <AppRouter isLogin={isLogin} />
    </div>
  );
}

export default App;
