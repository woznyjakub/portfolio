import { Heading, BasicText } from '../../components/typography';
import { BasicLayout } from '../../components/layouts';
import { Font } from '../../utils';

import { Grid, StyledHeader, MainContent, MenuWrapper, Menu, List, MenuItem } from './index.style';
import { IndexPageData } from './index.interface';

type IndexPageProps = {
  data: IndexPageData;
};

const IndexPage = ({ data }: IndexPageProps) => {
  const { content } = data.dataJson;

  return (
    <BasicLayout isFooter={false}>
      <Grid className="stretch">
        <StyledHeader>
          <Heading as="h1" gutter="bottom">
            {content.mainTitle}
          </Heading>
        </StyledHeader>
        <MainContent>
          <MenuWrapper>
            <Menu>
              <List>
                {content.menuItems.map(({ label, link }, i, array) => (
                  <li key={`${link}`}>
                    <MenuItem href={link} isFirst={i === 0} isLast={i === array.length - 1}>
                      {label}
                    </MenuItem>
                  </li>
                ))}
              </List>
            </Menu>
          </MenuWrapper>
        </MainContent>
        <footer>
          <p>
            <BasicText as="a" href={`mailto:${content.mailAddress}`} font={Font.SECONDARY} fillOnHover>
              {content.mailLinkLabel}
            </BasicText>
            <br />
            <BasicText font={Font.SECONDARY}>{content.copyrightText}</BasicText>
          </p>
        </footer>
      </Grid>
    </BasicLayout>
  );
};

export default IndexPage;
