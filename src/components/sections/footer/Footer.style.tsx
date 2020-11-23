import styled from 'styled-components';

import { media } from '../../../utils';
import { BasicText } from '../../typography';

export const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1rem 0;
  ${media.tablet`
    padding-top: 3rem;
  `}
`;

export const StyledText = styled(BasicText)`
  text-align: center;
  display: block;
  margin: 0 auto;
`;
