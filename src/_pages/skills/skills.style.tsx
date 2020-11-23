import styled from 'styled-components';

import { media } from '../../utils';
import { BasicText } from '../../components/typography';

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.25rem;
  max-width: 1200px;
  margin: 0 auto;
  ${media.phone`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `};
  ${media.desktopLarge`
    grid-gap: 4rem;
  `}
`;

export const NestedListItemText = styled(BasicText)`
  line-height: 1.2;
  && {
    margin-bottom: 0.5rem;
  }
`;
