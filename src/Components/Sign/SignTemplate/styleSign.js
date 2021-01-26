import { css } from '@emotion/react';

export const styleSign = css({
  '& .SignCancle': {
    position: 'absolute',
    right: '5px',
    top: '5px',
    cursor: 'pointer',
  },
  '& .SignChild': {
    position: 'relative',
    backgroundColor: 'white',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    width: '30vw',
    height: '30vh',
    justifyContent: 'center',
    padding: '1rem',
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const LinkButton = css({
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer',
});
