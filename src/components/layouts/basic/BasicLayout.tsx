import React from 'react';
import styled, { StyledComponent } from 'styled-components';

import { colors } from '../../../utils';
import { GlobalStyle } from '../..';

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  min-height: 100vh;
`;

const BasicLayout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <LayoutWrapper className="stretch">
        <div className="container-fluid page-padding stretch">{children}</div>
      </LayoutWrapper>
    </MainWrapper>
  );
};

export default BasicLayout;
