import { FC } from 'react';

import { BasicLayout } from '../../../components/layouts';
import { FeaturedErrorNumber } from '../../../components/typography';
import { ErrorPageWrapper } from '../../../containers/misc';
import { ErrorCmpProps } from '../../../models/pages';
import { Heading } from '../../../components/typography';

import { HeadingWrapper } from './ErrorPage.style';

export const ErrorPage: FC<ErrorCmpProps> = ({ data }) => {
  const { content } = data.dataJson;

  return (
    <BasicLayout title={content.pageTitle} isReturnButton>
      <ErrorPageWrapper>
        <main>
          <section>
            <FeaturedErrorNumber as="h1">{content.errorCode}</FeaturedErrorNumber>
            <HeadingWrapper>
              <Heading as="p">{content.errorMessage}</Heading>
            </HeadingWrapper>
          </section>
        </main>
      </ErrorPageWrapper>
    </BasicLayout>
  );
};
