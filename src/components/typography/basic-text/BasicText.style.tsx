import styled, { keyframes, css } from 'styled-components';

import { Color } from '../../../utils';

import { TextCmpProps } from './BasicText';

export const moveUnderline = keyframes`
  ${
    '' // `background-position-y` must be set to `100%` to work properly on safari
  }
  49.999% {
    background-position-x: 100%;
  }
  50% {
    background-size: 0%;
    background-position-x: 0%;
  }
  100% {
    background-position-x: 0%;
  }
`;

export const StyledText = styled.span<TextCmpProps>`
  display: inline-block;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  letter-spacing: 0.7px;
  :last-child {
    margin-bottom: 0;
  }
  ${({ font }) => css`
    font-family: ${font};
  `}

  ${({ gutter }) => {
    if (gutter) {
      const value = ['left', 'right'].includes(gutter) ? '1em' : '1.5rem';
      return css`
        && {
          margin-${gutter}: ${value};
        }
      `;
    } else if (gutter === null) {
      return 'margin: 0;';
    }
  }}

  ${({ fontSize }) => {
    let value;
    switch (fontSize) {
      case 'smaller':
        value = '1.125rem';
        break;
      case 'larger':
        value = '1.375rem';
        break;
      default:
        value = '1.25rem';
    }
    return `font-size: ${value};`;
  }}

  ${({ fillOnHover }) =>
    fillOnHover &&
    // I use gradient because it makes posible to animate
    // multiple lines of inline element
    css`
      text-decoration: none;
      background: linear-gradient(to top, ${Color.SECONDARY}, ${Color.SECONDARY}) 50% 0% / 100% 0 no-repeat;
      transition: background-size 0.3s, color 0.3s;
      will-change: background-size, color;
      :hover {
        color: ${Color.PRIMARY};
        background-position-y: 100%;
        background-size: 100% 100%;
      }
    `}

  ${({ moveUnderlineOnHover }) =>
    moveUnderlineOnHover &&
    css`
      display: inline;
      background-repeat: no-repeat;
      animation-duration: 1s;
      background-size: 100%;
      background-position: 100% 100%;
      :hover {
        animation-name: ${moveUnderline};
      }
    `}
`;
