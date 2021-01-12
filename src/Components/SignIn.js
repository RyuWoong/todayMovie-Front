import axios from 'axios';
import React, { useState } from 'react';
import isEmail from 'utils/isEmail';

function SignIn({ setSign }) {
  const [email, setEmail] = useState('');
  const [signCheck, setSignCheck] = useState(false);
  const checkUser = () => axios({ URL: 'localhost:4000/user/login', method: 'get', params: { email: email } }).then((request) => request.data);
  const onSubmit = async (event) => {
    event.preventDefault();
    const emailState = await checkUser();
    console.log(emailState);
    //setSignCheck(true);
  };
  const onChange = (event) => {
    const value = event.target.value;
    if (isEmail(value) === true) {
      console.log('알맞는 이메일 양식입니다.');
    } else {
      console.log('알맞지 않은 이메일 양식입니다.');
    }
    setEmail(value);
  };
  const onChangeSign = () => {
    setSign(false);
  };
  return (
    <div>
      {signCheck ? (
        <>
          <h2>이메일 확인</h2>
          <div>{email}로 로그인 링크를 발송하였습니다.</div>
        </>
      ) : (
        <>
          <h2>로그인</h2>
          <label>이메일로 로그인</label>
          <form onSubmit={onSubmit}>
            <input type="textbox" name="email" placeholder="이메일을 입력해주세요." value={email} onChange={onChange} />
            <input type="submit" value="로그인" />
          </form>
          <div className="footer">
            <span>회원이 아니시라면, </span>
            <div onClick={onChangeSign}>회원가입</div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
