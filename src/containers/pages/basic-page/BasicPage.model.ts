import { ComponentType } from 'react';

interface PageContent {
  pageTitle: string;
}

export interface BasicPageCmpProps {
  content: PageContent;
}

export interface NestedComponents {
  Section: ComponentType;
}
