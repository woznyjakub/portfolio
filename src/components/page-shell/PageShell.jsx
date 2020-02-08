import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const Shell = styled.div`
  /* background-color: red; */
`;

const PageShell = props => {
  return (
    <Shell {...props}>
      <LayoutWrapper className="stretch">
        <div className="container-fluid page-padding stretch">{props.children}</div>
      </LayoutWrapper>
    </Shell>
  );
};

export default PageShell;
