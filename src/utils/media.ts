import { css } from 'styled-components';

/**
 * media query breakpoints names
 */
type MediaName = 'phone' | 'tablet' | 'desktopSmall' | 'desktopMedium' | 'desktopLarge';

/**
 * media query breakpoints values in px
 */
export const sizes: Record<MediaName, number> = {
  desktopLarge: 1750,
  desktopMedium: 1500,
  desktopSmall: 1190,
  tablet: 760,
  phone: 530,
};

/**
 * map of breakpoint name
 */
type CSSMediaQuery = Partial<Record<MediaName, MediaQueryHelper>>;

/**
 * media query helper prepared to be used as `tagged template`
 */
type MediaQueryHelper = (css: TemplateStringsArray, ...interpolations: any) => {};

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
export const media = Object.keys(sizes).reduce((acc: CSSMediaQuery, label: string) => {
  acc[label] = (cssStrings: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(cssStrings, ...interpolations)}
    }
  `;

  return acc;
}, {});
