import { ComponentType } from 'react';

import { BasicPageTextContent } from '../../../models/graphql';

export interface BasicPageCmpProps {
  content: BasicPageTextContent;
}

export interface NestedComponents {
  Section: ComponentType;
}
