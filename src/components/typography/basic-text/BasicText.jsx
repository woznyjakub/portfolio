import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../utils';

const StyledText = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  :last-child {
    margin-bottom: 0;
  }
  ${({ bottomSpace }) => bottomSpace && 'margin-bottom: 1.5rem;'}

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
