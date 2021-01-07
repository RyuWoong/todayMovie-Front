import DateBlock from 'Components/DateBlock';
import DataBlock from 'Components/DataBlock';
import { useState } from 'react';
import Sign from 'Routes/Sign';

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const onClick = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div>
      {showLogin ? <Sign /> : <></>}
      <button onClick={onClick}>로그인</button>
      <DateBlock />
      <DataBlock />
    </div>
  );
}

export default Home;
