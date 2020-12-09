import styled from 'styled-components';

import { media } from '../../../utils';

export const Wrapper = styled.div`
  height: 60%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${media.desktopSmall`
    height: 75%;
  `}
`;
