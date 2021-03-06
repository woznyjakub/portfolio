import { FC } from 'react';

import { Font } from '../../../utils';

import { StyledFooter, StyledText } from './Footer.style';

const content = {
  footerText: '© Jakub Woźny 2021',
};

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledText font={Font.SECONDARY}>{content.footerText}</StyledText>
    </StyledFooter>
  );
};
