import React, { useRef, useState } from 'react';
import { LinkButton } from '../SignTemplate/styleSign';
import isEmail from '@/utils/isEmail';
import { UserLogin } from '@/lib/api/post/UserLogin';

function SignIn({ setSign, setShow }) {
  const [email, setEmail] = useState('');
  const [signCheck, setSignCheck] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const emailBox = useRef();
  const onSubmit = async (event) => {
    event.preventDefault();
    if (isEmail(email) === false) {
      return setCheckEmail(false);
    }
    const emailState = await UserLogin(email);
    console.log(emailState);
    if (emailState.status === 200) {
      setSignCheck(true);
    } else {
      setCheckEmail(false);
      emailBox.current.focus();
    }
  };
  const onChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangeSign = () => {
    setSign(false);
  };

  const onSignClose = () => {
    setShow(false);
  };
  return (
    <div className="SignChild">
      <div className="SignCancle" onClick={onSignClose}>
        X
      </div>
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
            <input type="textbox" name="email" placeholder="이메일을 입력해주세요." value={email} onChange={onChange} ref={emailBox} />
            {checkEmail ? <div></div> : <div>가입하지 않은 이메일이거나, 잘못된 이메일입니다.</div>}
            <input type="submit" value="로그인" />
          </form>
          <div className="footer">
            회원이 아니시라면,
            <span className="SignChanger" css={LinkButton} onClick={onChangeSign}>
              회원가입
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
