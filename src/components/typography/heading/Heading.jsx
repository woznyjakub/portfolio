import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 2rem;
  white-space: pre-wrap;
  line-height: 1.25;
  ${({ bottomSpace }) => bottomSpace && 'padding-bottom: 1.5rem;'}
`;

const Heading = props => {
  return <StyledHeading {...props} />;
};

export default Heading;
