import { css } from 'styled-components';

const breakpoints = {
  desktopLarge: 1750,
  desktopMedium: 1500,
  desktopSmall: 1190,
  tablet: 760,
  phone: 530,
};

/**
 * media query helper prepared to be used as `tagged template`
 */
type MediaQueryHelper = (css: TemplateStringsArray, ...interpolations: unknown[]) => {};

/**
 * map of breakpoint name
 */
type CSSMediaQuery = Partial<Record<keyof typeof breakpoints, MediaQueryHelper>>;

/**
 * Media query helper for styled components.
 *
 * @example:
 * const StyledComponent = styled.div`
 *   [...]
 *   ${media.tablet`
 *     margin-right: 0;
 *   `}
 * `;
 */
export const media = Object.keys(breakpoints).reduce((acc: CSSMediaQuery, label: string) => {
  acc[label] = (cssStrings: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(cssStrings, ...interpolations)}
    }
  `;

  return acc;
}, {});
