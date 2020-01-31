import { css } from 'styled-components';

export const sizes = {
  desktopLarge: 1750,
  desktopMedium: 1500,
  desktopSmall: 1190,
  tablet: 760,
  phone: 530,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
