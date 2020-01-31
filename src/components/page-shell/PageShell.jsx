import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  min-height: 100vh;
`;

const Shell = styled.section`
  /* background-color: red; */
`;

const PageShell = props => {
  return (
    <Shell {...props}>
      <MainWrapper>{props.children}</MainWrapper>
    </Shell>
  );
};

export default PageShell;
