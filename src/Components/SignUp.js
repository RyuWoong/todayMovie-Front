import React, { useState } from 'react';

function SignUp({ setSign }) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const onSubmit = () => {};
  const onChange = (event) => {
    const value = event.target.value;
    if (event.target.name === 'email') {
      setEmail(value);
    } else if (event.target.name === 'name') {
      setName(value);
    }
  };
  const onChangeSign = () => {
    setSign(true);
  };

  return (
    <div>
      <h2>회원가입</h2>
      <label>이메일로 회원가입</label>
      <form onSubmit={onSubmit}>
        <input type="textbox" name="email" placeholder="이메일을 입력해주세요." value={email} onChange={onChange} />
        <input type="textbox" name="name" placeholder="이름을 입력해주세요." value={name} onChange={onChange} />
        <input type="submit" value="회원가입" />
      </form>
      <div className="footer">
        <span>회원이시라면, </span>
        <div onClick={onChangeSign}>로그인</div>
      </div>
    </div>
  );
}

export default SignUp;
