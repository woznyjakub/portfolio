import { BasicLayout } from '../../../components/layouts';
import { FeaturedErrorNumber } from '../../../components/typography';
import { ErrorPageWrapper } from '../../../components/wrappers';
import { Heading } from '../../../components/typography';

import { HeadingWrapper } from './ErrorPage.style';

type ErrorCmpProps = {
  title: string;
  errorCode: string;
  errorMessage: string;
};

export const ErrorPage = ({ title, errorCode, errorMessage }: ErrorCmpProps) => {
  return (
    <BasicLayout title={title} isReturnButton>
      <ErrorPageWrapper>
        <main>
          <section>
            <FeaturedErrorNumber as="h1">{errorCode}</FeaturedErrorNumber>
            <HeadingWrapper>
              <Heading as="p">{errorMessage}</Heading>
            </HeadingWrapper>
          </section>
        </main>
      </ErrorPageWrapper>
    </BasicLayout>
  );
};
