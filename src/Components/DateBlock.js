import { useEffect, useState } from 'react';

function DateBlock() {
  const [nowDate, setNowDate] = useState('시간을 받아오고 있습니다.');

  useEffect(() => {
    setInterval(() => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const hour = today.getHours();
      const minute = today.getMinutes();
      const second = today.getSeconds();
      const now = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      setNowDate(now);
    }, 1000);
  });

  return (
    <div>
      <span>{nowDate}</span>
    </div>
  );
}

export default DateBlock;
