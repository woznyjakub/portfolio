import { Font } from '../../../utils';
import { StyledFooter, StyledText } from './Footer.style';

const content = {
  footerText: '© Jakub Woźny 2024',
};

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText font={Font.SECONDARY}>{content.footerText}</StyledText>
    </StyledFooter>
  );
};
