import styled from 'styled-components';

import { BasicText } from '../../components/typography';

export const NestedListItemText = styled(BasicText)`
  line-height: 1.2;
  && {
    margin-bottom: 0.5rem;
  }
`;
