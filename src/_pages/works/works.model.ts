import { GatsbyImage, FileGroup, SingleFileFromGroup } from '../../models/graphql';

export type WorkImage = SingleFileFromGroup<
  GatsbyImage<{
    originalName?: string;
  }>
>;

export interface WorksPageProps {
  data?: FileGroup<GatsbyImage>;
}
