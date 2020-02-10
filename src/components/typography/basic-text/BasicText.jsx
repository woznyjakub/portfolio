import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../utils';

const StyledText = styled.span`
  font-size: 1.25rem;
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
        return;
    }
    return `font-size: ${value};`;
  }}

  ${({ fillOnHover }) =>
    fillOnHover &&
    // I use gradient because it makes posible to animate
    // multiple lines of inline element
    `
      text-decoration: none;
      background: linear-gradient(
        to top, ${colors.secondary}, ${colors.secondary}
      ) 50% 0% / 100% 0 no-repeat;
      transition: background-size .3s, color .3s;
      will-change: background-size, color;
      :hover {
        color: ${colors.primary};
        background-position-y: 100%;
        background-size: 100% 100%;
      }
    `}
`;

const BasicText = props => {
  return <StyledText {...props} />;
};

export default BasicText;
