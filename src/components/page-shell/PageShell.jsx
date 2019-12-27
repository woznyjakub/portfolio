import React from 'react';
import styled from 'styled-components';

const StyledShell = styled.section`
  background-color: red;
`;

const PageShell = props => {
  return <StyledShell {...props}></StyledShell>;
};

export default PageShell;
