import { FC } from 'react';

import { BasicLayout } from '../../components/layouts';

const NotFoundPage: FC = () => (
  <BasicLayout title="Page not found">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BasicLayout>
);

export default NotFoundPage;
