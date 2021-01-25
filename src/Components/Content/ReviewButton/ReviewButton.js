import { StyleButton } from 'Components/Common/Button';
import React from 'react';
import { css } from '@emotion/react';

const icon = css`
  margin-right: 10px;
`;

function ReviewButton() {
  return (
    <>
      <button css={StyleButton('#69db7c', '#51cf66')}>
        <span css={icon}>📝</span>리뷰남기기
      </button>
    </>
  );
}

export default ReviewButton;
