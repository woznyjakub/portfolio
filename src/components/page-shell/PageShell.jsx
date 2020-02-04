import React from 'react';
import styled from 'styled-components';

const ExternalWrapper = styled.div`
  min-height: 100vh;
`;

const InternalWrapper = styled.div`
  overflow: hidden;
`;

const Shell = styled.div`
  /* background-color: red; */
`;

const PageShell = props => {
  return (
    <Shell {...props}>
      <ExternalWrapper className="stretch">
        <InternalWrapper className="container-fluid page-padding stretch">
          {props.children}
        </InternalWrapper>
      </ExternalWrapper>
    </Shell>
  );
};

export default PageShell;
