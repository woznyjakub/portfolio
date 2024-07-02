import { ComponentType } from 'react';

import { BasicPageTextContent } from '../../../interfaces/graphql';

export interface BasicPageCmpProps {
  content: BasicPageTextContent;
}

export interface NestedComponents {
  Section: ComponentType;
}
