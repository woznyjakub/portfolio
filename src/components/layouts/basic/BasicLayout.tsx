import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../utils';
import { GlobalStyle } from '../..';

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const Shell = styled.div`
  /* background-color: red; */
`;

const MainWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  min-height: 100vh;
`;

const BasicLayout = (props) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Shell {...props}>
        <LayoutWrapper className="stretch">
          <div className="container-fluid page-padding stretch">{props.children}</div>
        </LayoutWrapper>
      </Shell>
    </MainWrapper>
  );
};

export default BasicLayout;
