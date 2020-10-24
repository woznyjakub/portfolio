import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../utils';
import { GlobalStyle } from '../../misc';
import { Footer } from '../../../components/sections';
import { OptionalWrapper } from '../../../containers/misc';

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  min-height: 100vh;
`;

const FooterPusher: React.FC = ({ children }) => <div className="layout-wrapper">{children}</div>;

interface BasicLayoutCmpProps {
  isFooter?: boolean;
}

/**
 * @param isFooter determitates whether the default footer should be used.
 */
const BasicLayout: React.FC<BasicLayoutCmpProps> = ({ children, isFooter = true }) => {
  return (
    <MainWrapper className="stretch">
      <GlobalStyle />
      <div className="container-fluid page-padding stretch">
        <OptionalWrapper condition={isFooter} Component={FooterPusher}>
          {children}
          {isFooter && <Footer />}
        </OptionalWrapper>
      </div>
    </MainWrapper>
  );
};

export default BasicLayout;
