import { FC } from 'react';

import { Head, GlobalStyle } from '../../misc';
import { Footer } from '../../sections';
import { BasicText } from '../../typography';
import { OptionalWrapper } from '../../../components/wrappers';
import { Font } from '../../../utils';

import { MainWrapper, ButtonWrapper } from './BasicLayout.style';
import { BasicLayoutCmpProps } from './BasicLayout.model';

const content = {
  returnButtonText: 'Menu',
};

const FooterPusher: FC = ({ children }) => {
  return <div className="layout-wrapper">{children}</div>;
};

const ReturnButton: FC = () => {
  return (
    <ButtonWrapper>
      <BasicText as="a" href="/" className="underline" font={Font.SECONDARY} moveUnderlineOnHover>
        {content.returnButtonText}
      </BasicText>
    </ButtonWrapper>
  );
};

export const BasicLayout: FC<BasicLayoutCmpProps> = ({ children, isFooter = true, isReturnButton, title }) => {
  return (
    <MainWrapper className="stretch">
      <Head title={title} />
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
