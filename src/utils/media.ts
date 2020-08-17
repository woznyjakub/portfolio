import { css, DefaultTheme, CSSObject } from 'styled-components';

export const sizes = {
  desktopLarge: 1750,
  desktopMedium: 1500,
  desktopSmall: 1190,
  tablet: 760,
  phone: 530,
};

// @todo: rewrite types to prettier ones
interface Media {
  desktopLarge?: MediaQueryHelper;
  desktopMedium?: MediaQueryHelper;
  desktopSmall?: MediaQueryHelper;
  tablet?: MediaQueryHelper;
  phone?: MediaQueryHelper;
}

type MediaQueryHelper = (css: TemplateStringsArray) => {};

const media: Media = Object.keys(sizes).reduce((acc: {}, label: string) => {
  acc[label] = (cssStrings: TemplateStringsArray, ...interpolations: any) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(cssStrings, ...interpolations)}
    }
  `;

  return acc;
}, {});

export default media;
