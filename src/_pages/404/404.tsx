import { FC } from 'react';

import { ErrorPage } from '../../containers/pages';
import { ErrorCmpProps } from '../../interfaces/pages';

const NotFoundPage: FC<ErrorCmpProps> = ({ data }) => {
  return <ErrorPage data={data} />;
};

export default NotFoundPage;
