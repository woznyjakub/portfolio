import React from 'react';
import styled from 'styled-components';

import { media } from '../../../utils';
import { BasicText } from '../../typography';

const content = {
  footerText: '© Jakub Woźny 2020',
};

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1rem 0;
  ${media.tablet`
    padding-top: 3rem;
  `}
`;

const StyledText = styled(BasicText)`
  text-align: center;
  display: block;
  margin: 0 auto;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledText>{content.footerText}</StyledText>
    </StyledFooter>
  );
};

export default Footer;
