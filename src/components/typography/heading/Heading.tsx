import React from 'react';
import styled from 'styled-components';

import { media } from '../../../utils';

const StyledHeading = styled.h2`
  white-space: pre-wrap;
  line-height: 1.25;

  ${({ fontSize }) => {
    let value;
    switch (fontSize) {
      case 'large':
        value = '3rem';
        break;
      default:
        value = '1.75rem';
    }
    return `font-size: ${value};`;
  }}

  ${({ gutter }) => {
    const value = gutter === 'left' || gutter === 'right' ? '1.5em' : '1rem';
    if (gutter) {
      return `margin-${gutter}: ${value};`;
    }
  }}

  ${({ centered }) => centered && 'text-align: center;'}

  ${media.tablet`
    ${({ fontSize }) => {
      let value;
      switch (fontSize) {
        case 'large':
          value = '4rem';
          break;
        default:
          value = '2rem';
      }
      return `font-size: ${value};`;
    }}
  `}
`;

const Heading = (props) => {
  return <StyledHeading {...props} />;
};

export default Heading;
