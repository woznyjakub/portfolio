import styled from 'styled-components';

import { media } from '../../utils';

export const StyledIcon = styled.img`
  display: block;
  margin: 0 auto;
  height: 3rem;
  margin-bottom: 1rem;

  ${media.phone`
    height: 5rem;
  `}

  ${media.desktopSmall`
    height: 6.5rem;
  `}
`;

export const ContactItemWrapper = styled.div`
  text-align: center;
`;
