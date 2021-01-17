import { css } from '@emotion/react';

export const MovieListStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  marginRight: '20px',
  marginBottom: '20px',
  width: '400px',
  boxShadow: '0 5px 20px #575756',
  borderRadius: '5px',
  '& div': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5px',
  },
  '& h2,h3': {
    margin: '0',
  },
  '& span': {
    color: '#868e96',
  },
});
