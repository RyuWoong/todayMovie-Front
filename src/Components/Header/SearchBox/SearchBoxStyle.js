import { css } from '@emotion/react';

export const SearchBoxStyle = css({
  width: '300px',
  '& .SearchInput': {
    boxSizing: 'border-box',
    width: '100%',
    padding: '12px 24px',
    backgroundColor: 'transparent',
    fontsize: '1rem',
    lineHeight: '1.2rem',
    color: '#575756',
    borderRadius: '50px',
    border: '1px solid #575756',
    transition: 'all 250ms ease-in-out',
    textAlign: 'center',
    '&::placeholder': {
      color: 'color(#575756 a(0.8));',
      textTransform: 'uppercase',
      letterSpacing: '0.1rem',
    },
    '&:focus': {
      outline: '0',
      border: '1px solid transparent',
      borderBottom: '1px solid #575756',
      borderRadius: '0',
    },
  },
});
