import { css } from '@emotion/react';

export const Modal = css({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .SignChild': {
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
