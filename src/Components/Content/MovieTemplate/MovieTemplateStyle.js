import { css } from '@emotion/react';

export const MovieTemplateStyle = css({
  listStyleType: 'none',
  marginTop: '10px',
  marginBottom: '10px',
  '& ul': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
