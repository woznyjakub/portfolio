import React, { FC } from 'react';
import styled from 'styled-components';

import { colors, media } from '../../../utils';
import { GlobalStyle } from '../../misc';
import { Footer } from '../../../components/sections';
import { BasicText } from '../../../components/typography';
import { OptionalWrapper } from '../../../containers/misc';

const content = {
  returnButtonText: 'Menu',
};

const MainWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  min-height: 100vh;
`;

const ButtonWrapper = styled.div`
  padding-bottom: 1.5rem;
  text-align: right;
  ${media.phone`
    padding-left: 4rem;
    padding-right: 4rem;
  `}
  ${media.tablet`
    padding-bottom: 3.5rem;
  `}
`;

const FooterPusher: FC = ({ children }) => <div className="layout-wrapper">{children}</div>;

const ReturnButton: FC = () => {
  return (
    <ButtonWrapper>
      <BasicText as="a" href="/" className="underline" moveUnderlineOnHover>
        {content.returnButtonText}
      </BasicText>
    </ButtonWrapper>
  );
};

interface BasicLayoutCmpProps {
  isFooter?: boolean;
  isReturnButton?: boolean;
}

const BasicLayout: FC<BasicLayoutCmpProps> = ({ children, isFooter = true, isReturnButton }) => {
  return (
    <MainWrapper className="stretch">
      <GlobalStyle />
      <div className="container-fluid page-padding stretch">
        <OptionalWrapper condition={isFooter} Component={FooterPusher}>
          {isReturnButton && <ReturnButton />}
          {children}
          {isFooter && <Footer />}
        </OptionalWrapper>
      </div>
    </MainWrapper>
  );
};

export default BasicLayout;
