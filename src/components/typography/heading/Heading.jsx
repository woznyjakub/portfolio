import React from 'react';
import styled from 'styled-components';

import { media } from '../../../utils';

const StyledHeading = styled.h2`
  font-size: 1.75rem;
  white-space: pre-wrap;
  line-height: 1.25;

  ${({ gutter }) => {
    const value = gutter === 'left' || gutter === 'right' ? '1.5em' : '1rem';
    if (gutter) {
      return `margin-${gutter}: ${value};`;
    }
  }}

  ${media.tablet`
    font-size: 2rem;
  `}
`;

const Heading = props => {
  return <StyledHeading {...props} />;
};

export default Heading;
