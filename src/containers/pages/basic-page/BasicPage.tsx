import { FC } from 'react';

import { Heading } from '../../../components/typography';
import { BasicLayout } from '../../../components/layouts';
import styled from 'styled-components';

type BasicPageCmpProps = {
  title: string;
};

type NestedComponents = {
  Section: FC;
};

const BasicPage: FC<BasicPageCmpProps> & NestedComponents = ({ children, title }) => {
  return (
    <BasicLayout title={title} isReturnButton>
      <header>
        <Heading as="h1" fontSize="large" pageTitleGutter centered>
          {title}
        </Heading>
      </header>
      <main className="stretch h-100">{children}</main>
    </BasicLayout>
  );
};

const StyledSection = styled.section`
  margin: auto;
  width: 100%;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const BasicPageSection = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

BasicPage.Section = BasicPageSection;

export { BasicPage };
