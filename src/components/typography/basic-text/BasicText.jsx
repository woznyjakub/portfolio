import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: 1rem;
  ${({ bottomSpace }) => bottomSpace && 'margin-bottom: 1.5rem;'}

  ${({ underlineOnHover }) =>
    underlineOnHover &&
    `
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    `}
`;

const BasicText = props => {
  return <StyledText {...props} />;
};

export default BasicText;
