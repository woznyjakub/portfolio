import styled from 'styled-components';

import { BasicText } from '../../components/typography';

export const SkillsList = styled.ul`
  > li {
    padding-bottom: 2.25rem;
  }
`;

export const NestedListItemText = styled(BasicText)`
  && {
    margin-bottom: 0.5rem;
  }
`;
