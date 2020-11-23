import styled from 'styled-components';

import { media } from '../../../utils';

import { HeadingCmpProps } from './Heading.model';

export const StyledHeading = styled.h2<HeadingCmpProps>`
  white-space: pre-wrap;
  line-height: 1.25;
  letter-spacing: 0.2px;

  ${({ fontSize }) => {
    let value;
    switch (fontSize) {
      case 'larger':
        value = '2rem';
        break;
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
        case 'larger':
          value = '2.5rem';
          break;
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
