import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { UserConfirm } from 'lib/api/post/UserConfirm';

function Confirm({ location, history, setLogin }) {
  const [confirmState, setConfirmState] = useState(true);
  useEffect(() => {
    const query = qs.parse(location.search);
    const requestUser = UserConfirm(query);
    requestUser
      .then((result) => {
        const { status } = result;
        if (status === 201) {
          setLogin(true);
          history.push('/');
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        console.log(err);
        setConfirmState(false);
      });
  });
  return <div className="Page">{confirmState ? '컨펌' : '이미 만료된 토큰입니다. 로그인 과정을 다시 시도해주세요.'}</div>;
}
export default Confirm;
