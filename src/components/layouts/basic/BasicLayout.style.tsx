import styled from 'styled-components';

import { Color, media } from '../../../utils';

export const MainWrapper = styled.div`
  background-color: ${Color.PRIMARY};
  color: ${Color.SECONDARY};
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 1.5rem;
  text-align: right;
  ${media.phone`
    padding-left: 4rem;
    padding-right: 4rem;
  `}
  ${media.desktopMedium`
    padding-bottom: 2.5rem;
  `}
  ${media.desktopLarge`
    padding-bottom: 3.5rem;
  `}
`;
