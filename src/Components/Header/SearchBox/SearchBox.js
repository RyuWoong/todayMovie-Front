import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function SearchBox({ history }) {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      //엔터시 이벤트
      history.push(`/searchMovie?movieNm=${value}`);
    }
  };
  return (
    <div className="SearchBox">
      <input type="search" value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="영화를 검색해주세요." />
    </div>
  );
}

export default withRouter(SearchBox);
