import styled from 'styled-components';

import { BasicText } from '../../components/typography';

export const SkillsList = styled.ul`
  margin: 0 auto;
  max-width: 800px;

  > li {
    padding-bottom: 2.25rem;
  }
`;

export const NestedListItemText = styled(BasicText)`
  && {
    margin-bottom: 0.5rem;
  }
`;
