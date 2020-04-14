import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors } from '../../../utils';

const moveUnderline = keyframes`
  49.999% {
    background-position: 100%;
  }
  50% {
    background-size: 0%;
    background-position: 0%;
  }
  100% {
    background-position: 0%;
  }
`;

const StyledText = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  :last-child {
    margin-bottom: 0;
  }

  ${({ gutter }) => {
    const value = gutter === 'left' || gutter === 'right' ? '1em' : '1.5rem';
    if (gutter) {
      return `margin-${gutter}: ${value};`;
    }
  }}

  ${({ fontSize }) => {
    let value;
    switch (fontSize) {
      case 'smaller':
        value = '1.125rem';
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
      background: linear-gradient(to top, ${colors.secondary}, ${colors.secondary}) 50% 0% / 100% 0
        no-repeat;
      transition: background-size 0.3s, color 0.3s;
      will-change: background-size, color;
      :hover {
        color: ${colors.primary};
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
      background-position: 100%;
      :hover {
        animation-name: ${moveUnderline};
      }
    `}
`;

const BasicText = (props) => {
  return <StyledText {...props} />;
};

export default BasicText;
