import React, { useState } from 'react';

function SignIn({ setSign }) {
  const [email, setEmail] = useState();
  const onSubmit = () => {};
  const onSignUp = () => {};
  const onChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangeSign = () => {
    setSign(false);
  };
  return (
    <div>
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
    </div>
  );
}

export default SignIn;
