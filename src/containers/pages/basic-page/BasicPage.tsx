import { ComponentType, FC, ReactNode } from 'react';

import { Heading } from '../../../components/typography';
import { BasicLayout } from '../../../components/layouts';

import { BasicPageCmpProps, NestedComponents } from './BasicPage.model';

const BasicPage: FC<BasicPageCmpProps> & NestedComponents = ({ children, content }) => {
  return (
    <BasicLayout title={content.pageTitle} isReturnButton>
      <header>
        <Heading as="h1" fontSize="large" gutter="bottom" centered>
          {content.pageTitle}
        </Heading>
      </header>
      <main className="stretch h-100">{children}</main>
    </BasicLayout>
  );
};

const BasicPageSection: FC = ({ children }) => {
  return <section className="m-auto w-100">{children}</section>;
};

BasicPage.Section = BasicPageSection;

export { BasicPage };
