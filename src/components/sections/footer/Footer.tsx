import React, { FC } from 'react';

import { StyledFooter, StyledText } from './Footer.style';

const content = {
  footerText: '© Jakub Woźny 2020',
};

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledText>{content.footerText}</StyledText>
    </StyledFooter>
  );
};
