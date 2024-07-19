import { BasicPage } from '../../containers/pages';

import { WorksPageData } from './works.interface';
import { ProjectsSection } from './ProjectsSection';

type WorkPageProps = {
  data: WorksPageData;
};

const WorksPage = ({ data }: WorkPageProps) => {
  const { content } = data.dataJson;

  return (
    <BasicPage title={content.pageTitle}>
      <ProjectsSection data={data} type="active" />

      <ProjectsSection data={data} type="archived" />
    </BasicPage>
  );
};

export default WorksPage;
