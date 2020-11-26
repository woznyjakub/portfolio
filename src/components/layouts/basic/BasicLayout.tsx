import React, { FC } from 'react';

import { GlobalStyle } from '../../misc';
import { Footer } from '../../sections';
import { BasicText } from '../../typography';
import { OptionalWrapper } from '../../../containers/misc';
import { Font } from '../../../utils';

import { MainWrapper, ButtonWrapper } from './BasicLayout.style';
import { BasicLayoutCmpProps } from './BasicLayout.model';

const content = {
  returnButtonText: 'Menu',
};

const FooterPusher: FC = ({ children }) => <div className="layout-wrapper">{children}</div>;

const ReturnButton: FC = () => {
  return (
    <ButtonWrapper>
      <BasicText as="a" href="/" className="underline" font={Font.SECONDARY} moveUnderlineOnHover>
        {content.returnButtonText}
      </BasicText>
    </ButtonWrapper>
  );
};

export const BasicLayout: FC<BasicLayoutCmpProps> = ({ children, isFooter = true, isReturnButton }) => {
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
