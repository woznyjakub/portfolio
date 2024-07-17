import { FC } from 'react';

import { Heading } from '../../../components/typography';
import { BasicLayout } from '../../../components/layouts';

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

const BasicPageSection = ({ children }) => {
  return <section className="m-auto w-100">{children}</section>;
};

BasicPage.Section = BasicPageSection;

export { BasicPage };
