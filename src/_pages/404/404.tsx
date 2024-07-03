import { ErrorPage } from '../../containers/pages';
import { SingleDataJson, PageTextContent, ErrorPageContent } from '../../interfaces/graphql';

type NotFoundPageProps = {
  data: SingleDataJson<PageTextContent<ErrorPageContent>>;
};

const NotFoundPage = ({ data }: NotFoundPageProps) => {
  const { content } = data.dataJson;

  return <ErrorPage title={content.pageTitle} errorCode={content.errorCode} errorMessage={content.errorMessage} />;
};

export default NotFoundPage;
