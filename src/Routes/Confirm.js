import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { UserConfirm } from 'lib/api/post/UserConfirm';
import { setCookie } from 'utils/BrowserId';

function Confirm({ location, history }) {
  const [confirmState, setConfirmState] = useState(true);
  useEffect(() => {
    const query = qs.parse(location.search);
    const requestUser = UserConfirm(query);
    requestUser
      .then((result) => {
        setCookie('aid', result.data);
        history.push('/');
      })
      .catch((err) => {
        setConfirmState(false);
      });
  });
  return <>{confirmState ? <div>컨펌</div> : <div>이미 만료된 토큰입니다. 로그인 과정을 다시 시도해주세요.</div>}</>;
}
export default Confirm;
