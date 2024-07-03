import styled from 'styled-components';

import { Font, media } from '../../../utils';

export const FeaturedNumber = styled.span`
  font-size: 6.5rem;
  font-family: ${Font.SECONDARY};
  font-weight: 400;
  ${media.desktopSmall`
    font-size: 8rem;
    margin-bottom: 0.5rem;
  `}
`;
